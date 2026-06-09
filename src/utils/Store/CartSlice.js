import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addCart:(state,action)=>{
            state.item.push(action.payload)
        },
        removeCart:(state,action)=>{
            state.item = state.item.filter((data)=>data?.id !== action?.payload?.id)
        },
        clearCart:(state)=>{
            state.item=0
        }
    }
})

export default CartSlice.reducer;
export const {addCart,removeCart,clearCart} = CartSlice.actions
