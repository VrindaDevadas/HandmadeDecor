// src/components/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, onUpdateQuantity }) => {

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page-container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is empty!</p>
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="cart-items-list">
                        {cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-price-single">₹{item.newPrice}</p>

                                    <div className="cart-quantity-controls">
                                        <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <p className="cart-item-price-total">₹{(item.newPrice * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>₹{calculateTotal()}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>₹{calculateTotal()}</span>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;