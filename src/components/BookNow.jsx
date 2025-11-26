// components/BookNow.js
import React, { useState } from 'react';
import '../styles/BookNow.css';

function BookNow() {
  const [showSearch, setShowSearch] = useState(false);
  const [checkInDate, setCheckInDate] = useState('2025-11-26');
  const [checkOutDate, setCheckOutDate] = useState('2025-11-27');
  const [guestCount, setGuestCount] = useState(1);
  const [stayType, setStayType] = useState('Standard');

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleGuestIncrement = () => {
    setGuestCount(prev => prev + 1);
  };

  const handleGuestDecrement = () => {
    setGuestCount(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleSearch = () => {
    console.log('Searching with:', { stayType, checkInDate, checkOutDate, guestCount });
    window.location.href = '/rooms';
  };

  // Handle date input change properly
  const handleDateChange = (type, value) => {
    if (type === 'checkIn') {
      setCheckInDate(value);
      // If check-out is before new check-in, adjust check-out
      if (new Date(value) > new Date(checkOutDate)) {
        const nextDay = new Date(value);
        nextDay.setDate(nextDay.getDate() + 1);
        setCheckOutDate(nextDay.toISOString().split('T')[0]);
      }
    } else {
      setCheckOutDate(value);
    }
  };

  return (
    <>
      {/* Book Now Button */}
      <div className="nav-book-now">
        <button className="book-now-btn" onClick={toggleSearch}>
          BOOK NOW
        </button>
      </div>

      {/* Search Dropdown */}
      {showSearch && (
        <div className="search-dropdown">
          <div className="search-dropdown-overlay" onClick={toggleSearch}></div>
          <div className="search-dropdown-content">
            <div className="search-header">
              <h3>Book Your Stay</h3>
              <button className="close-search" onClick={toggleSearch}>×</button>
            </div>
            
            <div className="search-form-centered">
              <div className="search-fields-container">
                {/* Stay Type Selection */}
                <div className="search-field-centered">
                  <label className="field-label-centered">STAY TYPE</label>
                  <select 
                    className="stay-type-select"
                    value={stayType}
                    onChange={(e) => setStayType(e.target.value)}
                  >
                    <option value="Standard">Standard</option>
                    <option value="Suites">Suites</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Family">Family</option>
                  </select>
                </div>

                {/* Date Selection Row */}
                <div className="date-selection-row">
                  {/* Check-in Field */}
                  <div className="date-field-group">
                    <label className="date-label">CHECK-IN</label>
                    <div className="date-input-wrapper">
                      <input 
                        type="date" 
                        value={checkInDate}
                        onChange={(e) => handleDateChange('checkIn', e.target.value)}
                        className="date-input-visible"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {/* Arrow Separator */}
                  <div className="arrow-separator">
                    <span>→</span>
                  </div>

                  {/* Check-out Field */}
                  <div className="date-field-group">
                    <label className="date-label">CHECK-OUT</label>
                    <div className="date-input-wrapper">
                      <input 
                        type="date" 
                        value={checkOutDate}
                        onChange={(e) => handleDateChange('checkOut', e.target.value)}
                        className="date-input-visible"
                        min={checkInDate}
                      />
                    </div>
                  </div>
                </div>

                {/* Guests Field */}
                <div className="search-field-centered">
                  <label className="field-label-centered">GUESTS</label>
                  <div className="guest-selector-centered">
                    <button 
                      type="button" 
                      className="guest-btn-centered"
                      onClick={handleGuestDecrement}
                    >
                      -
                    </button>
                    <span className="guest-count-centered">{guestCount}</span>
                    <button 
                      type="button" 
                      className="guest-btn-centered"
                      onClick={handleGuestIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Search Button */}
                <button className="search-now-btn-centered" onClick={handleSearch}>
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookNow;