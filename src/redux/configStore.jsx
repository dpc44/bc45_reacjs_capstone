import {configureStore} from '@reduxjs/toolkit';



// import { createStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer : {
        test: (state =1) =>state
    }
})