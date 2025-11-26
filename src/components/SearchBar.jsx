import React, { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar() {
  const [guests, setGuests] = useState(1);

  return (
    <div className="search-wrapper">
      <div className="search-bar">

        {/* PROPERTY */}
        <div className="search-item">
          <span className="icon">🔍</span>
          <select>
            <option>Select a property</option>
            <option>Annapurna Hotel</option>
            <option>Luxury Suites</option>
          </select>
        </div>

        {/* CHECKIN */}
        <div className="search-item">
          <span className="icon">📅</span>
          <input type="date" />
        </div>

        {/* CHECKOUT */}
        <div className="search-item">
          <span className="icon">➡</span>
          <input type="date" />
        </div>

        {/* GUESTS */}
        <div className="search-item guests">
          <span className="icon">👤</span>
          <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
          <span>{guests}</span>
          <button onClick={() => setGuests(guests + 1)}>+</button>
        </div>

        {/* SEARCH BUTTON */}
        <button className="search-btn">Search</button>

      </div>
    </div>
  );
}
