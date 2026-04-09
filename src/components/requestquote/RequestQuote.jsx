import React, { useState } from 'react';
import './RequestQuote.jsx'

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="request-quote">
      <div className="container">
        <div className="quote-grid">
          <div className="quote-form">
            <h2>Request A Quote</h2>
            <form>
              <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              <select name="service" onChange={handleChange}>
                <option value="">Select Your Service Type</option>
                <option value="plumbing">Plumbing</option>
                <option value="ac">Air Condition</option>
                <option value="carpentry">Carpentry</option>
                <option value="electrical">Electrical</option>
              </select>
              <input type="text" name="location" placeholder="Office / Home Address" onChange={handleChange} />
              <button type="submit" className="btn-primary full-width">Get Service Quote</button>
            </form>
          </div>

          <div className="quote-image">
            <img 
              src="https://via.placeholder.com/420x520/1f2937/fff?text=Confident+Handyman" 
              alt="ToolBox Expert" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;