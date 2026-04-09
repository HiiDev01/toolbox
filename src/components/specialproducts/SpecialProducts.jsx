import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SpecialProducts.css';

const products = [
  {
    id: 1,
    name: "Milwaukee 2458-21 M12 Cordless Palm Nailer",
    price: 1.00,
    image: "https://via.placeholder.com/300x250/FF0000/FFFFFF?text=Milwaukee+Nailer", // Replace with real image URLs
    rating: 0,
    reviews: 0,
  },
  {
    id: 2,
    name: "Fiskars CF Spray Gun, Multi, Front Operation",
    price: 1.00,
    image: "https://via.placeholder.com/300x250/FFAA00/000000?text=Fiskars+Spray+Gun",
    rating: 0,
    reviews: 0,
  },
  {
    id: 3,
    name: "Malfah Enterprises Ingco Wire Cup Block Brush",
    price: 1.00,
    image: "https://via.placeholder.com/300x250/FFCC00/000000?text=Wire+Cup+Brush",
    rating: 0,
    reviews: 0,
  },
  {
    id: 4,
    name: 'Actool " Diameter x 1" Depth Of Cut Annular Cutter',
    price: 1.00,
    image: "https://via.placeholder.com/300x250/333333/FFFFFF?text=Annular+Cutter",
    rating: 0,
    reviews: 0,
  },
  {
    id: 5,
    name: "Homdum 150 Bar Pressure Washer With Nozzle Gun",
    price: 2.00,
    image: "https://via.placeholder.com/300x250/FFCC00/000000?text=Pressure+Washer",
    rating: 0,
    reviews: 0,
  },
  {
    id: 6,
    name: "Power Tools Manufacturer Supplied 16mm Electric Drill",
    price: 1.00,
    image: "https://via.placeholder.com/300x250/666666/FFFFFF?text=Electric+Drill",
    rating: 0,
    reviews: 0,
  },
  {
    id: 7,
    name: "Cordless Nail Gun Battery Powered Master Brad Nailer",
    price: 1.00,
    image: "https://via.placeholder.com/300x250/333333/FFFFFF?text=Cordless+Nail+Gun",
    rating: 0,
    reviews: 0,
  },
];

const SpecialProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5; // Number of products visible at once

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - itemsPerView : prev - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Special</h2>
      </div>

      <button className="nav-button prev" onClick={prevSlide}>
        <ChevronLeft size={25}/>
      </button>

      <div className="carousel-wrapper">

        <div className="carousel-track" style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
        }}>
          {products.map((product) => (
            <div key={product.id} className="spec-card">
              <div className="spec-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="spec-info">
                <h3 className="spec-name">{product.name}</h3>
                <div className="specrating">
                  {'★'.repeat(product.rating)} ({product.reviews})
                </div>
                <div className="specprice">${product.price.toFixed(2)}</div>
              </div>
              <button className="add-to-cart">
                {product.name.includes("options") ? "Choose options" : "Add to cart"}
              </button>
            </div>
          ))}
        </div>

      </div>

      <button className="nav-button next" onClick={nextSlide}>
        <ChevronRight size={25}/>
      </button>
    </div>
  );
};

export default SpecialProducts;