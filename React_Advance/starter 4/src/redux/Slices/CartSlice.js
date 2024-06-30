import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            // jo bhi action parameter me send kiya hota hai, wo action.payload se dikhaya jata hai
           state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;