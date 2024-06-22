import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Button, Card } from 'react-bootstrap';

function Cart() {
    const cart = useSelector((state) => state.cart.items); 
    return (
        <div>
            <h2 className='my-cart'> My Cart</h2>
            <div className='row row-cols-3 m-auto'>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index}>
                            <Card className='product-cart'>
                                <img src={item.image} className='product-img' />
                                <Card.Body>
                                    <div className='cart-title my-2'>
                                        <p className='category text-center'>Category: {item.category}</p>
                                        <p className='price text-center'>Price: {`₹ ${item.price}`}</p>
                                    </div>
                                    <Button className='buy-now'>
                                           Buy Now
                                        </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </div>
    );
}

export default Cart;
