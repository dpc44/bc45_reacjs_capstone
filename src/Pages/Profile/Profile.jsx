import React, { useEffect } from 'react'
import TableItem from './TableItem';
import { useDispatch,useSelector } from 'react-redux'; 
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios, { Axios } from 'axios'
import { setProfileAction } from '../../redux/profileReducer';
import { getProfileApi } from '../../redux/profileReducer';
import { USER_SHOE, getStoreJson } from '../../util/config';
const Profile = () => {
    const randomNumber = Math.floor(Math.random() * 5000);
    const dispatch = useDispatch();
    const {userProfile} = useSelector(state=>state.profileReducer);
    useEffect(()=>{
        if (userProfile) {
            document.getElementById('name').value = userProfile.name;
            document.getElementById('password').value = userProfile.password;
            document.getElementById('phone').value = userProfile.phone;
            document.getElementById('email').value = userProfile.email;
        }
    },[userProfile]);
    useEffect(()=>{
        getProfileApiFunction()
    },[])


    const getProfileApiFunction= async ()=>{
        const actionAsyns = getProfileApi();
        dispatch(actionAsyns)
    }
    // const imagePath = `http://i.pravatar.cc/200?u=${randomNumber}`;

    const postUpdateProfileApi =  async(value) => {
        try {
            const res = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/updateProfile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getStoreJson(USER_SHOE).accessToken}`
                },
                data:value
            })
            console.log("Phản hồi từ server:",res.data);
            window.alert('Thay đổi tài khoản thành công!');
        }
        catch(err){
            console.error("Lỗi:", err);
            window.alert('Thay đổi tài khoản thất bại!');
        }
      }
    const frmUpdate = useFormik({
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
          postUpdateProfileApi(value);
          document.getElementById('frmUpdate').reset();
        },
      })
    return (
        <div className='container'>
            <h3 className='my-4 bg-primary text-white w-50 text-center mx-auto'>Profile</h3>
            <div className='row'>
                <div className='col-4 text-center '>
                    <img src={userProfile.avatar} alt="..." className='w-50 rounded' />
                </div>
                <form className='col-8' onSubmit={frmUpdate.handleSubmit}  id='frmUpdate'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Name</p>
                                <input className='form-control' id='name' onChange={frmUpdate.handleChange}/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Password</p>
                                <input className='form-control' id='password' onChange={frmUpdate.handleChange}  />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Phone</p>
                                <input className='form-control' id='phone' onChange={frmUpdate.handleChange} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Email</p>
                                <input className='form-control' id='email' onChange={frmUpdate.handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <h6>Gender</h6>
                        <div className='col-6'>
                            <div className='form-group'>
                                <label htmlFor="men" className='mx-2'>Men</label>
                                <input type='radio' id='men' value='true' name='gender' onChange={frmUpdate.handleChange} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <label htmlFor="women" className='mx-4'>Women</label>
                            <input type='radio' id='women' value='false' name='gender' onChange={frmUpdate.handleChange}/>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-primary my-3' onClick={()=>{
                        }}>Update</button>
                    </div>
                </form>
            </div>
            <TableItem/>
        </div>
    )
}

export default Profile