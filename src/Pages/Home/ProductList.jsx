import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAPI } from '../../redux/reducers/ProductListReducer';
import { NavLink } from 'react-router-dom';

const ProductList = () => {
    const { arrProduct } = useSelector(state => state.ProductListReducer);

    

  
  
    return (
      <div className="container">
        <div className="row">
          {arrProduct.map((item) => {
            return <div className="col-4" key={item.id}>
              <div className="card mt-4 position-relative">
                <img className="card-img-top" src={item.image} alt={item.name}/>
                <div className="card-body text-center" style={{minHeight:150}}>
                  <h4 className="card-title product-name">{item.name}</h4>
                  <p className="card-text short-description">{item.shortDescription}</p>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className=" col-6">
                      <NavLink href="#" className=' btn btn-dark text-decoration-none  text-white w-100 h-100 fs-4 ' to={`/detail/${item.id}`}>View Detail</NavLink>
                    </div>
                    <div className=" col-6">
                      <p className='text-center align-items-center  justify-content-center fs-4  mt-2'>{item.price}</p>
                    </div>
                  </div>
                </div>
                <i className='fa fa-heart position-absolute' style={{top:10, right:10, color:'red',fontSize:30, cursor:'pointer'}} onClick={()=>{
                    console.log('first')
                    
  
                }}>
  
                </i>
              </div>
              
            </div>
          })}
        </div>
      </div>
  
    )
}

export default ProductList