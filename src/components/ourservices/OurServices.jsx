import React from 'react';
import "./OurServices.css"

const services = [
  {
    title: "Sanitary Plumbing",
    desc: "Leak repair, pipe installation, fixture replacement & drainage solutions.",
    image: "https://via.placeholder.com/380x280/3b82f6/fff?text=Plumbing"
  },
  {
    title: "Air Condition Installation",
    desc: "Expert AC installation, maintenance and repair services.",
    image: "https://via.placeholder.com/380x280/f59e0b/fff?text=AC+Installation"
  },
  {
    title: "Cabinet Making",
    desc: "Custom wooden cabinets, shelves, and furniture repair.",
    image: "https://via.placeholder.com/380x280/8b5cf6/fff?text=Cabinet"
  },
  {
    title: "Window Carpentry",
    desc: "Window frames, doors, and all kinds of woodwork.",
    image: "https://via.placeholder.com/380x280/ec4899/fff?text=Carpentry"
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="tag">OUR SERVICES</span>
            <h2>Ideal Solution For Time Consuming Problems</h2>
          </div>
          <div className="service-buttons">
            <button className="btn-secondary">Book A Service</button>
            <button className="btn-primary">View All Services</button>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;