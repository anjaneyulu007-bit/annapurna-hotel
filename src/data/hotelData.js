// data/hotelData.js
export const hotelData = {
  name: "ANNAPURNA",
  tagline: "Luxury Hotel & Resort",
  description: "Experience unparalleled luxury in the heart of the city",
  contact: {
    address: "123 Luxury Street, City Center, 50000 Kuala Lumpur, Malaysia",
    phone: "+603-1234 5678",
    email: "info@annapurnahotel.com",
    reservationEmail: "reservations@annapurnahotel.com"
  },
  social: {
    facebook: "https://facebook.com/annapurnahotel",
    instagram: "https://instagram.com/annapurnahotel",
    twitter: "https://twitter.com/annapurnahotel"
  }
};

export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    category: "Standard",
    price: 350,
    size: "35",
    guests: 2,
    beds: "1 King Bed",
    description: "Elegant room with comfortable king-sized bed and stunning city views. Perfect for business travelers and couples.",
    features: [
      "City View",
      "Free WiFi", 
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Coffee Maker",
      "Safe",
      "Work Desk"
    ],
    images: [
      "/images/rooms/deluxe-1.jpg",
      "/images/rooms/deluxe-2.jpg",
      "/images/rooms/deluxe-3.jpg"
    ]
  },
  {
    id: 2,
    name: "Executive Suite",
    category: "Suite",
    price: 550,
    size: "55",
    guests: 3,
    beds: "1 King Bed + Sofa Bed",
    description: "Spacious suite with separate living area, perfect for extended stays or working travelers.",
    features: [
      "Separate Living Area",
      "City View",
      "Free WiFi",
      "Premium Toiletries",
      "Work Desk",
      "Mini Bar",
      "Coffee Maker",
      "Safe"
    ],
    images: [
      "/images/rooms/executive-1.jpg",
      "/images/rooms/executive-2.jpg",
      "/images/rooms/executive-3.jpg"
    ]
  },
  {
    id: 3,
    name: "Presidential Suite",
    category: "Luxury",
    price: 850,
    size: "85",
    guests: 4,
    beds: "1 King Bed + 2 Single Beds",
    description: "The ultimate luxury experience with panoramic city views, private jacuzzi, and personalized butler service.",
    features: [
      "Panoramic City View",
      "Private Jacuzzi",
      "Butler Service",
      "Dining Area",
      "Premium Bar",
      "2 Bathrooms",
      "Walk-in Closet",
      "Private Balcony"
    ],
    images: [
      "/images/rooms/presidential-1.jpg",
      "/images/rooms/presidential-2.jpg",
      "/images/rooms/presidential-3.jpg"
    ]
  },
  {
    id: 4,
    name: "Family Room",
    category: "Family",
    price: 450,
    size: "45",
    guests: 4,
    beds: "2 Queen Beds",
    description: "Perfect for families with connecting rooms option and child-friendly amenities.",
    features: [
      "Connecting Rooms Available",
      "Kids Amenities",
      "Game Console",
      "Family TV",
      "Mini Refrigerator",
      "Baby Cot Available",
      "Child Safety Features",
      "Board Games"
    ],
    images: [
      "/images/rooms/family-1.jpg",
      "/images/rooms/family-2.jpg",
      "/images/rooms/family-3.jpg"
    ]
  }
];

export const amenities = [
  {
    category: "Dining",
    items: [
      {
        name: "Saffron Restaurant",
        description: "International buffet and à la carte dining with live cooking stations",
        icon: "🍽️",
        hours: "6:00 AM - 11:00 PM",
        images: ["/images/amenities/restaurant-1.jpg", "/images/amenities/restaurant-2.jpg"]
      },
      {
        name: "Sky Bar & Lounge",
        description: "Rooftop bar with panoramic city views and signature cocktails",
        icon: "🍸",
        hours: "5:00 PM - 1:00 AM",
        images: ["/images/amenities/bar-1.jpg", "/images/amenities/bar-2.jpg"]
      },
      {
        name: "Mountain View Coffee Lounge",
        description: "Premium coffee, teas, and pastries in a relaxed setting",
        icon: "☕",
        hours: "7:00 AM - 10:00 PM",
        images: ["/images/amenities/coffee-1.jpg", "/images/amenities/coffee-2.jpg"]
      }
    ]
  },
  {
    category: "Wellness & Recreation",
    items: [
      {
        name: "Infinity Pool",
        description: "Stunning rooftop pool with city skyline views and poolside service",
        icon: "🏊",
        hours: "7:00 AM - 9:00 PM",
        images: ["/images/amenities/pool-1.jpg", "/images/amenities/pool-2.jpg"]
      },
      {
        name: "Serenity Spa",
        description: "Full-service spa offering massages, treatments, and wellness therapies",
        icon: "💆",
        hours: "9:00 AM - 9:00 PM",
        images: ["/images/amenities/spa-1.jpg", "/images/amenities/spa-2.jpg"]
      },
      {
        name: "Peak Fitness Center",
        description: "24/7 gym with modern equipment, personal trainers, and yoga classes",
        icon: "🏋️",
        hours: "24 Hours",
        images: ["/images/amenities/gym-1.jpg", "/images/amenities/gym-2.jpg"]
      }
    ]
  },
  {
    category: "Services & Facilities",
    items: [
      {
        name: "24-Hour Concierge",
        description: "Personalized service for dining reservations, tours, and transportation",
        icon: "🛎️",
        hours: "24 Hours",
        images: ["/images/amenities/concierge-1.jpg"]
      },
      {
        name: "Business Center",
        description: "Meeting rooms, conference facilities, and business services",
        icon: "💼",
        hours: "7:00 AM - 10:00 PM",
        images: ["/images/amenities/business-1.jpg", "/images/amenities/business-2.jpg"]
      },
      {
        name: "Valet Parking",
        description: "Complimentary valet service with secure underground parking",
        icon: "🚗",
        hours: "24 Hours",
        images: ["/images/amenities/parking-1.jpg"]
      }
    ]
  }
];

export const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg"
];

// Fallback images from Unsplash
export const fallbackImages = {
  hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  standard: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  suite: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  luxury: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  family: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  pool: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  default: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
};