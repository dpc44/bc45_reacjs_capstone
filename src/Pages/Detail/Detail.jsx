import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import detailCSS from './detail.module.css'
import { getProductListAPI } from '../../redux/reducers/ProductListReducer';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const param = useParams();
  const { detailProduct } = useSelector(state => state.ProductListReducer);
  const dispatch = useDispatch()
  const productListAPI = async () => {
    const actionAsync = getProductListAPI(param.id);
    dispatch(actionAsync);
  }

  useEffect(() => {
    productListAPI();
  }, [param.id])


  // console.log('detailProduct.size', detailProduct.size)
  // console.log(detailProduct)
  return (
    <div className='container'>
      <div className={`${detailCSS.containerDetail}`}>
        <div className={detailCSS.imgProduct}>
          <img src={detailProduct.image} alt />
        </div>


        <div className={`${detailCSS.detailProduct}`}>
          <h3 className={`${detailCSS.nameDetail} fs-4`}>{detailProduct.name}</h3>
          <p className={detailCSS.descriptionDetail}>{detailProduct.description}</p>
          <p style={{ color: 'greenyellow', fontSize: 20, fontWeight: 600 }} className="my-4">Available Size</p>
          <div className={`${detailCSS.sizeList}`}>

            {detailProduct.size?.map((size) => {
              return <button className="btn btn-success me-2">{size}</button>
            })}
            {/* <button className="btn btn-success me-2">3</button> */}
          </div>
          <p className={`${detailCSS.price}`}>{detailProduct.price}$</p>
          <div className={`${detailCSS.quantity} d-flex`}>
            <button className=' me-2 px-3  btn btn-primary align-content-center' >-</button>
            <p className='mx-2 mt-2 align-content-center'>0</p>
            <button className='mx-2 px-3 btn btn-primary align-content-center'>+</button>
          </div>
          <button className="btn btn-success my-2">Add to Cart</button>
        </div>
      </div>
        
      <h3 className='text-center fs-3 fw-5 my-3'>Related Products</h3>
      <div className='row'>

      {detailProduct.relatedProducts?.map((item)=>{
        return <div className="col-4 my-3" key={item.id}>
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
        </div>
        
      </div>
      })}
      </div>
      
    </div>
  )
}

export default Detail