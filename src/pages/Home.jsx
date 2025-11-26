import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { rooms, amenities } from '../data/hotelData';
import ImageLoader from '../components/ImageLoader';
import '../styles/Home.css';

function Home() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState('2025-11-25');
  const [checkOutDate, setCheckOutDate] = useState('2025-11-26');
  const [guestCount, setGuestCount] = useState(1);
  
  // Correct hero images array - remove './public' as React serves from public folder directly
  const heroImages = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg',
    '/images/hero/hero-5.jpg',
    '/images/hero/hero-6.jpg',
    '/images/hero/hero-7.jpg',
    '/images/hero/hero-8.jpg',
    '/images/hero/hero-9.jpg',
    '/images/hero/hero-10.jpg',
    '/images/hero/hero-11.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const featuredRooms = rooms.slice(0, 3);
  const featuredAmenities = amenities.flatMap(category => category.items).slice(0, 4);

  const handleGuestIncrement = () => {
    setGuestCount(prev => prev + 1);
  };

  const handleGuestDecrement = () => {
    setGuestCount(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleSearch = () => {
    // Handle search functionality
    console.log('Searching with:', { checkInDate, checkOutDate, guestCount });
  };

  return (
    <>
      {/* Hero Section with Property Search */}
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentHeroImage ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})` // Use image directly
              }}
            />
          ))}
        </div>
        
        {/* Property Search Section */}        

        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentHeroImage ? 'active' : ''}`}
              onClick={() => setCurrentHeroImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2 className="section-title">Welcome to ANNAPURNA HOTEL</h2>
              <p>
                Discover exceptional properties for your next stay. ANNAPURNA HOTEL offers 
                carefully selected accommodations with premium amenities and 
                outstanding service.
              </p>
              <p>
                Whether you're traveling for business or leisure, we provide the 
                perfect blend of comfort, convenience, and value.
              </p>
              <div className="welcome-stats">
                <div className="stat">
                  <h3>100+</h3>
                  <p>Properties</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Support</p>
                </div>
                <div className="stat">
                  <h3>4.8★</h3>
                  <p>Rating</p>
                </div>
              </div>
              <Link to="/properties" className="btn">Explore Properties</Link>
            </div>
            <div className="welcome-image">
              <ImageLoader 
                src="/images/general/lobby.jpg" 
                alt="MAPLEHOME Property"
                className="welcome-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-rooms section">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="rooms-grid">
            {featuredRooms.map(room => (
              <div key={room.id} className="room-card">
                <div className="room-image">
                  <ImageLoader 
                    src={room.images[0]} 
                    alt={room.name}
                    className="room-img"
                  />
                  <div className="room-overlay">
                    <span className="room-price">From RM {room.price}/night</span>
                  </div>
                </div>
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                  <div className="room-features">
                    <span>👥 {room.guests} Guests</span>
                    <span>📏 {room.size} m²</span>
                    <span>🛏️ {room.beds}</span>
                  </div>
                  <Link to="/rooms" className="btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/properties" className="btn btn-large">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="amenities-preview section">
        <div className="container">
          <h2 className="section-title">Property Amenities</h2>
          <div className="amenities-grid">
            {featuredAmenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3>{amenity.name}</h3>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/amenities" className="btn btn-secondary">Explore All Amenities</Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers section">
        <div className="container">
          <div className="offer-banner">
            <div className="offer-content">
              <h2>Weekend Special Offer</h2>
              <p>Enjoy 20% off on all property bookings for weekend stays. Limited time offer.</p>
              <Link to="/properties" className="btn">Book Now</Link>
            </div>
            <div className="offer-image">
              <ImageLoader 
                src="/images/general/special-offer.jpg"
                alt="Special Offer"
                className="offer-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;