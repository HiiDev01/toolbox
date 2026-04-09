import React from 'react';
import './FeaturedProducts.css';  

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="featured-grid">

        {/* DeWalt Compressor */}
        <div className="featured-card yellow">
          <div className="featured-content">
            <h3>DeWalt Decker<br />Compressor</h3>
            <p className="starting">Starting From</p>
            <p className="price">$0.49</p>
          </div>
          <img 
            src="https://via.placeholder.com/300x220/facc15/1f2937?text=DeWalt+Compressor" 
            alt="DeWalt Compressor" 
          />
        </div>

        {/* Gardena Watering Pump */}
        <div className="featured-card blue">
          <div className="new-badge">New</div>
          <div className="featured-content">
            <h3>GARDENA Comfort<br />Watering Pump</h3>
            <p className="subtitle">Lowest Price</p>
          </div>
          <img 
            src="https://via.placeholder.com/300x220/67e8f9/1e2937?text=Watering+Pump" 
            alt="Watering Pump" 
          />
        </div>

        {/* BISON Claw Hammer */}
        <div className="featured-card orange">
          <div className="new-badge">New</div>
          <div className="featured-content">
            <h3>BISON Professional<br />450g Claw Hammer</h3>
            <p className="subtitle">Lowest Price!</p>
          </div>
          <img 
            src="https://via.placeholder.com/300x220/f97316/fff?text=Claw+Hammer" 
            alt="Claw Hammer" 
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;