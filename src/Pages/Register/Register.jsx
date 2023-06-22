import React, { useState} from 'react'
import { connect } from 'react-redux'
import {useFormik} from 'formik'
import * as yup from 'yup'
export const Register = (props) => {
   const { userRegister,errorRegister } =props;
    const { name, phone, password, email } = userRegister;

  const frm = useFormik({
    initialValues:{
      name:'',
      phone:'',
      password:'',
      email:''
    },
    onSubmit:(value)=>{
        const action = {
          type:'USER_REGISTER',
          payload:value
        }
      props.dispatch(action)
    },
    validationSchema:yup.object().shape({
      email:yup.string().required('Email can not be blank!').email('email is not valid!'),
      name:yup.string().required('Name can not be blank!').matches(/^[A-Za-z]+$/,'Name is only letters!!'),
      phone:yup.string().required('Phone can not be blank!').matches(/^[0-9]*$/,'phone is only number!'),
      password:yup.string().required('password can not be blank!'),
    })
  })
  

   
  return (
    <div className='container mt-5'>
        <form className='card w-50 m-auto' onSubmit={frm.handleSubmit} >
          <div className='card-header bg-primary text-white text-center fs-2'>
            Sign Up
          </div>
          <div className='card-body fs-5'>
            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <p>Name</p>
                  <input type="text" className='form-control' id='name' onChange={frm.handleChange} onBlur={frm.handleBlur} />
                  {frm.errors.name && <p className='text text-danger'>{frm.errors.name}</p>}
                </div>
              </div>
              <div className='col-6'>
                <p>Phone</p>
                <input type="text" className='form-control' id='phone' onChange={frm.handleChange} onBlur={frm.handleBlur} />
                {frm.errors.phone && <p className='text text-danger'>{frm.errors.phone}</p>}
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <p>Passwork</p>
                  <input type="password" className='form-control' id='password' onChange={frm.handleChange} onBlur={frm.handleBlur} />
                  {frm.errors.password && <p className='text text-danger'>{frm.errors.password}</p>}
                </div>
              </div>
              <div className='col-6'>
                <p>Email</p>
                <input type="text" className='form-control' id='email' onChange={frm.handleChange} onBlur={frm.handleBlur} />
                {frm.errors.email && <p className='text text-danger'>{frm.errors.email}</p>}
              </div>
            </div>
            <div>
          
              <div className='mt-4' style={{ fontSize: 12, color: '#777' }}>
                People who use our service may have uploaded your contact information to us. <a href="/">Learn more.</a>
              </div>
              <div style={{ fontSize: 12, color: '#777' }} className='mt-2'>
                By clicking Sign Up, you agree to our <a href="/">Terms</a>, <a href="/">Privacy Policy</a> and  <a href="/">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
              </div>
              <div className='text-center'>
                <button className='btn my-3 px-5 text-white' style={{ background: '#00a400' }}>Sign Up</button>
              </div>
            </div>
          </div>

        </form>
      </div>
  )
}

const mapStateToProps = (state) => ({
  userRegister: state.userRegisterReducer,
  errorRegister:state.errorRegisterReducer,
})



export default connect(mapStateToProps)(Register)



