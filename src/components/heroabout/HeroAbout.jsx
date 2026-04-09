import React from 'react';
import "./HeroAbout.css"

const HeroAbout = () => {
  return (
    <section className="about-hero">
      <div className="hero-content">
        <h1>Honest, Trustworthy, And<br />Does Good Work.</h1>
        <p className="subtitle">
          At ToolBox, we provide reliable handyman, repair, and installation services 
          for homes and businesses. Quality tools. Quality work.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get A Quote</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="trust-badges">
          <div>⭐⭐⭐⭐⭐</div>
          <p>4.9 from 2,847+ happy customers</p>
        </div>
      </div>

      <div className="hero-image">
        <img 
          src="https://via.placeholder.com/800x600/f59e0b/1f2937?text=Professional+Handyman+with+Drill" 
          alt="ToolBox Handyman" 
        />
      </div>
    </section>
  );
};

export default HeroAbout;