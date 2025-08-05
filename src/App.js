import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import ProductPage from './components/ProductPage';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";

import flowerlamp from './images/flowerlamp.jpeg';
import daisyhat from './images/daisyhat.jpg';
import moderncandle from './images/moderncandle.jpg';
import lemonmugs from './images/lemonmugs.jpg';
import rainbowplanter from './images/rainbowplanter.jpg';
import beachbag from './images/beachbag.jpg';
import gardenvase from './images/gardenvase.jpg';
import faceplanter from './images/faceplanter.jpg';
import fairylantern from './images/fairylantern.jpeg';
import windchime from './images/windchime.jpeg';

const allProducts = [
  {
    id: 'crystal-root-chime',
    name: "Crystal Root Chime",
    subtitle: "Handmade Artisan Craftsmanship, Sparkling Crystal & Gemstone Accents, Durable",
    rating: "4.5",
    oldPrice: "1450.00",
    newPrice: "1100.00",
    image: windchime,
    description: "Embrace The Serene Beauty Of Nature With Our Exquisite, Handmade Wind Chime. Crafted From Intertwined Natural Wood Branches, This Unique Piece Forms A Captivating, Organic Frame. Delicately Suspended Within Are An Array Of Sparkling Crystals And Polished Gemstones, Each Chosen For Its Individual Luster And Charm. Perfect For Indoor Or Outdoor Display"
  },

  {
    id: 'daisy-hat',
    name: "Daisy hat",
    subtitle: " Handmade yarn, soft and cozy.",
    rating: "4.1",
    oldPrice: "1200.00",
    newPrice: "980.00",
    image: daisyhat,
    description: " Embrace the serene beauty of nature with our Handmade Daisy Hat. Crafted from soft, high-quality yarn, this charming accessory features a delightful daisy flower pattern that adds a cute and whimsical touch to any outfit. Perfect for outdoor walks or cozy days at home, it’s designed to keep you warm while making a stylish statement."
  },

  {
    id: 'flower-lamp',
    name: "Flower Lamp",
    subtitle: "Vintage-style ceramic lamp with floral design, creates a warm ambient light.",
    rating: "4.4",
    oldPrice: "1700.00",
    newPrice: "1450.00",
    image: flowerlamp,
    description: "Made from ceramic or similar high-quality material, it features delicate pressed or painted floral designs that evoke a vintage, botanical charm. Its soft, ambient glow makes it perfect as a night lamp or a decorative piece to create a cozy, inviting atmosphere in any room."
  },

  {
    id: 'lemon-mugs',
    name: "Ceramic Lemon Mugs",
    subtitle: "Hand-painted with cheerful lemon and leaf motifs,food-safe and  durable ceramic material.",
    rating: "3.9",
    oldPrice: "1100.00",
    newPrice: "900.00",
    image: lemonmugs,
    description: "Add a splash of freshness to your daily routine with these cheerful Ceramic Lemon Mugs. Made from durable ceramic, each mug is hand-painted with vibrant lemon and leaf motifs. Perfect for serving hot beverages like tea and coffee."
  },

  {
    id: 'rainbow-planter',
    name: "Mint Green Rainbow Planter",
    subtitle: "Sleek mint green ceramic with white rainbow patterns, suitable for small plants.",
    rating: "4.3",
    oldPrice: "1890.00",
    newPrice: "1500.00",
    image: rainbowplanter,
    description: "Bring a touch of tranquility and modern elegance to your home or office with the Mint Green Rainbow Planter. Crafted from durable material, this planter features a soothing mint green color adorned with a stylish white rainbow pattern. Perfect for small indoor plants or succulents."
  },

  {
    id: 'beach-bag',
    name: "Crochet Beach Bag & Flower Hat",
    subtitle: "Handcrafted crochet design, Spacious enough to carry beach essentials, Made from durable, lightweight material ideal for summer outings",
    rating: "4.6",
    oldPrice: "1800.00",
    newPrice: "1450.00",
    image: beachbag,
    description: "The Crochet Beach Bag & Flower Hat set is perfect for sunny beach days and outdoor adventures. The bag features a beautiful floral crochet pattern, adding elegance and charm. The matching hat, decorated with soft fabric flowers, offers sun protection while enhancing your beach look."
  },

  {
    id: 'face-planter',
    name: "Serene Face Planter",
    subtitle: "Artistic face design, Made from high-quality ceramic material, Sitable for indoor plants, providing a decorative appeal",
    rating: "4.1",
    oldPrice: "2600.00",
    newPrice: "2100.00",
    image: faceplanter,
    description: "The Serene Face Planter is a modern and artistic piece that elevates any indoor space. Its minimalist black finish with a peaceful face illustration creates a calming ambiance. The planter is crafted from durable ceramic, ensuring longevity and stability for your plants. It is ideal for small to medium-sized indoor plants like succulents or herbs, adding a touch of sophistication to your home decor."
  },

  {
    id: 'fairy-lantern',
    name: "Fairy Lantern",
    subtitle: "Hand-painted fairy silhouettes on glass jars, Equipped with LED lights for safe illumination",
    rating: "4.5",
    oldPrice: "1900.00",
    newPrice: "1600.00",
    image: fairylantern,
    description: "The Fairy Lantern creates a magical atmosphere with its enchanting fairy silhouettes lit by LED candles. Crafted with glass jars and adorned with vibrant artificial flowers, it combines whimsical charm with elegance. Perfect for outdoor garden parties or cozy indoor settings, this lantern adds a soft, warm glow. "
  },

  {
    id: 'modern-candle',
    name: "Monochrome Modern Candle",
    subtitle: "Stylish black and white design, Made from high-quality wax for clean burning",
    rating: "4.2",
    newPrice: "1199.00",
    image: moderncandle,
    description: "The Monochrome Modern Candle features a sleek, contemporary design with bold black and white patterns, creating a sophisticated look. Its minimalist aesthetic complements modern interiors, while the high-quality wax ensures a clean and even burn."
  },

  {
    id: 'garden-vase',
    name: "Springtime Garden Vase",
    subtitle: "Hand-painted floral patterns with a natural, rustic finish, durable ceramic material, Suitable for fresh or artificial flowers.",
    rating: "4.7",
    newPrice: "2200.00",
    image: gardenvase,
    description: "The Springtime Garden Vase captures the essence of spring with its delicate floral design and soft, pastel colors. Crafted from high-quality ceramic, it provides a sturdy and elegant environment for displaying flowers. Its unique, artistic patterns bring a fresh and lively vibe to any room, making it perfect for both modern and vintage decor styles."
  }

];



