import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    userName: null,
    email: null,
    
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});

export const {} = authSlice.actions

export default authSlice.reducer