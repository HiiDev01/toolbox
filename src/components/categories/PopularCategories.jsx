import React from 'react';
import './PopularCategories.css';   // We'll use one shared CSS file

const categories = [
  { id: 1, name: "Drillers", img: "https://via.placeholder.com/140/ef4444/fff?text=Drill" },
  { id: 2, name: "Washers", img: "https://via.placeholder.com/140/f59e0b/fff?text=Washer" },
  { id: 3, name: "Nailers", img: "https://via.placeholder.com/140/8b5cf6/fff?text=Nailer" },
  { id: 4, name: "Cutter", img: "https://via.placeholder.com/140/ec4899/fff?text=Cutter" },
  { id: 5, name: "Hammers", img: "https://via.placeholder.com/140/3b82f6/fff?text=Helmet" },
  { id: 6, name: "Bits", img: "https://via.placeholder.com/140/64748b/fff?text=Bit" },
  { id: 7, name: "Abrasives", img: "https://via.placeholder.com/140/f97316/fff?text=Abrasive" },
  { id: 8, name: "Snips", img: "https://via.placeholder.com/140/ef4444/fff?text=Snips" },
  { id: 9, name: "Scissors", img: "https://via.placeholder.com/140/ea580c/fff?text=Scissors" },
];

const PopularCategories = () => {
  return (
    <section className="popular-categories">
      <h2>Popular Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="categry-card">
            <div className="category-image">
              <img src={category.img} alt={category.name} />
            </div>
            <p className="category-name">{category.name}</p>
            <a href="#" className="view-all">View All</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;