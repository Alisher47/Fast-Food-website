import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    id: nanoid(),
    quantity: 0
}

export const cartSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
           const add = {
            id: nanoid(),
            quantity: action.payload
           }
           state.products.push(add)
        },
        removeProduct: (state, action) => {
          state.products = state.products.filter((product) => product.id !== action.payload)
        },
    }
})

export const {addProduct, removeProduct} = cartSlice.actions

export default cartSlice.reducer