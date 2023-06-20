import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction, requestLoginAPI } from '../../redux/reducers/UserReducer';
const Login = () => {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues:{
      email : '',
      password: ''
    },
    onSubmit: (values) =>{
      console.log('values : ', values)

      // dispatch

      const actionAsync = requestLoginAPI(values);
      dispatch(actionAsync);
    },
    validationSchema: yup.object().shape({
      email:yup.string().required('Email cannot be blank !').email('Email is not valid!'), 
      password:yup.string().required('Password cannot be blank!')
    })
  })



  return (
    <form onSubmit={frm.handleSubmit} className='container'>
      <div className='form-group'>
        <p>Email</p>
        <input className='form-control' name='email' id="email" onChange={frm.handleChange} onBlur={frm.handleBlur} />
        {frm.errors.email && <p className='text-danger'>{frm.errors.email}</p> }
        
      </div>
      <div className='form-group'>
        <p>Password</p>
        <input className='form-control' type='password' name='password' id="password" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
        {frm.errors.password && <p className='text-danger'>{frm.errors.password}</p> }
      </div>
      <div className='form-group'>
        <button type='submit' className='btn btn-success mt-2'>Login</button>
      </div>
    </form>

  )
}

export default Login