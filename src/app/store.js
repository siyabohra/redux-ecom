// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartslice';
import wishlistReducer from '../features/wishlist/wishlistslice';
import productReducer from '../features/products/productSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        product: productReducer
    },
});

export default store;
