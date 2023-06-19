import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/reducers/UserReducer';

const Login = () => {

  const userLoginRef = useRef({
    username: '',
    password: ''
  });

  const {userLogin} = useSelector(state => state.UserReducer)
  const dispatch = useDispatch();




  const handleChange = (e) => {
    const { id, value } = e.target;
    userLoginRef.current[id] = value;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = loginAction( userLoginRef.current);
    dispatch(action);
    // console.log('userLoginRef', userLoginRef.current);
  }





  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='form-group'>
        <p>Username</p>
        <input className='form-control' id="username" onChange={handleChange} />
      </div>
      <div className='form-group'>
        <p>Password</p>
        <input className='form-control' id="password" type="password" onChange={handleChange} />
      </div>
      <div className='form-group text-center'>
        <button className='btn btn-dark my-2'>Login</button>
      </div>
    </form>
  )
}

export default Login