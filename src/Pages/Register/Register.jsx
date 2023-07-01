import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios, { Axios } from 'axios'
export const Register = (props) => {
  const { userRegister, errorRegister } = props;
  const dispatch = useDispatch();
  const postSignUpApi = (apiUrl,postData) => {
    axios.post(apiUrl, postData)
      .then((response) => {
        // Xử lý phản hồi từ server
        console.log("Phản hồi từ server:", response.data);
        window.alert('Đăng ký tài khoản thành công!');
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Lỗi:", error);
        window.alert('Đăng ký tài khoản thất bại!');
      });
  }
  const frm = useFormik({
    initialValues: {
      name: '',
      phone: '',
      password: '',
      email: '',
      gender: ''
    },
    onSubmit: (value) => {
      const checkbox = document.getElementById('men');
      const isChecked = checkbox.checked;
      value.gender = isChecked;
      postSignUpApi('https://shop.cyberlearn.vn/api/Users/signup',value)
      document.getElementById('frmRegister').reset();
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email can not be blank!').email('email is not valid!'),
      name: yup.string().required('Name can not be blank!').matches(/^[A-Za-z]+$/, 'Name is only letters!!'),
      phone: yup.string().required('Phone can not be blank!').matches(/^[0-9]*$/, 'phone is only number!'),
      password: yup.string().required('password can not be blank!'),
      gender:yup.string().required('gender can not be blank!')
    })
  })



  return (
    <div className='container mt-5'>
      <form className='card w-50 m-auto' onSubmit={frm.handleSubmit}  id='frmRegister'>
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
          <div className='row'>
            <p>Gender</p>
            {frm.errors.gender && <p className='text text-danger'>{frm.errors.gender}</p>}
            <div className='col-6'>
              <div className='form-group'>
                <label htmlFor="men" className='mx-2'>Men</label>
                <input type='radio' id='men' value='true' name='gender' onChange={frm.handleChange} />
              </div>
            </div>
            <div className='col-6'>
              <label htmlFor="women" className='mx-2'>Women</label>
              <input type='radio' id='women' value='false' name='gender' onChange={frm.handleChange} />
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
  errorRegister: state.errorRegisterReducer,
})



export default connect(mapStateToProps)(Register)



