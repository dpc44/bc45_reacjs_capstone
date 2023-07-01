import axios from 'axios';
import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { loginAction, requestLoginFacebookAPI } from '../../redux/reducers/UserReducer';
import { USER_SHOE, setStore, setStoreJson } from '../../util/config';
import { useDispatch } from 'react-redux';
import { customNavigate } from '../..';




const LoginFacebook = () => {
    const dispatch = useDispatch();

    const responseFacebook = async (response) => {
        // let res = await axios({
        //     url: `https://shop.cyberlearn.vn/api/Users/facebooklogin`,
        //     method: 'POST',
        //     data: {
        //         facebookToken: response.accessToken
        //     }
        // })
        // if (res) {
        //     setStoreJson(USER_SHOE, res.data.content);
        //     const action = loginAction(res.data.content);
        //     dispatch(action);
        //     customNavigate.push('/');
        // }

        const actionAsync = requestLoginFacebookAPI(response.accessToken);
        dispatch(actionAsync);


    }
    return (
        <div className='my-2 text-center'>
            <FacebookLogin
                appId="574182234787237"
                autoLoad={false}
                fields="name,email,picture"

                callback={responseFacebook} />
        </div>
    )
}

export default LoginFacebook