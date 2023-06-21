import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { USER_SHOE } from '../util/config'
import { loginAction } from '../redux/reducers/UserReducer'

const Header = () => {
    const { userLogin } = useSelector(state => state.UserReducer)
    // console.log("userLogin", userLogin);
    const renderLogin = () => {
        if (userLogin.accessToken) {
            return <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profiles">
                        hello {userLogin.email}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <span style={{ cursor: 'pointer' }} className="nav-link" onClick={() => {
                        //clear localstore,cookie => dispatch userLogin = {}
                        localStorage.removeItem(USER_SHOE);
                    }}>Logout</span>
                </li>
            </>
        }
        return <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Cybersoft Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    {renderLogin()}

                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )

}
export default Header