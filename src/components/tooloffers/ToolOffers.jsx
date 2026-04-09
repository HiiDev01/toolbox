import React from 'react';
import './ToolOffers.css';

const ToolOffers = () => {
  const offers = [
    {
      id: 1,
      type: 'yellow',
      badge: 'OFFER',
      title: 'Flat 80% OFF',
      image: 'https://via.placeholder.com/280x220/FFD700/000000?text=DEWALT+Drill',
      imageAlt: 'DeWalt Drill',
    },
    {
      id: 2,
      type: 'blue',
      badge: 'SPECIAL OFFER',
      title: 'Up to 30% OFF',
      subtitle: 'New Arrivals',
      image: 'https://via.placeholder.com/280x220/008000/ffffff?text=Metabo+Nail+Gun',
      imageAlt: 'Metabo Nail Gun',
    },
  ];

  return (
    <div className="tool-offers-container">
      {/* Left Sidebar - Categories */}
      <div className="categories">
        <div className="category-column">
          <h3>Air Tools</h3>
          <ul>
            <li>Pipe Cutters</li>
            <li>Air Compressors</li>
            <li>Grinding Air Tools</li>
            <li>Pneumatic Impact</li>
            <li>Angle Grinders</li>
          </ul>
        </div>

        <div className="category-column">
          <h3>Hand Tools</h3>
          <ul>
            <li>Straight Grinders</li>
            <li>Hand Measure</li>
            <li>Pliers &amp; Cutters</li>
            <li>Screwdrivers</li>
            <li>SDS-Plus Drill</li>
          </ul>
        </div>
      </div>

      {/* Mapped Offer Cards */}
      <div className="offers-wrapper">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className={`offer-card ${offer.type}-offer`}
          >
            <div className={`offer-badge ${offer.type === 'blue' ? 'special' : ''}`}>
              {offer.badge}
            </div>
            
            <img 
              src={offer.image} 
              alt={offer.imageAlt}
              className="tool-image"
            />
            
            <div className="offer-text">
              <h2>{offer.title}</h2>
              {offer.subtitle && <p>{offer.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolOffers;