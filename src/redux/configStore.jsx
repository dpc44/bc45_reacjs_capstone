import {configureStore} from '@reduxjs/toolkit';
import ProductListReducer from './reducers/ProductListReducer';
import UserReducer from './reducers/UserReducer';



// import { createStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer : {
        ProductListReducer : ProductListReducer,
        UserReducer:UserReducer
    }
})