function App() {

  const [wishlistItems, setWishlistItems] = useState([]);

  // 4. Create a function to add or remove items from the wishlist
  const handleToggleWishlist = (productToAdd) => {
    // Check if the product is already in the wishlist
    const isAlreadyInWishlist = wishlistItems.find(item => item.id === productToAdd.id);

    if (isAlreadyInWishlist) {
      // If it is, remove it by filtering the array
      setWishlistItems(wishlistItems.filter(item => item.id !== productToAdd.id));
    } else {
      // If it's not, add it to the end of the array
      setWishlistItems([...wishlistItems, productToAdd]);
    }
  };

  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <Router>
      <HeaderBanner />
      <Navigation wishlistCount={wishlistItems.length}
        setScrollTarget={setScrollTarget} />
      <Routes>
        <Route path="/" element={
          <Home
            scrollTarget={scrollTarget}
            setScrollTarget={setScrollTarget} />} />
        {/* This route will render the ProductPage and pass all products to it */}
        <Route path="/product/:productId" element={
          <ProductPage
            products={allProducts}
            onToggleWishlist={handleToggleWishlist}
            wishlistItems={wishlistItems} />}
        />

        <Route path="/wishlist" element={
          <Wishlist
            wishlistItems={wishlistItems}
            onToggleWishlist={handleToggleWishlist}
          />
        }
        />
      </Routes>
    </Router>

  );

}

export default App;
