import React, { useState } from "react";
import "./HeaderBanner.css";

const HeaderBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="header-banner">
      <div className="banner-content">
        <p>Free Shipping on All Orders Over ₹2000!</p>
      </div>
      <button onClick={handleClose} className="close-button" aria-label="Close banner">
        ×
      </button>
    </div>
  );
};

export default HeaderBanner;
