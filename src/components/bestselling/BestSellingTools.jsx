import React from 'react';
import './BestSellingTools.css';

const BestSellingTools = () => {
  const bestSelling = [
    {
      id: 1,
      name: "Milwaukee 2458-21 M12 Cordless Palm Nailer",
      image: "https://via.placeholder.com/180x140/ff0000/ffffff?text=Milwaukee+Nailer",
      rating: 5,
      price: "$1.00",
      originalPrice: null,
    },
    {
      id: 2,
      name: "Paslode PowerMaster Pro 30° Framing Nailer",
      image: "https://via.placeholder.com/180x140/333333/ffffff?text=Paslode+Nailer",
      rating: 5,
      price: "$1.00",
      originalPrice: null,
    },
    {
      id: 3,
      name: "Cordless Nail Gun Battery Powered Master Brad Nailer",
      image: "https://via.placeholder.com/180x140/444444/ffffff?text=Cordless+Nail+Gun",
      rating: 5,
      price: "$1.00",
      originalPrice: null,
    },
    {
      id: 4,
      name: "Metabo HPT Cordless MultiVolt Framing Nailer Kit",
      image: "https://via.placeholder.com/180x140/ffd700/000000?text=Metabo+Nailer",
      rating: 5,
      price: "$1.00",
      originalPrice: "$2.00",
    },
  ];

  const categories = [
    {
      title: "Accessories",
      items: ["Batteries", "Cable Reels", "Chargers", "Hammers"]
    },
    {
      title: "Cutter",
      items: ["Bits", "Work Apparel", "Tool Accessories", "Abrasives"]
    },
    {
      title: "Cutter Tools",
      items: ["Cable Cutters", "Mitre Clamps", "Scissors", "Multi Tools"]
    },
    {
      title: "Drillers",
      items: ["Core Drill", "Drill Drivers", "Hammer Drills", "Impact Drills"]
    },
    {
      title: "Pounding",
      items: ["Electric Power", "Washers", "Cordless Tools", "Nailers"]
    },
    {
      title: "Power Tools",
      items: ["Pliers Sockets", "Prying", "Wrenches", "Snips"]
    },
  ];

  return (
    <div className="best-selling-container">
      {/* Left Sidebar - Categories */}
      <div className="categories-sidebar">
        {categories.map((category, index) => (
          <div key={index} className="category-group">
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Side - Best Selling Products */}
      <div className="best-selling-section">
        <div>
            <h2 className="section-title">Best Selling</h2>
            
            <div className="product-grid">
              {bestSelling.map((product) => (
                <div key={product.id} className="prd-card">
                  <div className="prdimg">
                    <img src={product.image} alt={product.name} />
                  </div>
                  
                  <div className="prdinfo">
                    <h4 className="product-name">{product.name}</h4>
                    
                    <div className="prdrating">
                      {'★'.repeat(product.rating)}
                      <span className="rating-count"> (0)</span>
                    </div>
                    
                    <div className="price-section">
                      {product.originalPrice && (
                        <span className="original-price">{product.originalPrice}</span>
                      )}
                      <span className="current-price">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingTools;