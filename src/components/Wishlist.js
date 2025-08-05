
import React from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';


const HeartIcon = ({ isWishlisted }) => (
    <svg
        width="24" height="24" viewBox="0 0 24 24"
        fill={isWishlisted ? '#d9534f' : 'none'}
        stroke={isWishlisted ? '#d9534f' : 'currentColor'}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const Wishlist = ({ wishlistItems, onToggleWishlist }) => {
    return (
        <div className="wishlist-page-container">
            <h1>My Wishlist</h1>
            {wishlistItems.length === 0 ? (
                <div className="wishlist-empty">
                    <p>Your wishlist is currently empty.</p>
                    <Link to="/" className="shop-now-link">Continue Shopping</Link>
                </div>
            ) : (
                <div className="wishlist-grid">
                    {wishlistItems.map((product) => (
                        <div className="wishlist-item-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="wishlist-item-details">
                                <h3>{product.name}</h3>
                                <p>₹ {product.newPrice}</p>
                                <div
                                    className="wishlist-item-remove-icon"
                                    onClick={() => onToggleWishlist(product)}>
                                    {/* 3. Use the local HeartIcon, passing 'true' */}
                                    <HeartIcon isWishlisted={true} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;