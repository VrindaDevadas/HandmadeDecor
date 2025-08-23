import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import ProductPage from './components/ProductPage';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import CartPage from './components/CartPage';
import CollectionPage from './components/CollectionPage';


import tablelamp from './images/tablelamp.jpg';
import wallhangings from './images/wallhangings.jpg';
import candles from './images/candles.jpg';
import terrariums from './images/terrariums.jpg';
import crochet from './images/crochet.jpg';
import ceramic from './images/ceramic.jpg';
import flowerlamp from './images/flowerlamp.jpeg';
import daisyhat from './images/daisyhat.jpg';
import moderncandle from './images/moderncandle.jpg';
import lemonmugs from './images/lemonmugs.jpg';
import rainbowplanter from './images/rainbowplanter.jpg';
import beachbag from './images/beachbag.jpg';
import gardenvase from './images/gardenvase.jpg';
import faceplanter from './images/faceplanter.jpg';
import fairylantern from './images/fairylantern.jpeg';
import driftwoodcrystal from './images/driftwoodcrystal.jpeg';
import butterflylamp from './images/butterflylamp.jpeg';
import floraltapestry from './images/floraltapestry.jpeg';
import embroideredlarson from './images/embroideredlarson.jpeg';
import meadowlamp from './images/meadowlamp.jpeg';
import blossom from './images/blossom.jpeg';
import orchard from './images/orchard.jpeg';
import wooden from './images/wooden.jpeg';
import img8 from './images/img8.jpeg';
import blossombutterfly from './images/blossombutterfly.jpeg';
import heartfelt from './images/heartfelt.jpeg';
import heartleaf from './images/heartleaf.jpeg';
import meadowlace from './images/meadowlace.jpeg';
import tusslehanging from './images/tusslehanging.jpeg';
import seaside from './images/seaside.jpeg';
import starrylantern from './images/starrylantern.jpeg';
import soycandles from './images/soycandles.jpeg';
import lunarcandle from './images/lunarcandle.jpeg';
import floralcandles from './images/floralcandles.jpeg'
import floraltealight from './images/floraltealight.jpeg';
import jarlcandles from './images/jarcandles.jpeg';
import tealightjars from './images/tealightjars.jpeg';


const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};


