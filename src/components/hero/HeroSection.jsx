import React from "react";
import "./HeroSection.css"




const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="discount">25% OFF</span>
        <h1>Home & Kitchen<br />Dining Chairs</h1>
        <p className="starting-at">Starting at</p>
        <p className="price">$49.00</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img 
          src="https://via.placeholder.com/800x500/1a1a1a/ffffff?text=Power+Drill" 
          alt="Power Drill" 
        />
      </div>
    </div>
  );
};

export default HeroSection;