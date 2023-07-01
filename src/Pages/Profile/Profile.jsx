import React, { useEffect } from 'react'
import TableItem from './TableItem';
import { useDispatch,useSelector } from 'react-redux'; 
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios, { Axios } from 'axios'
import { setProfileAction } from '../../redux/reducers/profileReducer';
import { getProfileApi } from '../../redux/reducers/profileReducer';
import { USER_SHOE, getStoreJson } from '../../util/config';
const Profile = () => {
    const randomNumber = Math.floor(Math.random() * 5000);
    const dispatch = useDispatch();
    const {userProfile} = useSelector(state=>state.profileReducer);
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
          value.gender = isChecked
          postUpdateProfileApi(value);
          document.getElementById('frmUpdate').reset();
        },
         validationSchema: yup.object().shape({
            email: yup.string().required('Email can not changed!').email('email is not valid!'),
            name: yup.string().required('Name can not be blank!').matches(/^[A-Za-z]+$/, 'Name is only letters!!'),
            phone: yup.string().required('Phone can not be blank!').matches(/^[0-9]*$/, 'phone is only number!'),
            password: yup.string().required('password can not be blank!'),
            gender:yup.string().required('gender can not be blank!')
          })
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
                                {frmUpdate .errors.name && <p className='text text-danger'>{frmUpdate .errors.name}</p>}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Password</p>
                                <input className='form-control' id='password' type='password' onChange={frmUpdate.handleChange}  />
                                {frmUpdate.errors.password && <p className='text text-danger'>{frmUpdate.errors.password}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Phone</p>
                                <input className='form-control' id='phone' onChange={frmUpdate.handleChange} />
                                {frmUpdate.errors.phone && <p className='text text-danger'>{frmUpdate.errors.phone}</p>}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Email</p>
                                <input className='form-control' id='email' onChange={frmUpdate.handleChange}/>
                                {frmUpdate.errors.email && <p className='text text-danger'>{frmUpdate.errors.email}</p>}
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