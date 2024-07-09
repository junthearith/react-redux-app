import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    quantity: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // check if product exist
            const existingProduct = state.cartItems.some((item) => item.id === action.payload.id);
            // console.log("existingPro: ", existingProduct);
            // if product existing increase qty
            if (existingProduct) {
                state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        item.qty += 1;
                        state.totalItems += 1;
                    }
                })
            } else {
                state.totalItems += 1;
                state.cartItems.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            // if product exist
            state.cartItems.map((item) => {
                if (item.id === action.payload.id) {
                    item.qty += 1;
                    state.totalItems += 1;
                }
            });
        },
        decreaseQuantity: (state, action) => {
            // if product exist
            state.cartItems.map((item) => {
                if (item.id === action.payload.id && item.qty === 1) {
                    state.cartItems = state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    );
                    state.totalItems -= 1;
                } else if(item.id === action.payload.id && item.qty > 1) {
                    item.qty -= 1;
                    state.totalItems -= 1;
                }
            });
        }
    }
});

// export action
export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// export selector
export const selectTotalItems = ((state) => state?.cart?.totalItems);

export const selectCartItems = (state) => state?.cart?.cartItems;

// export  reducer
export default cartSlice.reducer;