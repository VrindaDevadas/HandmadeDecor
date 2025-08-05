import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';


const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

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


const ProductPage = ({ products, onToggleWishlist, wishlistItems }) => {
    // State to manage the quantity of the product
    const [quantity, setQuantity] = useState(1);

    // Find the product based on the URL parameter
    const { productId } = useParams();

    console.log("ID from URL:", productId);
    console.log("List of all products received:", products);

    const product = products.find(p => p.id === productId);

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + amount;
            return newQuantity < 1 ? 1 : newQuantity;
        });
    };

    // If product is not found, show a message
    if (!product) {
        return <div className="product-not-found">Product not found.</div>;
    }

    // DERIVE the wishlisted status from the prop
    const isWishlisted = wishlistItems.some(item => item.id === product.id);

    return (
        <div className="product-page-container">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-main-image" />
            </div>

            <div className="product-details-container">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-subtitle">{product.subtitle}</p>

                <div className="product-rating">
                    <StarIcon />
                    <span>{product.rating}</span>
                </div>

                <div className="product-price">
                    {product.oldPrice && <span className="old-price">₹ {product.oldPrice}</span>}
                    <span className="new-price">₹ {product.newPrice}</span>
                </div>

                <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(-1)} aria-label="Decrease quantity">-</button>
                    <input type="text" value={quantity} readOnly aria-label="Current quantity" />
                    <button onClick={() => handleQuantityChange(1)} aria-label="Increase quantity">+</button>
                </div>

                <div className="product-actions">
                    <button className="add-to-cart-btn">Add To Cart</button>
                    <div className={`wishlist-icon ${isWishlisted ? 'wishlisted' : ''}`}
                        // Call the handler from props, passing the entire product object
                        onClick={() => onToggleWishlist(product)}
                        aria-label="Add to wishlist">
                        <HeartIcon isWishlisted={isWishlisted} />
                    </div>
                </div>

                <p className="product-full-description">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductPage;