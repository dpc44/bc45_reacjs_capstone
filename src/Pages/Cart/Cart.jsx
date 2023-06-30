import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, delItemAction, postOrderApi } from '../../redux/reducers/CartReducer';
const Cart = () => {
    const { gioHang } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    // console.log('gioHang: ', gioHang)

    const newGioHang = gioHang.map(({id, quantity}) => ({id,quantity}));
    // console.log("newGioHang: ", newGioHang)
    // format $
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 3,
    });

    const tinhTongTien = () =>{
        let tong = 0;
        // console.log('here')
        for(let item of gioHang){
            tong += (item.price * item.quantity);
        }
        return tong;
    }


    const orderApi = async () => {
        
        const actionAsync = postOrderApi(newGioHang);
    
        dispatch(actionAsync);
    
    
        
      }
    return (
        <div className='container'>
            Cart
            <table className='table'>
                <thead>
                    <tr>

                        <th>id</th>
                        <th>name</th>
                        <th>img</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {gioHang.map((item, index) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.image} alt="..." width={50} />
                            </td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-primary mx-2' onClick={() => {
                                    const action = changeQuantity({ idProduct: item.id, quantityNumber: -1 });
                                    dispatch(action);
                                }}>-</button>
                                {item.quantity}
                                <button className='btn btn-primary mx-2' onClick={() => {
                                    const action = changeQuantity({ idProduct: item.id, quantityNumber: 1 });
                                    dispatch(action);
                                }}>+</button>
                            </td>
                            <td>{item.quantity * item.price}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={() => {
                                    const action = delItemAction(item.id)
                                    dispatch(action);
                                 }}>
                                    <i className='fa fa-close'></i>
                                </button>
                            </td>
                        </tr>

                    })}
                </tbody>

                


            </table>
            {gioHang.length !== 0 ? <div className='d-flex justify-content-between'>
                    <h3>Total: {USDollar.format(tinhTongTien())}</h3>
                    <button className='btn btn-primary mx-5 px-4' onClick={orderApi}>Order</button>


            </div> : <></> }
            
        </div>
    )
}

export default Cart