import React from 'react';
import "./Footer.css"
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="container newsletter-container">
          <div className="newsletter-left">
            <h2>Subscribe & Get $20 Off Your First Order</h2>
            <p>
              Sign up for our newsletter and be the first to know about new tools,
              offers, and promotions.
            </p>
          </div>

          <div className="newsletter-right">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-column brand">
            <h2 className="logo">TOOLBOX</h2>
            <p>
              Shop No 6, Ibrahim Tower, Station Road,
              <br />
              Bhayander (W), Maharashtra, 400064
            </p>

            <a href="#" className="map-link">View on Map</a>

            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Customer Support</h4>
            <p><FaPhoneAlt /> +00 123-456-789</p>
            <p><FaEnvelope /> support@toolpart.com</p>
            <p><FaClock /> Mon-Fri: 9:00-18:00</p>
          </div>

          {/* Links */}
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
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Hammers</a></li>
              <li><a href="#">Drills</a></li>
              <li><a href="#">Safety Gear</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© 2026 TOOLPART | All Rights Reserved</p>

          <div className="payments">
            <img src="https://via.placeholder.com/50x30" alt="" />
            <img src="https://via.placeholder.com/50x30" alt="" />
            <img src="https://via.placeholder.com/50x30" alt="" />
          </div>

          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            <BsArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;