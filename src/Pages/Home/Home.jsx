import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAPI } from '../../redux/reducers/ProductListReducer';
import { NavLink } from 'react-router-dom';
import ProductList from './ProductList';
import Carousel from './Carousel';

const Home = () => {
  const { arrProduct } = useSelector(state => state.ProductListReducer);
  const [random, setRandom] = useState();
  const dispatch = useDispatch();
  const ProductCarousel = []

    const getRandomProduct = () => {
      // console.log('here')
        let count = 0;
        if (arrProduct.length > 0) {
            while (count < 3) {
                let number = Math.floor(Math.random() * arrProduct.length)
                count++;
                ProductCarousel.push(arrProduct[number]);
            }
            // console.log('ProductCarousel', ProductCarousel[0]);
        }


        

    }
  const productListAPI = async () => {
    const actionAsync = getProductListAPI();

    dispatch(actionAsync);


    
  }

  useEffect(() => {
    
    productListAPI(); 
  }, [])


  useEffect(() => {
    getRandomProduct();
    setRandom(ProductCarousel)
   
  }, [arrProduct])
  // console.log('random ',random)


  const arrProductMemo = useMemo(()=> ProductCarousel, [])

  return (
    <div >
      <Carousel ProductCarousel ={arrProduct}/>
      <h3 className='text-center fs-3 fw-5 py-3' style={{backgroundColor:'#999999'}}>Products List</h3>
      <div style={{backgroundColor:'#999999'}}>
      <ProductList />
      </div>
    </div>

  )
}

export default Home