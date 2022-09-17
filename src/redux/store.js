/* eslint-disable */
import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice.js';
import cart from './cartSlice.js';

export let { changName, increase } = user.actions;
export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
   }
}) 