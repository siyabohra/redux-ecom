import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartslice';
import { addToWishlist } from '../features/wishlist/wishlistslice';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Products({ selectedCategory, searchQuery }) {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchAllProducts = () => {
        const apiurl = 'https://fakestoreapi.com/products';
        axios.get(apiurl)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const handleProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearchQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
    });

    return (
        <>
            <div className='container-fluid py-5'>
                <div className='row row-cols-3 m-auto'>
                    {filteredProducts.map((product, index) => (
                        <div className='my-3 text-center' key={index}>
                            <Card className='product-cart' onClick={() => handleProductDetail(product.id)}>
                                <img src={product.image} className='product-img' alt={product.title} />
                                <Card.Body>
                                    <div className='cart-title my-2'>
                                        <p className='category'>Category: {product.category}</p>
                                        <p className='price'>Price: {product.price}</p>
                                    </div>
                                    <div>
                                        <Button 
                                            className='add-to-cart' 
                                            onClick={(e) => { e.stopPropagation(); dispatch(addToCart(product)); }}>
                                            Add to Cart
                                        </Button>
                                        <Button 
                                            className='fav' 
                                            onClick={(e) => { e.stopPropagation(); dispatch(addToWishlist(product)); }}>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;
