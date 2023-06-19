import { createSlice } from '@reduxjs/toolkit'
import { customNavigate } from '../..';
const initialState = {
    userLogin :{username:'', password:''}
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    loginAction:(state,action) =>{
        state.userLogin = action.payload;
        customNavigate.push('/');
    }
  }
});

export const {loginAction} = UserReducer.actions

export default UserReducer.reducer