import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-container">
          <div className="newsletter-left">
            <h2>Subscribe & Get $20 Off Your First Order</h2>
            <p>Sign up for our newsletter and be the first to know about new tools, offers, and promotions.</p>
          </div>
          <div className="newsletter-right">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand & Info */}
          <div className="footer-column brand">
            <h2 className="footer-logo">TOOLPART</h2>
            <p>Shop No 6, Ibrahim Tower, Station Road,<br/>Bhayander (W), Maharashtra, 400064</p>
            <a href="#" className="map-link">View on Map</a>
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Customer Support */}
          <div className="footer-column">
            <h4>Customer Support</h4>
            <p><span>☎️</span> +00 123-456-789</p>
            <p><span>📧</span> support@toolpart.com</p>
            <p><span>⏰</span> Mon-Fri: 9:00-18:00, Sat: 9:00-14:00</p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Compare</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="footer-column">
            <h4>Popular Categories</h4>
            <ul>
              <li><a href="#">Hammers</a></li>
              <li><a href="#">Screwdrivers</a></li>
              <li><a href="#">Drills</a></li>
              <li><a href="#">Safety Gear</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2026 TOOLPART | All Rights Reserved | Powered by Shopify</p>
          <div className="payments">
            <img src="https://via.placeholder.com/50x30/000/fff?text=VISA" alt="Visa" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=MC" alt="Mastercard" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=AMEX" alt="Amex" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=PAY" alt="PayPal" />
            <img src="https://via.placeholder.com/50x30/000/fff?text=APPLE" alt="Apple Pay" />
          </div>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><BsArrowUp /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;