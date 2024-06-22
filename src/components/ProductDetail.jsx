import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../features/products/productActions';

function ProductDetail() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const products = useSelector((state) => state.products.items);
    const product = products.find((p) => p.id === parseInt(productId));

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    if (products.length === 0) {
        return <p>Loading products...</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <>
            <div className="product-detail">
                <Card className='product-card'>
                    <img src={product.image} className='product-img' alt={product.title} />
                    <Card.Body>
                        <h2>{product.title}</h2>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        <p>{product.description}</p>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ProductDetail;
