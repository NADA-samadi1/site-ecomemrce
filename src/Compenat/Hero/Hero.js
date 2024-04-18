import React, { useState, useEffect } from 'react';
import './Hero.css';
import arrowIcon from '../Assets/arrow.png'; // Correction de l'import
import img1 from '../Assets/bg1.png';
import img3 from '../Assets/bg3.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img3];

  useEffect(() => {
    const changeBackground = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(changeBackground, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  const heroStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`, // Correction de la syntaxe de l'URL
  };

  return (
    <div className="hero" id="bg" style={heroStyle}>
      <div className="hero-left">
        <h2>New Arrivals only</h2> {/* Correction de l'orthographe */}
        <div>
          <p>Collection</p>
          <p>For Everyone</p> {/* Correction de l'orthographe */}
        </div>
      </div>
      <div className="hero-lastest-btn">
        <div>Latest Collection</div> {/* Correction de l'orthographe */}
        <img src={arrowIcon} alt="" /> {/* Correction du nom de la variable */}
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
