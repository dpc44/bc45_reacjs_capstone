import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
    const { gioHang } = useSelector(state => state.CartReducer);
    console.log('gioHang: ', gioHang)
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
                                <img src={item.image} alt="..." width={50}/>
                            </td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-primary mx-2' onClick={() => { }}>-</button>
                                {item.quantity}
                                <button className='btn btn-primary mx-2' onClick={() => { }}>+</button>
                            </td>
                            <td>{item.quantity * item.price}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={() => { }}>
                                    <i className='fa fa-close'></i>
                                </button>
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Cart