import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    kword:'',
}

const searchStringReducer = createSlice({
  name: 'searchStringReducer',
  initialState,
  reducers:{
    searchAction:(state,action)=>{
        state.kword=action.payload
        console.log('abcccc',action)
        console.log('123',state.kword)
    }
  }
});

export const {searchAction} = searchStringReducer.actions

export default searchStringReducer.reducer

console.log('abc',initialState)