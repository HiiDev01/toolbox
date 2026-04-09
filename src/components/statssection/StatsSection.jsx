import React from 'react';
import './StatsSection.css'

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">560+</div>
          <p>Projects Done</p>
        </div>
        <div className="stat-card">
          <div className="stat-number">180+</div>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <div className="stat-number">180+</div>
          <p>Tools & Equipment</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;