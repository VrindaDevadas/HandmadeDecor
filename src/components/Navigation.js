import React, { useState } from "react";
import "./Navigation.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo2 from "../images/logo-2.png";


//HeartIcon just for the navbar
const WishlistNavIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E6E6E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Navigation = ({ wishlistCount, setScrollTarget }) => {

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


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
          <Link to="/" className="nav-link">Home</Link>
          <div className="nav-link" onClick={() => handleLinkClick('collections')}>
            Collections
          </div>
          <div className="nav-link" onClick={() => handleLinkClick('about')}>
            About Us
          </div>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-actions">
          <Link to="/wishlist" className="nav-action-button wishlist-button" aria-label="Wishlist">
            <WishlistNavIcon />
            {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
          </Link>

          <button className="nav-acttion-button cart-button" aria-label="Shopping cart">
            <svg
              width="42"
              height="30"
              viewBox="0 0 42 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cart-icon"
            >
              <path
                d="M41.4625 9.48128C41.2709 9.20434 41.015 8.97799 40.7167 8.82161C40.4185 8.66522 40.0868 8.58347 39.75 8.58336H11.2771L8.87291 2.81252C8.5586 2.05191 8.02503 1.40206 7.34015 0.945717C6.65527 0.489374 5.85006 0.247197 5.02707 0.250024H0.166656V4.41669H5.02707L14.9104 28.1354C15.0687 28.5149 15.3358 28.8391 15.678 29.0671C16.0201 29.2951 16.4221 29.4167 16.8333 29.4167H33.5C34.3687 29.4167 35.1458 28.8771 35.4521 28.0667L41.7021 11.4C41.8202 11.0847 41.8601 10.7453 41.8184 10.4112C41.7766 10.077 41.6545 9.75792 41.4625 9.48128ZM32.0562 25.25H18.2229L13.0146 12.75H36.7437L32.0562 25.25Z"
                fill="#E6E6E6"
              />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