const collectionsData = [
  {
    id: 'table-lamps',
    name: 'Table Lamps',
    image: tablelamp, // Image for the home page card
    title: 'ILLUMINATE YOUR WORLD WITH ARTISTIC FLAIR',
    description: 'Brighten any corner of your home with our exquisite collection of table lamps. More than just a source of light, each lamp is a piece of art, designed to create a warm, inviting ambiance. From elegant, nature-inspired designs that bloom with light to modern minimalist styles, our table lamps are the perfect accent to elevate your decor and cast a magical glow upon your evenings',
    productIds: ['butterfly-lamp', 'fairy-lantern', 'flower-lamp', 'floral-tapestry', 'embroidered-larson', 'orchard-lamp', 'blossom-lamp', 'wooden-lamp', 'meadow-lamp']
  },
  {
    id: 'wall-hangings',
    name: 'Wall Hangings',
    image: wallhangings,
    title: 'WEAVE YOUR STORY INTO EVERY WALL',
    description: 'Transform your empty walls into stunning focal points with our curated collection of handmade wall hangings. Each piece is a testament to artisanal skill, blending natural textures, intricate patterns, and rich colors to bring warmth and character to your home. From bohemian macrame to modern woven tapestries, our wall hangings are more than just decorations—they are expressions of art that add a unique and personal touch to your living space.',
    productIds: ['meadow-lace', 'seaside', 'tusslehanging', 'heartleaf', 'heartfelt', 'driftwood-crystal', 'blossom-butterfly', 'crystal-garden']
  },
  {
    id: 'candles',
    name: 'Candles & Holders',
    image: candles,
    title: 'CRAFTED LIGHT FOR COZY MOMENTS',
    description: 'Set the perfect mood with our enchanting collection of artisanal candles and handcrafted holders. Each candle is hand-poured using sustainable waxes and infused with captivating scents designed to soothe and inspire. Paired with our unique, artist-made holders, they become stunning decorative pieces that cast a warm, flickering glow. Light a candle, unwind, and transform any room into a serene sanctuary.',
    productIds: ['lunarcandle', 'floralcandles', 'starrylantern', 'soycandles', 'floraltealight', 'tealightjars', 'modern-candle', 'jarcandles']
  },
  {
    id: 'terrariums',
    name: 'Terrariums & Planters',
    image: terrariums,
    title: 'CULTIVATE YOUR OWN OASIS',
    description: 'Breathe life into your home with our stunning collection of artisanal terrariums and planters. Each piece is a living sculpture, thoughtfully designed to showcase botanical beauty and create a miniature ecosystem within your space. From sleek geometric glass terrariums to minimalist ceramic planters, our collection provides the perfect vessel for your favorite succulents, air plants, and lush foliage. Ideal for both seasoned plant lovers and budding green thumbs, these pieces make it easy to cultivate a tranquil green corner and bring the serenity of nature indoors.',
    productIds: ['some-wall-hanging-id', 'another-wall-hanging-id']
  },
  {
    id: 'crochet',
    name: 'Crochet',
    image: crochet,
    title: 'THE ART OF THE HANDMADE THREAD',
    description: 'Wrap your world in the comforting embrace of our exquisite crochet collection. Every piece is meticulously handcrafted, looping soft, sustainable yarns into timeless designs that blend traditional technique with modern bohemian style. From intricate home accents to charming accessories, our crochet items add a layer of texture, warmth, and heartfelt artistry to your life. Discover the simple beauty of a craft passed down through generations, reimagined for the contemporary home.',
    productIds: ['some-wall-hanging-id', 'another-wall-hanging-id']
  },
  {
    id: 'ceramic-pottery',
    name: 'Ceramic & Pottery',
    image: ceramic,
    title: 'SHAPED BY HAND, FIRED BY PASSION',
    description: 'Discover the raw beauty of our ceramic and pottery collection, where earthy materials are transformed into functional works of art. Each vase, mug, and planter is shaped on the wheel or built by hand, carrying the unique marks of the artisan who created it. Fired to perfection, these pieces celebrate the perfectly imperfect nature of handmade goods. Bring an element of grounded, timeless elegance into your home with pottery that is as beautiful to hold as it is to behold.',
    productIds: ['some-wall-hanging-id', 'another-wall-hanging-id']
  },

];

