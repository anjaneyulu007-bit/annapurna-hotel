import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ANNAPURNA HOTEL</h3>
            <p>Experience luxury and comfort in the heart of the city. Your perfect stay awaits at Annapurna Hotel.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms & Suites</Link>
            <Link to="/amenities">Amenities</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📍 123 Luxury Street, City Center</p>
            <p>📞 +91 9886744867</p>
            <p>✉️ info@annapurnahotel.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ANNAPURNA Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;