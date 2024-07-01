import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/baseUrl";

const initialState = {
    products: [],
    // idle -> |pending|fulfill|rejected|
    status: "idle",
    error: null
}

// fetch data from store api
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch(`${BASE_URL}products`);
    const data = await response.json();
    console.log("data: ", data.results);
    return data.results;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success",
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed",
            state.error = action.error.message;
        })
    }
});

// export reducer
export default productSlice.reducer;
export const selectAllProducts = ((state) => state.product.products);