const allProducts = [
  {
    id: 'crystal-root-chime',
    name: "Crystal Root Chime",
    subtitle: "Handmade Artisan Craftsmanship, Sparkling Crystal & Gemstone Accents, Durable",
    rating: "4.5",
    oldPrice: "1450.00",
    newPrice: "1100.00",
    image: driftwoodcrystal,
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
  },

  {
    id: 'butterfly-lamp',
    name: "Butterfly Lampshade",
    subtitle: "Exquisitely crafted butterfly-cutout design that casts graceful, fluttering shadows around the room when lit.",
    rating: "4.0",
    oldPrice: "3999.00",
    newPrice: "3650.00",
    image: butterflylamp,
    description: " A elegant hanging lampshade featuring delicate butterfly motifs along the lower edge, delivering a soft, ambient glow and a whimsical, nature-inspired touch to any living space. Perfect for bedrooms, nurseries, or cozy lounges, and designed to complement both modern and classic decor."
  },

  {
    id: 'floral-tapestry',
    name: "Floral Tapestry Lamp",
    subtitle: "Vibrant tapestry-inspired shade with intricate floral embroidery and rich color accents",
    rating: "4.5",
    oldPrice: "3899.00",
    newPrice: "3685.00",
    image: floraltapestry,
    description: "A striking lampshade that blends classic floral motifs with modern craft, delivering warm ambient light and a cozy, artisanal feel to any room."
  },

  {
    id: 'embroidered-lamp',
    name: "Embroidered Larson Lamp",
    subtitle: "Hand-embroidered, multicolor floral patterns on a deep blue shade for a bold, textured look.",
    rating: "4.4",
    oldPrice: "3699.00",
    newPrice: "3450.00",
    image: embroideredlarson,
    description: "A statement piece that showcases detailed stitching and vibrant threadwork, casting colorful, inviting glow and adding artistic flair to interiors."
  },

  {
    id: 'wooden-lamp',
    name: "Macrame Wooden Lamp",
    subtitle: "Intricate macrame fringe on a classic wooden base for a boho-chic, textured aesthetic",
    rating: "4.6",
    oldPrice: "3500.00",
    newPrice: "2999.00",
    image: wooden,
    description: "Handcrafted lamp featuring detailed macrame detailing and a warm wood tone, casting a cozy, artisanal glow perfect for living spaces with rustic or Bohemian decor."
  },

  {
    id: 'meadow-lamp',
    name: "Meadow Lamp",
    subtitle: "Bright floral embroidery on a light shade for a fresh, garden-inspired look.",
    rating: "4.5",
    oldPrice: "36000.00",
    newPrice: "3199.00",
    image: meadowlamp,
    description: " A charming lamp with vivid botanical motifs that diffuse a warm glow, adding a lively, nature-planted vibe to any room."
  },

  {
    id: 'blossom-lamp',
    name: "Blossom Lamp",
    subtitle: "Handcrafted pink crochet shade adorned with tiny beads for a delicate, feminine glow.",
    rating: "4.3",
    oldPrice: "2999.00",
    newPrice: "2500.00",
    image: blossom,
    description: "A charming table lamp that combines soft pink crochet with a glossy base to create a cozy, romantic lighting accent for bedrooms or living spaces."
  },

  {
    id: 'orchard-lamp',
    name: "Orchard Lamp",
    subtitle: " Lantern-style wicker shade shaped like hanging gourds, casting warm, natural light through intricate weaving.",
    rating: "4.2",
    oldPrice: "3699.00",
    newPrice: "3199.00",
    image: orchard,
    description: "An earthy, nature-inspired lamp that brings organic texture and a gentle glow, ideal for boho or rustic interiors and softly lit corners."
  },

  {
    id: 'crystal-garden',
    name: "Crystal Garden Orb",
    subtitle: " Handcrafted wire frame with natural crystals and dried botanicals; assembled using sustainable wires and recyclable elements.",
    rating: "4.6",
    oldPrice: "2999.00",
    newPrice: "2599.00",
    image: img8,
    description: "A nature-inspired hanging orb that captures light with shimmering crystals and dried greenery for a delicate, earthy glow",
  },

  {
    id: 'blossom-butterfly',
    name: "Pink Blossom Butterfly Lattice",
    subtitle: "Hand-cut paper butterflies mounted on a hand-assembled lattice frame; crafted with recycled materials and low-waste processes.",
    rating: "4.3",
    oldPrice: "2500.00",
    newPrice: "1999.00",
    image: blossombutterfly,
    description: "Whimsical wall sculpture featuring soft pink butterflies on a geometric lattice, perfect for nurseries or sweet, feminine spaces."
  },

  {
    id: 'heartfelt',
    name: " Heart Strings Mobile",
    subtitle: " Handmade heart shapes on cotton cords with natural fibers; crafted using sustainable dyes and materials.",
    rating: "4.4",
    oldPrice: "2999.00",
    newPrice: "2500.00",
    image: heartfelt,
    description: "A sweet, romantic mobile that softly sways with the air, built to be gentle on the environment while delivering a cozy, loving vibe."
  },

  {
    id: 'heartleaf',
    name: "Harvest Heart Leaf  hanging",
    subtitle: "Handwoven jute web and pressed leaf-inspired shapes hung from a natural driftwood dowel; crafted by hand using low-waste, renewable fibers.",
    rating: "4.5",
    oldPrice: "2999.00",
    newPrice: "2609.00",
    image: heartleaf,
    description: "A boho-chic wall decor piece featuring layered, dried-look leaf ornaments in earthy tones. Built with sustainable materials and simple, durable construction to invite warmth and texture into any space.."
  },

  {
    id: 'driftwood-crystal',
    name: "Driftwood Crystal Sphere",
    subtitle: "Hand-shaped wooden sphere with dangling crystals and tiny lights; created using reclaimed wood and responsibly sourced crystals.",
    rating: "4.7",
    oldPrice: "3599.00",
    newPrice: "3099.00",
    image: driftwoodcrystal,
    description: "An organic spherical centerpiece that blends rustic driftwood with twinkling crystals, bringing a magical ambiance to any room.",
  },

  {
    id: 'tusslehanging',
    name: "Tassel & Bead Wall Hanging",
    subtitle: "Handwoven cotton cord with wooden beads and soft tassels, proudly made by hand to reduce waste and support slow crafts.",
    rating: "4.4",
    oldPrice: "2500.00",
    newPrice: "2098.00",
    image: tusslehanging,
    description: "A airy, boho-inspired wall piece that combines natural fibers, wooden accents, and delicate tassels to add texture and warmth to any wall, built to last"
  },

  {
    id: 'seaside',
    name: "Seaside Driftwood Wind Chime",
    subtitle: "Handcrafted driftwood rod with seasonal shell discs and wooden beads; assembled by hand to recycle natural materials.",
    rating: "4.5",
    oldPrice: "3099.00",
    newPrice: "2700.00",
    image: seaside,
    description: "A breezy coastal-inspired mobile that rings softly in the air. Each piece uses salvaged wood, natural shells, and dyed cords to create a low-waste, long-lasting decorative chime."
  },

  {
    id: 'meadow-lace',
    name: "Meadow Bloom Lace Wall Hanging",
    subtitle: "Fully handmade lace panel woven and finished by artisans, using eco-friendly fibers and natural dyes.",
    rating: "4.5",
    oldPrice: "2200.00",
    newPrice: "1900.00",
    image: meadowlace,
    description: "An artisanal textile wall piece with floral lace patterns. Made by hand, this wall hanging brings tactile texture and a sustainable, bohemian charm to any space."
  },

  {
    id: 'soycandles',
    name: "Daisy Bloom Soy Candles ",
    subtitle: "Fully handmade lace panel woven and finished by artisans, using eco-friendly fibers and natural dyes.",
    rating: "4.6",
    oldPrice: "1300.00",
    newPrice: "900.00",
    image: soycandles,
    description: "Clean-burning, slow-made candles with a chic daisy accent. Built for reuse and minimal waste, ideal for calm corners or gifting."
  },

  {
    id: 'lunarcandle',
    name: "Lunar Drift Candle Trio",
    subtitle: "Handmade ceramic moon holders with hand-poured soy wax; each piece crafted in small batches using non-toxic glazes and recycled packaging.",
    rating: "4.3",
    oldPrice: "1100.00",
    newPrice: "800.00",
    image: lunarcandle,
    description: "Whimsical lunar-themed candles that glow softly through textured, planetary-inspired holders. Built to last and minimize waste, perfect for a calm, celestial ambiance."
  },

  {
    id: 'floralcandles',
    name: "FloraGlow Tealight Collection",
    subtitle: "cHand-glazed ceramic tealight holders in soft pastel tones; produced in small batches with lead-free glazes and recyclable packaging",
    rating: "4.4",
    oldPrice: "1099.00",
    newPrice: "700.00",
    image: floralcandles,
    description: "Delicate, nature-inspired tealights that bring gentle warmth to any space. Reusable jars and durable finishes support a low-waste, slow-design approach."
  },

  {
    id: 'starrylantern',
    name: "Starry Lantern Candles Set",
    subtitle: "Hand-poured wax in reusable ceramic holders, finished with hand-applied decorative details; crafted with recyclable materials.",
    rating: "4.7",
    oldPrice: "1600.00",
    newPrice: "1100.00",
    image: starrylantern,
    description: " A collection of candle holders with star-cutouts and cozy, ambient light. Each holder is handmade and designed for longevity, promoting low-waste Candlecare."
  },

  {
    id: 'floraltealight',
    name: "Floral Tealight Mug",
    subtitle: "Hand-painted ceramic candle holder in a mug shape; glazed with lead-free, eco-friendly colors..",
    rating: "4.5",
    oldPrice: "1400.00",
    newPrice: "1009.00",
    image: floraltealight,
    description: "A whimsical mug-like holder that holds a tealight and doubles as décor; designed for reuse and simple refills to minimize waste."
  },

  {
    id: 'tealightjars',
    name: "Botanical Glow Tealight Jars",
    subtitle: "Hand-decorated ceramic tealight holders with botanical motifs; produced in small batches using non-toxic glazes.",
    rating: "4.6",
    oldPrice: "1300.00",
    newPrice: "850.00",
    image: tealightjars,
    description: "Contemporary, handmade tealight jars that cast warm patterns through botanical designs. Built to be reused or repurposed after the candle burns, aligning with sustainable styling."
  },

  {
    id: 'jarcandles',
    name: "Daisy Garden Ceramic Candle Holder",
    subtitle: "Hand-painted ceramic vessel with a cut-out window designed to hold a standard tealight or small votive; finished with lead-free, non-toxic glazes.",
    rating: "4.7",
    oldPrice: "1800.00",
    newPrice: "1200.00",
    image: jarlcandles,
    description: "Garden-inspired ceramic holder that frames warm candlelight through a whimsical window. Crafted by hand in small batches to minimize waste, and reusable as décor after the candle is used. Comes with eco-friendly gift tag."
  }

];



