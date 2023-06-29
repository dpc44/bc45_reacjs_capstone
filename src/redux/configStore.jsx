import {configureStore} from '@reduxjs/toolkit';
import ProductListReducer from './reducers/ProductListReducer';
import UserReducer from './reducers/UserReducer';
import searchStringReducer from './reducers/searchStringReducer';
import profileReducer from './profileReducer';



export const store = configureStore({
    reducer: {     
       ProductListReducer : ProductListReducer,
       UserReducer:UserReducer,
       searchStringReducer:searchStringReducer,
       profileReducer:profileReducer,
}   
})  