import React from 'react';
import { amenities } from '../data/hotelData';
import ImageLoader from '../components/ImageLoader';
import '../styles/Amenities.css';

function Amenities() {
  return (
    <div className="amenities-page">
      <section className="amenities-hero">
        <div className="container">
          <h1>Hotel Amenities</h1>
          <p>Discover our world-class facilities and services designed for your comfort</p>
        </div>
      </section>

      <section className="amenities-detail section">
        <div className="container">
          {amenities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="amenity-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="category-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="amenity-detail-item">
                    <div className="amenity-images">
                      <ImageLoader 
                        src={item.images[0]} 
                        fallbackKey={item.name.toLowerCase().includes('pool') ? 'pool' : 
                                   item.name.toLowerCase().includes('spa') ? 'spa' :
                                   item.name.toLowerCase().includes('fit') ? 'gym' :
                                   item.name.toLowerCase().includes('restaurant') ? 'restaurant' : 'hero'}
                        alt={item.name}
                        className="amenity-main-image"
                      />
                    </div>
                    
                    <div className="amenity-detail-content">
                      <div className="amenity-header">
                        <div className="amenity-detail-icon">{item.icon}</div>
                        <div>
                          <h1>{item.name}</h1>
                          <p className="amenity-hours">{item.hours}</p>
                        </div>
                      </div>
                      
                      <p className="amenity-description">{item.description}</p>
                      
                      <div className="amenity-features">
                        {item.features && item.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="feature-badge">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services section">
        <div className="container">
          <h2 className="section-title">Additional Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>Airport Transfer</h3>
              <p>Complimentary airport pickup and drop-off service for all guests</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">👶</div>
              <h3>Child Care</h3>
              <p>Professional babysitting services and child-friendly amenities</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🐕</div>
              <h3>Pet Friendly</h3>
              <p>Special accommodations and amenities for your furry friends</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Business Services</h3>
              <p>Printing, scanning, and secretarial services available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Amenities;