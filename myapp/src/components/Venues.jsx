import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos'; // Assuming this component displays images

export default function Venues() {
  const [venue, setVenue] = useState(null); // Initialize as null for better handling

  useEffect(() => {
    const handleVenue = async () => {
      const options = {
        method: 'GET',
        url: 'https://crickbuzz-official-apis.p.rapidapi.com/venue/51',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setVenue(response.data); // Set the response data directly
        console.log(response.data); // Debugging purpose
      } catch (error) {
        console.error(error);
      }
    };
    handleVenue();
  }, []);

  if (!venue) {
    return <p>Loading venue data...</p>; // Display loading message until data is fetched
  }

  return (
    <div>
      <h1>Welcome to Venues</h1>
      {/* Render venue information */}
      <p><strong>Country:</strong> {venue.country}</p>
      <p><strong>City:</strong> {venue.city}</p>
      <p><strong>Home Team:</strong> {venue.homeTeam}</p>
      <p><strong>Ground:</strong> {venue.ground}</p>
      <ShapeExample image={venue.imageUrl} /> {/* Assuming imageUrl is part of the response */}
    </div>
  );
}
