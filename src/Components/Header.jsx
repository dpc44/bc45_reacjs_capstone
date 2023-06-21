import React, { Component, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
 const Header =(props)=> {
    const [searchParams,setSearchParams] = useSearchParams();
    const keywordRef =useRef()
    const key = searchParams.get('keyword');
    // const searchString= useRef();
    const dispatch = useDispatch();
   const handleChange=(e)=>{
        const { value } = e.target;
        keywordRef.current =value;
    
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParams({
            keyword:keywordRef.current
        })

        let action = {
            type:'SEARCH_VALUE',          
            keyword:keywordRef.current
        }
        dispatch(action)
      
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
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search</NavLink>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search"  id='keyword' onChange={handleChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSubmit}>Search</button>
                </form>
            </div>
        </nav>
    )
  }

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Header)


