import {configureStore} from '@reduxjs/toolkit';
import ProductListReducer from './reducers/ProductListReducer';
import UserReducer from './reducers/UserReducer';



// import { createStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        userRegisterReducer: (state ={
            name:'',
            phone:'',
            password:'',
            email:''
        }, action) => {
            if (action.type === 'USER_REGISTER') {
                const value = action.payload
                
                state = value;

            }
            return state
        },
        searchStringReducer:(state=1,action)=>{
            if (action.type === 'SEARCH_VALUE'){
                state=action.keyword
                console.log(action)
            }
            
            return state
       },
       ProductListReducer : ProductListReducer,
       UserReducer:UserReducer

}
})  