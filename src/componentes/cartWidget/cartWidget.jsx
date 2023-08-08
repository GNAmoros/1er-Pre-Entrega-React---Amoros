import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cartWidget.css';

export default function CartWidget() {
    const [cartItems, setCartItems] = useState([]); 

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (item) => {
        const updatedCart = cartItems.filter(cartItem => cartItem !== item);
        setCartItems(updatedCart);
    };

    return (
        <div className="cart-widget">
            <FaShoppingCart style={{ fontSize: '1.5rem' }} />
            <span className="cart-item-count">{cartItems.length}</span>
            {}
        </div>
    );
}