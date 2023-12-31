import React, { Component, useRef, useState, useEffect } from 'react'
import { connect, useDispatch, useSelector, } from 'react-redux'
import { NavLink, useSearchParams, } from 'react-router-dom'
import { USER_SHOE } from '../util/config'
import { loginAction } from '../redux/reducers/UserReducer'
import { customNavigate } from '..'
import { searchAction } from '../redux/reducers/searchStringReducer'
const Header = (props) => {
    const { userLogin } = useSelector(state => state.UserReducer);
    const { gioHang } = useSelector(state => state.CartReducer);
    const { kwork } = useSelector(state => state.searchStringReducer);
    const [searchParams, setSearchParams] = useSearchParams();
    const keywordRef = useRef()
    const key = searchParams.get('keyword');
    const dispatch = useDispatch();
    const renderLogin = () => {
        if (userLogin.accessToken) {
            return <>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">{gioHang.length === 0 ? <i class="fa fa-shopping-cart" aria-hidden="true"></i> : <div><span>({gioHang.length})</span><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <span style={{ cursor: 'pointer' }} className="nav-link" onClick={() => {
                        //clear localstore,cookie => dispatch userLogin = {}
                        localStorage.removeItem(USER_SHOE);
                        //dispatch
                        const action = loginAction({});
                        dispatch(action);
                        customNavigate.push('/');
                    }}>Logout</span>
                </li>
            </>
        }
        return <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
        </>
    }
    const handleChange = (e) => {
        const { value } = e.target;
        keywordRef.current = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({
            keyword: keywordRef.current
        })
        let action = searchAction(
            keywordRef.current
        );
        dispatch(action)
        document.getElementById('frm').reset();

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <NavLink className="navbar-brand" to="/">Cybersoft Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search</NavLink>
                    </li>
                    <form className="d-flex my-2 my-lg-0 navbar-form navbar-left" id='frm'>
                        <input className="form-control me-sm-2" type="text" placeholder="Search" id='keyword' onChange={handleChange} />
                        <button className="btn btn-outline-warning my-2 my-sm-0 text-white" type="submit" onClick={handleSubmit}>Search</button>
                    </form>
                </ul>

                <ul className="navbar-nav mt-2 mt-lg-0">
                    {renderLogin()}
                </ul>
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Header)

