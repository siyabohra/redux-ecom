import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist.items); 
    console.log(wishlist)
    return (
        <div>
            <h2 className='my-cart'>Wishlist</h2>
            <div className='row row-cols-3 m-auto'>
                {wishlist.length > 0 ? (
                    wishlist.map((items, index) => (
                        <div key={index}>
                            <Card className='product-cart'>
                                <img src={items.image} className='product-img' />
                                <Card.Body>
                                    <div className='cart-title my-2'>
                                        <p className='category text-center'>Category: {items.category}</p>
                                        <p className='price text-center'>Price :{ `₹ ${items.price}`}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>Your wishlist is empty</p>
                )}
            </div>
        </div>
    );
}

export default Wishlist;
