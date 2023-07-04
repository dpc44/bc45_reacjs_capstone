import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const HomeTemplate = () => {

  return (


    <div>
      <Header/>
      <p style={{height:'1px'}}></p>
      <div className='content' style={{ minHeight: 650 }}>
        <Outlet />
      </div>

      <footer className='fs-3 text-center text-white p-3 bg-success'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <div className='col-4 fs-5'>
                  <p className='fs-2'>SHOP</p>
                  <p>Gift Cards</p>
                  <p>Store Locator</p>
                  <p>Refer a Friend</p>
                </div>
                <div className='col-4 fs-5'>
                  <p className='fs-2'>HELP</p>
                  <p>Contact Us</p>
                  <p>Accessibility</p>
                </div>
                <div className='col-4 fs-5'>
                  <p className='fs-2'>ABOUT</p>
                  <p>Our story</p>
                  <p>Careers</p>
                  <p>Support</p>
                  <p>Status page</p>
                  <p>Blog</p>
                  <p>Legal templates</p>
                </div>
              </div>
            </div>
            <div className='col-6 my-5'>
              <p className='fs-5 text-end'>sign up to get 10% off your first order</p>
              <div className='row text-end'>
                <div className='col-6'>
                  <input type="text" className=' rounded-pill px-4' placeholder='Your Email Address' />
                </div>
                <div className='col-6'>
                  <button className=' rounded-pill px-5 bg-warning'>Subscrible</button>
                </div>
              </div>
              <div className='my-2 text-end'>
              <i class="fab fa-facebook mx-3"></i>
                <i class="fab fa-instagram mx-3"></i>
                <i class="fab fa-twitter mx-3"></i>
                <i class="fab fa-linkedin-in mx-3"></i>
              </div>
            </div>
          </div>
          <div className='row mt-5 mb-2 text-start'>
        <div className='col-6'>
          <p className='fs-5'><i class="fa fa-copyright"></i> 2023 CyberShoes,Inc.All Rights Reserved</p>
        </div>
        <div className='col-6 fs-5 text-end'>
            <span className='mx-3'>Term of Service</span>
            <span className='mx-3'>Privacy Pilicy</span>
            <span>Do Not Sell My Information</span>
        </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeTemplate


