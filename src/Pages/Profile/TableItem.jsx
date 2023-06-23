import React from 'react'

function TableItem() {
  return (
    <div className='container'>
        <h3>Order history</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>IMG</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <img src="http://i.pravatar.cc/200?u=800" alt="..."  width={40}/>
                    </td>
                    <td>Adidas</td>
                    <td>500$</td>
                    <td>4</td>
                    <td>5000$</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableItem