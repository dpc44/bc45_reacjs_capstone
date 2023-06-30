import { createSlice } from '@reduxjs/toolkit'
import { store } from '../configStore';
import { http } from '../../util/config';
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
                // console.log('here?')
                state.gioHang.push(item);
                
            }

            
            
        },
        changeQuantity :(state,action) =>{
            // console.log('action payload : ', action.payload);
            const itemQuantity = action.payload;
            let item = state.gioHang.find(sp => sp.id== itemQuantity.idProduct)
            if(item){
                item.quantity += itemQuantity.quantityNumber;
                // console.log('item.quantity: ', item.quantity)
                if (item.quantity < 1) {
                    if (window.confirm('bạn có muốn xoá sản phẩm này không ?')) {
                      state.gioHang = state.gioHang.filter(sp => sp.id !== itemQuantity.idProduct);
                    } else {
                      item.quantity -= itemQuantity.quantityNumber;
                    }
                  } 
            }
        },
        delItemAction: (state, action) => {
            // console.log(action);
            // let indexDel = state.gioHang.findIndex(item => item.id == action.payload);
            // if (indexDel !== -1) {
            //   state.gioHang.splice(indexDel, 1);
            // }
            state.gioHang = state.gioHang.filter(sp => sp.id !== action.payload);

          },
        clearGioHang:(state,action) =>{
            state.gioHang = [];
        }
    }
});

export const { addItemAction, changeQuantity,delItemAction,clearGioHang } = CartReducer.actions

export default CartReducer.reducer


export const postOrderApi = (OrderList) => {
    const emailUser = store.getState().UserReducer.userLogin.email;
    // console.log(OrderList)
    
    return async dispatch => {
      const res = await http.post('/api/Users/order', {OrderList, emailUser})
    //   console.log(res)
        
      if(res){
        alert('Mua Hàng thành Công');
        const action = clearGioHang();
        dispatch(action);
      }else{
        alert('Mua Hàng thất bại');
      }
    
    }
  
  
  }