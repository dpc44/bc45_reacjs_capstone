import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProfileAction } from '../../redux/profileReducer';
const TableItem = () => {
    let { userProfile } = useSelector(state => state.profileReducer);
    console.log('1112555sdsdsa552', userProfile);
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <h3 className='text-center bg-primary w-50 m-auto text-white my-3'>Order history</h3>
            {userProfile.ordersHistory?.map((item) => {
                return <tr key={item.id} className='d-block'>
                    <div className='text-danger '>
                    <th className=' border-end border-dark'>ID:{item.id}</th>
                    <th className='border-end border-dark'>Date:{item.date}</th>
                    <th className='border-end border-dark'>Email:{item.email}</th>
                    </div>
                    <table className='table'>
                        <thead className='text-center '>
                            <tr>
                                <th>NAME</th>
                                <th>IMAGE</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>

                            {item.orderDetail.map((item) => {
                                return <tr>
                                    <th>{item.name}</th>
                                    <th>
                                        <img src={item.image} alt="..." style={{width:50}} />
                                    </th>
                                    <th>{item.price}</th>
                                    <th>{item.quantity}</th>

                                </tr>
                            })}

                        </tbody>
                    </table>
                </tr>
            })}
        </div>
    )
}

export default TableItem


