import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo2 from "../images/logo-2.png";


//HeartIcon just for the navbar
const WishlistNavIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartNavIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const Navigation = ({ wishlistCount, setScrollTarget, cartCount, activeSection }) => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();



  const handleLinkClick = (sectionId) => {
    // If we are not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
    }

    setScrollTarget(sectionId);

    if (isMobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  const isLinkActive = (sectionId) => {
    if (location.pathname.startsWith('/collection')) {
      // If we are on ANY collection page, the 'Collections' link should be active.
      return sectionId === 'collections';
    }
    // Otherwise, for the home page, just use the scroll-based active section.
    return activeSection === sectionId;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  useEffect(() => {
    // This function runs when the 'isMobileMenuOpen' state changes
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // cleanup function that runs when the component unmounts
    // It ensures the scroll lock is always removed
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navigation-container ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="nav-content">
        <div className="brand-logo">
          <img
            src={logo2}
            alt="Haven & Hearth Logo"
            className="brand-logo-image"
          />
        </div>

        <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle navigation">
          <div className="hamburger-line line-1"></div>
          <div className="hamburger-line line-2"></div>
          <div className="hamburger-line line-3"></div>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}>
          <Link to="/" className={`nav-link ${isLinkActive('home') ? 'active' : ''}`}>Home</Link>
          <div className={`nav-link ${isLinkActive('collections') ? 'active' : ''}`} onClick={() => handleLinkClick('collections')}>
            Collections
          </div>
          <div className={`nav-link ${isLinkActive('about') ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>
            About Us
          </div>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-actions">
          <Link to="/wishlist" className="nav-action-button wishlist-button" aria-label="Wishlist">
            <WishlistNavIcon />
            {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className="nav-action-button" aria-label="Shopping cart">
            <CartNavIcon />
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
