
import './Home.css';
import React, { useRef, useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';
import './Home.css';


import flowerpic from '../images/flowerpic.png';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpeg';
import img9 from '../images/img9.jpeg';
import img10 from '../images/img10.jpeg';
import flowerlamp from '../images/flowerlamp.jpeg';
import fairylantern from '../images/fairylantern.jpeg';
import windchime from '../images/windchime.jpeg';
import moderncandle from '../images/moderncandle.jpg';
import lemonmugs from '../images/lemonmugs.jpg';
import daisyhat from '../images/daisyhat.jpg';
import rainbowplanter from '../images/rainbowplanter.jpg';
import beachbag from '../images/beachbag.jpg';
import gardenvase from '../images/gardenvase.jpg';
import faceplanter from '../images/faceplanter.jpg';
import tablelamp from '../images/tablelamp.jpg';
import wallhangings from '../images/wallhangings.jpg';
import candles from '../images/candles.jpg';
import terrariums from '../images/terrariums.jpg';
import crochet from '../images/crochet.jpg';
import ceramic from '../images/ceramic.jpg';
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';
import about3 from '../images/about3.jpg';
import video1 from '../images/video1.mp4';




const images = [img4, img5, img6, img7, img8, img9, img10, flowerlamp, fairylantern, windchime, flowerpic, tablelamp, wallhangings, candles, terrariums, crochet, ceramic,
    about1, about2, about3,];



function Home({ scrollTarget, setScrollTarget }) {

    const featuredProducts = [
        { id: 'crystal-root-chime', image: windchime, name: "Crystal Root Chime", price: "₹1750.00" },
        { id: 'daisy-hat', image: daisyhat, name: "Daisy Hat", price: "₹1200.00" },
        { id: 'flower-lamp', image: flowerlamp, name: "Flower Lamp", price: "₹1450.00" },
        { id: 'lemon-mugs', image: lemonmugs, name: "Ceramic Lemon Mugs", price: "₹1100.00" },
        { id: 'rainbow-planter', image: rainbowplanter, name: "Mint Green Rainbow Planter", price: "₹1550.00" },
    ];

    const popularProducts = [
        { id: 'beach-bag', image: beachbag, name: "Crochet Beach Bag & Flower Hat", price: "₹1450.00" },
        { id: 'face-planter', image: faceplanter, name: "Serene Face Planter", price: "₹2100.00" },
        { id: 'fairy-lantern', image: fairylantern, name: "Fairy Lantern", price: "₹1600.00" },
        { id: 'modern-candle', image: moderncandle, name: "Monochrome Modern Candle", price: "₹1199.00" },
        { id: 'garden-vase', image: gardenvase, name: "Springtime Garden Vase", price: "₹2200.00" },
    ];

    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (aboutSectionRef.current) {
            observer.observe(aboutSectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const introRef = useRef(null);

    const featuredRef = useRef(null);

    const scrollFeatured = (direction) => {
        if (featuredRef.current) {
            featuredRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };


    const popularRef = useRef(null);

    const scrollPopular = (direction) => {
        if (popularRef.current) {
            popularRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    const [startTyping, setStartTyping] = useState(false);
    const fullText = `Discover Our Handcrafted Home Décor Collection — Where Creativity Meets Craftsmanship. Each Piece Is Made With Care To Bring Warmth, Charm, And Uniqueness To Your Living Space.`;
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                }
            },
            { threshold: 0.5 }
        );

        if (introRef.current) observer.observe(introRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (startTyping && displayText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, displayText.length + 1));
            }, 30); // speed of typing
            return () => clearTimeout(timeout);
        }
    }, [startTyping, displayText]);

    const features = [
        "100% Handcrafted By Local Artisans",
        "Sustainable & Ethically Sourced Materials",
        "Customization Available On Select Items",
        "Elegant Packaging — Perfect For Gifting",
    ];

    const shopSectionRef = useRef(null);

    const handleScrollToShop = () => {
        if (shopSectionRef.current) {
            shopSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const collectionsSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);



    useEffect(() => {
        // If the target is null, do nothing
        if (!scrollTarget) return;

        let targetRef;
        if (scrollTarget === 'collections') {
            targetRef = collectionsSectionRef;
        } else if (scrollTarget === 'about') {
            targetRef = aboutSectionRef;
        }

        // If we found a matching ref, scroll to it
        if (targetRef && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }


        setScrollTarget(null);

    }, [scrollTarget, setScrollTarget]);


    return (
        <div className="home">
            <section className="hero">
                <h1>
                    <span className="highlight">ELEVATE</span> YOUR <span className="highlight">HOME</span> WITH UNIQUE<br />
                    HANDMADE <span className="highlight">PIECES</span> <img src={flowerpic} className="image"></img>
                </h1>
                <div className="buttons">
                    <button className="btn btn1">Enquiry</button>
                    <button onClick={handleScrollToShop} className="btn btn2">Shop</button>
                </div>
            </section>

            <section className="infinite-carousel">
                <div className="slider-track">
                    {images.concat(images).map((img, index) => (
                        <div className="slide" key={index}>
                            <img src={img} alt={`Decor ${index}`} />
                        </div>
                    ))}
                </div>
            </section>

            <div ref={shopSectionRef}>
                <ProductCarousel title="Featured" products={featuredProducts} />
                <ProductCarousel title="Popular" products={popularProducts} />
            </div>



            <section className="collection-intro" ref={introRef}>
                <p className="collection-text slide-down">{displayText} </p>
            </section>


            <section className="collections-section" ref={collectionsSectionRef}>
                <h2 className="collections-title">Explore Our Collections!</h2>
                <div className="collections-grid">
                    <div className="collection-card">
                        <img src={tablelamp} alt="Table Lamps" />
                        <p>Table Lamps</p>
                    </div>
                    <div className="collection-card">
                        <img src={wallhangings} alt="Wall Hangings" />
                        <p>Wall Hangings</p>
                    </div>
                    <div className="collection-card">
                        <img src={candles} alt="Candles & Holders" />
                        <p>Candles & Holders</p>
                    </div>
                    <div className="collection-card">
                        <img src={terrariums} alt="Terrariums & Planters" />
                        <p>Terrariums & Planters</p>
                    </div>
                    <div className="collection-card">
                        <img src={crochet} alt="Crochet" />
                        <p>Crochet</p>
                    </div>
                    <div className="collection-card">
                        <img src={ceramic} alt="Ceramic & Pottery" />
                        <p>Ceramic & Pottery</p>
                    </div>
                </div>
            </section>

            <section className="about-section" ref={aboutSectionRef}>
                <div className="about-overlay">
                    <h2 className={`about-title ${animate ? 'slide-in' : ''}`}>About Us</h2>

                    <div className="about-content">
                        <div className={`about-description ${animate ? 'zoom-in' : ''}`}>
                            <p>
                                Welcome to Haven & Hearth, where craftsmanship meets creativity. We believe your home should tell your story, and our handmade decor pieces are designed to help you do just that.
                                Each item is thoughtfully crafted by skilled artisans, blending quality materials with unique designs to bring warmth, charm, and personality to your space.
                            </p>
                            <p>
                                At Haven & Hearth, sustainability and authenticity matter. We’re passionate about supporting local artisans, reducing environmental impact, and creating timeless pieces that you’ll cherish for years to come.
                                Thank you for choosing to add a touch of hand-crafted magic to your home!
                            </p>
                        </div>

                        {/* Floating images */}
                        <div className="about-images-triangle">
                            <img src={about1} alt="Pottery" className="bubble bubble1" />
                            <img src={about2} alt="Hands" className="bubble bubble2" />
                            <img src={about3} alt="Interior" className="bubble bubble3" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <h2>Why Choose Us?</h2>

                <div className="why-content">
                    {/* Left: Video Slider */}
                    <div className="why-video">
                        <video
                            src={video1}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="feature-video"
                        ></video>
                    </div>

                    {/* Right: Features List */}
                    <ul className="features-list">
                        {features.map((feature, index) => (
                            <li key={index} className="feature-item">
                                <span className="arrow-shape"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </div >


    );
}



export default Home;
