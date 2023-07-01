import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { USER_SHOE, getStoreJson } from '../../util/config';
import { customNavigate } from '../..';

const initialState = {
    userProfile: {

    },
}

const profileReducer = createSlice({
    name: 'profileReducer',
    initialState,
    reducers: {
        setProfileAction: (state, action) => {
            state.userProfile= action.payload
        },    
    }
});

export const { setProfileAction} = profileReducer.actions

export default profileReducer.reducer

export const getProfileApi = () => {

    return async dispatch => {
        try {
            const res = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/getProfile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getStoreJson(USER_SHOE).accessToken}`
                }
            })
            const action = setProfileAction(res.data.content);
            dispatch(action)
        }
        catch(err){
            if(err.response?.status === 401){
                customNavigate.push('/login')
            }
        }
        
    }
}