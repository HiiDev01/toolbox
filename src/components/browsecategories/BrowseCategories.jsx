import { useState } from 'react';
import './BrowseCategories.css';

// List of categories
const categories = [
  { id: 'abrasives', title: 'Abrasives' },
  { 
    id: 'cutter-tools', 
    title: 'Cutter Tools', 
    hasChildren: true,
    children: ['End Mills', 'Drill Bits', 'Reamers', 'Taps']
  },
  { id: 'hammers', title: 'Hammers' },
  { id: 'nailers', title: 'Nailers' },
  { id: 'scissors', title: 'Scissors' },
  { id: 'washers', title: 'Washers' },
  { 
    id: 'power-tools', 
    title: 'Power Tools', 
    hasChildren: true,
    children: ['Cordless Drills', 'Grinders', 'Saws', 'Sanders']
  },
  { id: 'chargers', title: 'Chargers' },
  { id: 'impact-drills', title: 'Impact Drills' },
];

const BrowseCategories = () => {
  // State to keep track of which categories are open
  const [openItems, setOpenItems] = useState([]); // Using array for beginners

  // Function to open/close a category
  const toggleAccordion = (id) => {
    if (openItems.includes(id)) {
      // If already open, remove it from the array to close
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      // If closed, add it to the array to open
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="browse-categories">
      <div className="accordion">
        {categories.map((category) => {
          const isOpen = openItems.includes(category.id); // Check if this category is open

          return (
            <div 
              key={category.id}
              className={`accordion-item ${isOpen ? 'open' : ''}`}
            >
              {/* Category header */}
              <button 
                className="accordion-header"
                onClick={() => toggleAccordion(category.id)}
              >
                <span className="title">{category.title}</span>
                {/* Show "+" for categories with children */}
                {category.hasChildren && (
                  <span className={`arrow ${isOpen ? 'rotate' : ''}`}>+</span>
                )}
              </button>

              {/* Show child items if category is open */}
              {category.hasChildren && category.children && isOpen && (
                <div className="accordion-content">
                  <ul>
                    {category.children.map((child, index) => (
                      <li key={index}>{child}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseCategories;