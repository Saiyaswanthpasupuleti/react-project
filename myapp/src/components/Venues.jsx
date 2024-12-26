import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos'; // Assuming this component displays images
import BootSpinner from './spinner';
import './css/Venues.css'; // Import the styling

export default function Venues() {
  const [venue, setVenue] = useState([]); // Initialize as null for better handling

  useEffect(() => {
    const handleVenue = async () => {
      const options = {
        method: 'GET',
        url: 'https://cricket-live-line1.p.rapidapi.com/series/336/venues',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setVenue(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleVenue();
  }, []);

  if (!venue.length) {
    return <BootSpinner />; // Display loading spinner until data is fetched
  }

  return (
    <div className="venues-container">
      <h1 className="text-center mb-4 venues-title">Venues 🏏</h1>
      <div className="venues-list">
        {venue.map((a, index) => (
          <div key={index} className="venue-item">
            <ShapeExample image={a.image} />
            <p className="venue-name">Name: {a.name}</p>
            <p className="venue-place">Place: {a.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
