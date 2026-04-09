import React from 'react';
import './WhyWeAreBest.css'

const WhyWeAreBest = () => {
  return (
    <section className="why-best">
      <div className="container">
        <div className="why-best-grid">
          <div className="why-text">
            <div className="highlight-box">
              <h3>Why We Are Best</h3>
            </div>
            <p>We combine years of experience with professional-grade tools and a customer-first mindset.</p>
          </div>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <div>
                <strong>Licensed Technicians</strong>
                <p>Fully certified and insured professionals</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <div>
                <strong>Top Rated Service</strong>
                <p>Consistently 4.9+ star customer feedback</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏱️</div>
              <div>
                <strong>Timely Services</strong>
                <p>On-time arrival and efficient completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBest;