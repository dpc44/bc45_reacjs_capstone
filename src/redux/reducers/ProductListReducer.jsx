import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';
const initialState = {
    arrProduct: []
}

const ProductListReducer = createSlice({
    name: 'ProductListReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload;
        }
    }
});

export const { getAllProductAction } = ProductListReducer.actions

export default ProductListReducer.reducer


// async action

export const getProductListAPI = () => {
    return async dispatch => {
        let res = await http.get('/api/Product');
        
        const actionProduct = getAllProductAction(res.data.content);
        dispatch(actionProduct);
    }


}