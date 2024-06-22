// src/features/products/productActions.js
import axios from 'axios';
import { setProducts } from './productSlice';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
