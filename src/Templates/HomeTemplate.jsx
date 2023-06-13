import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const HomeTemplate = () => {
  return (
    <div>
        <Header/>

        <div className='content' style={{minHeight:650}}>
            <Outlet/>
        </div>

        <footer className='fs-3 text-center text-white p-3 bg-dark'>
            Footer
        </footer>
    </div>
  )
}

export default HomeTemplate