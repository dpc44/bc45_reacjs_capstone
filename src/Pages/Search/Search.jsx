import React, { useEffect, useRef, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import useGetApi from '../../CustomHooks/useGetApi'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'
import searchCSS from '../Search/search.module.css'
const Search = (props) => {
  const url = useSelector(state => state.searchStringReducer);
  const [arrProduct, setArrProduct] = useState([]);
  const getProductByKeyword = async () => {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${url.kword}`,
      method: 'GET'
    })
    setArrProduct(res.data.content)
  }
  const getAlltProduct = async () => {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product`,
      method: 'GET'
    })
    setArrProduct(res.data.content)
  }
  const getProductByCategory = async (value) => {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${value}`,
      method: 'GET'
    })
    setArrProduct(res.data.content)
  }
  useEffect(() => {
    if (url.kword !== '') {
      getProductByKeyword()
    } else if (url.kword === '') {
      getAlltProduct();
    }
  }, [url.kword])
  return (
    <div className='p-5 ' style={{ backgroundColor: '#999999' }}>
      <h3 className='text-center fs-1 '>Filter</h3>
      <select className='' onChange={(e) => {
        let { value } = e.target;
        if (value === 'low-to-high') {
          let arrPriceItem = _.sortBy(arrProduct, _.property('price'));
          setArrProduct(arrPriceItem)
        } else if (value === 'high-to-low') {
          let arrPriceItem = _.sortBy(arrProduct, _.property('price')).reverse();
          setArrProduct(arrPriceItem)
        }
      }}>
        <option >All</option>
        <option >low-to-high</option>
        <option >high-to-low</option>
      </select>
      <select name="" id="" onChange={(e) => {
        let { value } = e.target;
        if (value === 'All') {
          getAlltProduct();
        } else {
          getProductByCategory(value);
        }
      }}>
        <option >All</option>
        <option >Men</option>
        <option >Women</option>
      </select>
      <select name="" id="" onChange={(e) => {
        let { value } = e.target;
        if (value === 'All') {
          getAlltProduct();
        } else {
          getProductByCategory(value);
        }
      }}>
        <option >All</option>
        <option >Nike</option>
        <option >Adidas</option>
      </select>

      <div className='row'>
        {arrProduct.map((item) => {
          return <div className='col-12 col-md-6 col-lg-4 my-3' key={item.id}>
            <div className={`card ${searchCSS.cardTag}`} style={{backgroundImage:'url("./Img/111.jpg")'}}>
              <img src={item.image} alt="...." />
              <div className={`card-body ${searchCSS.cardBody}`} style={{ minHeight: '150px' }}>
                <h3 className='text-center'>{item.name}</h3>
                <p className='text-danger fs-4'>{item.price}$</p>
                <p>{item.shortDescription}</p>
              </div>
              <div className={`card-body ${searchCSS.cardFooter}`}>
                <button className='btn text-white my-3 p-2' style={{ backgroundColor: '#198754' }}>Add to Cart<i className="fa fa-cart-arrow-down mx-1"></i></button>
              </div>
            </div>

          </div>
        })}
      </div>


    </div>
  )
}

export default Search