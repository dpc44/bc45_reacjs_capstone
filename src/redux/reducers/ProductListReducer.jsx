import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';
const initialState = {
    arrProduct: [],
    detailProduct: []
}

const ProductListReducer = createSlice({
    name: 'ProductListReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
        getDetailProductAction:(state, action) =>{
            state.detailProduct = action.payload;
        }
    }
});

export const { getAllProductAction, getDetailProductAction } = ProductListReducer.actions

export default ProductListReducer.reducer


// async action

export const getProductListAPI = (idProduct = '') => {

    return async dispatch => {
        if (idProduct === '') {
            let res = await http.get('/api/Product');

            const actionProduct = getAllProductAction(res.data.content);
            dispatch(actionProduct);
        } else {
            
            let res = await http.get(`/api/Product/getbyid?id=${idProduct}`);

            const actionProduct = getDetailProductAction(res.data.content);
            dispatch(actionProduct);
        }

    }


}