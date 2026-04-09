import React from "react";
import "./TrustBar.css"




const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="trust-item">
        <span className="icon">
          <img src="/shipped.png" alt="truckImg-illus" />
        </span>
        <div>
          <strong>Free Shipping</strong>
          <p>Free Shipping for orders $199</p>
        </div>
      </div>
      <div className="trust-item">
        <span className="icon">
          <img src="/gift.png" alt="giftbox" />
        </span>
        <div>
          <strong>Returns Policy</strong>
          <p>Within 30 days for an exchange</p>
        </div>
      </div>
      <div className="trust-item">
        <span className="icon">
          <img src="/headset.png" alt="headset" />
        </span>
        <div>
          <strong>Online Support</strong>
          <p>24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div className="trust-item">
        <span className="icon">
          <img src="/smartphone.png" alt="phone" />
        </span>
        <div>
          <strong>Flexible Payment</strong>
          <p>Pay with Multiple Credit cards</p>
        </div>
      </div>
      <div className="trust-item">
        <span className="icon">
          <img src="credit-card.png" alt="card" />
        </span>
        <div>
          <strong>Using For Card</strong>
          <p>Free Shipping for orders over $20</p>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;