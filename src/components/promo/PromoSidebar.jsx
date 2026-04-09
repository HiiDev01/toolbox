import React from "react";
import "./PromoSidebar.css"


const PromoSidebar = () => {
  return (
    <div className="promo-sidebar">
      {/* Orange Card - Cordless Drill */}
      <div className="promo-card orange">
        <div className="promo-info">
          <h3>Max Lithium<br />Cordless Drill</h3>
          <p className="subtitle">Weekly Offers</p>
          <p className="price">$59</p>
        </div>
        <img 
          src="https://via.placeholder.com/280x200/ff9800/ffffff?text=DeWalt+Drill" 
          alt="Cordless Drill" 
        />
      </div>

      {/* Light Blue Card - Air Nailer */}
      <div className="promo-card blue">
        <div className="new-badge">New</div>
        <div className="promo-info">
          <h3>Compressed<br />Air Nailer</h3>
          <p className="subtitle">Lowest Price</p>
          <p className="price">$35</p>
        </div>
        <img 
          src="https://via.placeholder.com/280x200/81d4fa/333?text=Air+Nailer" 
          alt="Air Nailer" 
        />
      </div>
    </div>
  );
};

export default PromoSidebar;