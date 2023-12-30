import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: {}
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setProductDetails: (state, actions) => {
      state.productDetails = actions.payload
      }
    }});

    export const{setProductDetails}= productSlice.actions;
    export default productSlice.reducer;