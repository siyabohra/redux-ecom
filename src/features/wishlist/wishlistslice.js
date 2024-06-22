import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Your wishlist items
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
      addToWishlist: (state, action) => {
          state.items.push(action.payload);
      },
      removeFromWishlist: (state, action) => {
          state.items = state.items.filter(item => item.id !== action.payload.id);
      },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

