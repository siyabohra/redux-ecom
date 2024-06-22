// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Ensure this matches the state structure
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
