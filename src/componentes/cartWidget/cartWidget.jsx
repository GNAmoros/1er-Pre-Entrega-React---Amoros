import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cartWidget.css';

export default function CartWidget() {
    return (
        <div className="cart-widget">
            <FaShoppingCart style={{ fontSize: '1.5rem' }} />
            <span className="cart-item-count">0</span>
        </div>
    );
}