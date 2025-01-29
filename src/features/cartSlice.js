import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
  cartItemCount: 0, 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: nanoid(), 
        ...action.payload,
      };
      state.products.push(product); 
      state.cartItemCount += 1; 
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.cartItemCount -= 1; 
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
