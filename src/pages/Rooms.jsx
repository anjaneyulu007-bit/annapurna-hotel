import React, { useState } from 'react';
import { rooms } from '../data/hotelData';
import ImageLoader from '../components/ImageLoader';
import '../styles/Rooms.css';

// Fallback images in case the main images don't load
const fallbackImages = {
  standard: '/images/rooms/deluxe-3.jpg',
  deluxe: '/images/rooms/deluxe-1.jpg',
  suite: '/images/rooms/executive-1.jpg',
  luxury: '/images/rooms/presidential-1.jpg',
  family: '/images/rooms/family-1.jpg'
};

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedRoom.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
      );
    }
  };

  // Function to get fallback image based on room category
  const getFallbackImage = (category) => {
    const categoryKey = category.toLowerCase();
    return fallbackImages[categoryKey] || fallbackImages.standard;
  };

  return (
    <div className="rooms-page">
      <section className="rooms-hero">
        <div className="container">
          <h1>Rooms & Suites</h1>
          <p>Discover our collection of beautifully appointed accommodations</p>
        </div>
      </section>

      <section className="rooms-list section">
        <div className="container">
          <div className="rooms-filter">
            <button className="filter-btn active">All Rooms</button>
            <button className="filter-btn">Standard</button>
            <button className="filter-btn">Suites</button>
            <button className="filter-btn">Luxury</button>
            <button className="filter-btn">Family</button>
          </div>

          <div className="rooms-grid-detailed">
            {rooms.map(room => (
              <div key={room.id} className="room-card-detailed">
                <div className="room-gallery">
                  <ImageLoader 
                    src={room.images[0]} 
                    fallbackSrc={getFallbackImage(room.category)}
                    alt={room.name}
                    className="room-main-image"
                  />
                  <div className="room-thumbnails">
                    {room.images.slice(0, 3).map((image, index) => (
                      <ImageLoader 
                        key={index}
                        src={image} 
                        fallbackSrc={getFallbackImage(room.category)}
                        alt={`${room.name} ${index + 1}`}
                        className="thumbnail"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="room-details">
                  <div className="room-header">
                    <h2>{room.name}</h2>
                    <div className="room-price">RM {room.price}<span>/night</span></div>
                  </div>
                  
                  <div className="room-specs">
                    <div className="spec">
                      <strong>Size:</strong> {room.size} m²
                    </div>
                    <div className="spec">
                      <strong>Guests:</strong> {room.guests} {room.guests > 1 ? 'People' : 'Person'}
                    </div>
                    <div className="spec">
                      <strong>Beds:</strong> {room.beds}
                    </div>
                    <div className="spec">
                      <strong>Category:</strong> {room.category}
                    </div>
                  </div>

                  <p className="room-description">{room.description}</p>

                  <div className="room-features-detailed">
                    <h4>Room Features</h4>
                    <div className="features-grid">
                      {room.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="room-actions">
                    <button className="btn btn-primary" onClick={() => openModal(room)}>
                      View Gallery
                    </button>
                    <button className="btn">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Modal */}
      {selectedRoom && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-gallery">
              <ImageLoader 
                src={selectedRoom.images[currentImageIndex]} 
                fallbackSrc={getFallbackImage(selectedRoom.category)}
                alt={selectedRoom.name}
                className="modal-main-image"
              />
              
              <button className="gallery-nav prev" onClick={prevImage}>‹</button>
              <button className="gallery-nav next" onClick={nextImage}>›</button>
              
              <div className="modal-thumbnails">
                {selectedRoom.images.map((image, index) => (
                  <ImageLoader 
                    key={index}
                    src={image} 
                    fallbackSrc={getFallbackImage(selectedRoom.category)}
                    alt={`${selectedRoom.name} ${index + 1}`}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="modal-info">
              <h2>{selectedRoom.name}</h2>
              <div className="modal-price">RM {selectedRoom.price}/night</div>
              <p>{selectedRoom.description}</p>
              
              <div className="modal-features">
                <h4>Features & Amenities</h4>
                <div className="features-list">
                  {selectedRoom.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>

              <button className="btn btn-large">Book This Room</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;