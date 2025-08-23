
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CollectionPage.css';
import './ProductCarousel.css';



const AnimatedText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {

        setDisplayText('');
        let i = 0;


        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 25);

        // This is a cleanup function that runs when the component unmounts
        // It prevents memory leaks by clearing the interval
        return () => {
            clearInterval(typingInterval);
        };
    }, [text]); // The effect re-runs whenever the 'text' prop changes

    return <p>{displayText}</p>;
};


// --- YOUR MAIN COLLECTION PAGE COMPONENT ---
const CollectionPage = ({ collections, allProducts }) => {
    const { collectionId } = useParams();

    const collection = collections.find(c => c.id === collectionId);

    if (!collection) {
        return <div className="collection-not-found"><h1>Collection not found.</h1></div>;
    }

    const productsForThisCollection = collection.productIds.map(productId =>
        allProducts.find(product => product.id === productId)
    );

    return (
        <div className="collection-page-container">
            <section className="collection-hero">
                <div className="collection-hero-text">
                    <h1>{collection.title}</h1>
                    {/* 3. Use the local AnimatedText component here */}
                    <AnimatedText text={collection.description} />
                    <p className="collection-call-to-action">Check out the collection below!</p>
                </div>
                <div className="collection-hero-image">
                    <img src={collection.image} alt={collection.name} />
                </div>
            </section>

            <section className="collection-product-grid">
                {productsForThisCollection.map(product => (
                    product && (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="card-details">
                                <p className="card-title">{product.name}</p>
                                <p className="card-price">₹{product.newPrice}</p>
                                <Link to={`/product/${product.id}`} className="shop-btn-link">Shop</Link>
                            </div>
                        </div>
                    )
                ))}
            </section>
        </div>
    );
};

export default CollectionPage;