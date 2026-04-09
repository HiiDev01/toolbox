import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    { icon: "📅", title: "Earliest Consultation", desc: "We respond within 2 hours and schedule same-day visits when possible." },
    { icon: "🔧", title: "Customized Solution", desc: "Every job is unique. We tailor our approach to your specific needs." },
    { icon: "💰", title: "Affordable Pricing", desc: "Transparent, upfront pricing with no hidden fees." },
    { icon: "🛠️", title: "All-in-One Service", desc: "From diagnosis to completion — one trusted team handles everything." },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose ToolBox?</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="contact-info">
          <p>📞 <strong>000 123 456 789</strong> — We're available 24/7 for emergencies</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;