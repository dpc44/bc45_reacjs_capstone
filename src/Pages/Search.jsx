import React, { useEffect, useRef, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import useGetApi from '../CustomHooks/useGetApi'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
const Search = (props) => {
  const url = useSelector(state => state.searchStringReducer);
  console.log('abcccc', url)
  const getProductByKeyword = async () => {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${url}`,
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
  const [arrProduct, setArrProduct] = useState([]);
  // useEffect(() => {
    
  // },[])
  useEffect(() => {
    if(url !== 1){
      getProductByKeyword()
    }else if(url === 1){
      getAlltProduct();
    }
  }, [url])
  return (
    <div className='container'>
      <div className='row'>
        {arrProduct.map((item) => {
          return <div className='col-4 my-3' key={item.id}>
            <div className='card'>
              <img src={item.image} alt="...." />
              <div className='card-body bg-pr'>
                <h3>{item.name}</h3>
                <p>{item.price}$</p>
                <p>{item.shortDescription}$</p>
                <button className='btn btn-primary'>Add to Cart<i className="fa fa-cart-arrow-down mx-1"></i></button>
              </div>
              
            </div>

          </div>
        })}
      </div>


    </div>
  )
}

export default Search