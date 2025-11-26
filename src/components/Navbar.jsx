import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import BookNow from './BookNow';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="brand-section">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-main">ANNAPURNA</span>
            <span className="brand-sub">HOTEL</span>
          </Link>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <div className="main-nav">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/rooms" onClick={() => setIsMenuOpen(false)}>Rooms & Suites</Link>
            <Link to="/amenities" onClick={() => setIsMenuOpen(false)}>Amenities</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <BookNow />
          </div>
                      {/* Search/Additional section */}

          </div>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;