import { createSlice } from '@reduxjs/toolkit'
import { customNavigate } from '../..';
import { USER_SHOE, getStoreJson, http, setStoreJson } from '../../util/config';
const initialState = {
  userLogin: getStoreJson(USER_SHOE)
}

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
      // customNavigate.push('/');
      console.log("loginAction: ", state.userLogin)
    }
  }
});

export const { loginAction } = UserReducer.actions

export default UserReducer.reducer

//email: khaibc43@gmail.com - password: 123
export const requestLoginAPI = (userInfo) => {
  console.log('userInfo', userInfo)
  return async dispatch => {
    const res = await http.post('/api/Users/signin', userInfo)
    if(res){
      setStoreJson(USER_SHOE, res.data.content);
      const action = loginAction(res.data.content);
      dispatch(action);

      customNavigate.push('/');
    }
      
    




  }


}