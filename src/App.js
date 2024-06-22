import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Footer from './common/Footer';
import ProductDetail from './components/ProductDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/products/productActions';


function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className='container-fluid'>

        <Router>
          <Header setSearchQuery={setSearchQuery} setSelectedCategory={setSelectedCategory} />
          <Routes>
            <Route path="/" element={<Products selectedCategory={selectedCategory} searchQuery={searchQuery} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path='/product/:productId' element = {<ProductDetail/>}/>
          </Routes>
        </Router>
      </div>
      


    </>
  );
}

export default App;
