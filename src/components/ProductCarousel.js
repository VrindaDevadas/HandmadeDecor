import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductCarousel.css';

const ProductCarousel = ({ title, products }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <section className="subheading-section">
                <p className="subheading-text">{title}</p>
            </section>
            <section className="product-carousel-section">
                <button className="scroll-btn left" onClick={() => scroll('left')}>❮</button>
                <div className="product-grid-scroll" ref={scrollRef}>
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} />
                            <div className="card-details">
                                <p className="card-title">{product.name}</p>
                                <p className="card-price">{product.price}</p>
                                <Link to={`/product/${product.id}`} className="shop-btn-link">
                                    Shop
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-btn right" onClick={() => scroll('right')}>❯</button>
            </section>
        </>
    );
};

export default ProductCarousel;