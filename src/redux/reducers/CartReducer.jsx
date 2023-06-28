import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: []
}

const CartReducer = createSlice({
    name: 'CartReducer',
    initialState,
    reducers: {
        addItemAction: (state, action)=> {
            // console.log();

            let item = { ...action.payload.detailProduct, quantity : action.payload.quantityProduct };

            let index = state.gioHang.findIndex(sp => sp.id === item.id);

            if(index !== -1){
                // nếu có trong gioHang :
                let newItem = { ...state.gioHang[index] };
                newItem.quantity += action.payload.quantityProduct;
                state.gioHang[index] = newItem
            }else{
                console.log('here?')
                state.gioHang.push(item);
                
            }

            
            
        }
    }
});

export const { addItemAction } = CartReducer.actions

export default CartReducer.reducer