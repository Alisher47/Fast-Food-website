import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [], // To store the product details
  cartItemCount: 0, // To store the number of items in the cart
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: nanoid(), // Unique id for the product
        ...action.payload,
      };
      state.products.push(product); // Add product to the cart
      state.cartItemCount += 1; // Increment the cart count
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.cartItemCount -= 1; // Decrement the cart count
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
