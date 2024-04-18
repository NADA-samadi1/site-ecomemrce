import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import cart_icon from '../Assets/cart_icon.png';
import './Nav.css'
import login_img from '../Assets/login-img.png'
import { ShopContext } from '../../Context/ShopContext'

const CategorySearchBar = ({ isLoggedIn }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { all_product, addToCart, cartItems } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Rediriger vers la page de connexion
    navigate('/loginSignup');
  };

  const handleNavCountClick = () => {
    
    addToCart();
  };

  return (
    <div className="category-search-bar">
      <div className="category-button" onClick={() => setShowCategory(!showCategory)}>
        <HiOutlineMenuAlt4 className="w-5 h-5" />
        <span className="category-search-bar-span">Shop by Category</span>
        {showCategory && (
          <motion.ul
            className="category-list"
          >
            <li>Accessories</li>
            <li>Clothes</li>
            <li>Bags</li>
          </motion.ul>
        )}
      </div>
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search your products here"
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>
        {showSearch && (
          <div className="search-results">
            {/* Display search results here */}
            <div>Result 1</div>
            <div>Result 2</div>
            <div>Result 3</div>
          </div>
        )}
      </div>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <>
            <button>Logout</button>
            {/* Additional logic for the logout button */}
          </>
        ) : (
          <>
            <Link to='/login'><img src={login_img} alt="" srcset="" onClick={handleLoginClick} className="login iconLogin" /></Link>
            {/* Additional logic for the login button */}
          </>
        )}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-count" onClick={handleNavCountClick}>
          {cartItems && Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)}
        </div>
      </div>
    </div>
  );
};

export default CategorySearchBar;
