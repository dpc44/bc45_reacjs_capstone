import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        values:{
            name: '',
            phone: '',
            password: '',
            email: '',
        }
}

const registerReducer = createSlice({
  name: registerReducer,
  initialState,
  reducers: {}
});

export const {} = registerReducer.actions

export default registerReducer.reducer