const AppContent = () => {

  const [activeSection, setActiveSection] = useState('home');

  useScrollToTop();

  const [wishlistItems, setWishlistItems] = useState([]);


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

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productToAdd, quantity) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingItem) {
      // If it exists, update its quantity
      setCartItems(cartItems.map(item =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + quantity }
          // This is a new object, so React re-renders
          : item
      ));
    } else {
      // If it's a new item, add it to the cart with the given quantity
      setCartItems([...cartItems, { ...productToAdd, quantity: quantity }]);
    }
  };

  // 4. Calculate the total number of items in the cart for the badge
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleUpdateCartQuantity = (productToUpdate, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity is 0, remove the item from the cart
      setCartItems(cartItems.filter(item => item.id !== productToUpdate.id));
    } else {
      // Otherwise, just update the quantity for that one item
      setCartItems(cartItems.map(item =>
        item.id === productToUpdate.id
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };


  return (
    <>
      <HeaderBanner />
      <Navigation
        activeSection={activeSection}
        wishlistCount={wishlistItems.length}
        cartCount={cartItemCount}
        setScrollTarget={setScrollTarget} />
      <Routes>
        <Route path="/" element={
          <Home
            setActiveSection={setActiveSection}
            collections={collectionsData}
            scrollTarget={scrollTarget}
            setScrollTarget={setScrollTarget} />} />
        {/* This route will render the ProductPage and pass all products to it */}
        <Route path="/product/:productId" element={
          <ProductPage
            products={allProducts}
            onToggleWishlist={handleToggleWishlist}
            wishlistItems={wishlistItems}
            onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/collection/:collectionId"
          element={
            <CollectionPage
              collections={collectionsData}
              allProducts={allProducts}
            />
          }
        />

        <Route path="/wishlist" element={
          <Wishlist
            wishlistItems={wishlistItems}
            onToggleWishlist={handleToggleWishlist}
          />
        }
        />

        <Route path="/cart"
          element={<CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateCartQuantity} />}
        />

      </Routes>
    </>

  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
