import {configureStore} from '@reduxjs/toolkit';
import ProductListReducer from './reducers/ProductListReducer';
import UserReducer from './reducers/UserReducer';
import CartReducer from './reducers/CartReducer';
import searchStringReducer from './reducers/searchStringReducer';
import profileReducer from './reducers/profileReducer';



export const store = configureStore({
    reducer: {     
       ProductListReducer : ProductListReducer,
       UserReducer:UserReducer,
       CartReducer:CartReducer,
       searchStringReducer:searchStringReducer,
       profileReducer:profileReducer,
}  
}   
)  