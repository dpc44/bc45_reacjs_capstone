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
    }
  }
});

export const {searchAction} = searchStringReducer.actions

export default searchStringReducer.reducer
