import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos';
import BootSpinner from './spinner';
import './css/LeaugeListTeam.css'; // Import the CSS file

export default function LeaugeListTeam() {
  const [leauge, Setleauge] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleTeams = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-teams-league',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        Setleauge(response.data.response); // Ensure to set the correct data
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Stop loading when data is fetched
      }
    };

    handleTeams();
  }, []);

  return (
    <div className="team-list-container">
              <h1 className="intl-matches-heading">League Teams 🏏</h1>

      

      {isLoading ? (
        <div className="spinner-container">
          <BootSpinner /> {/* Show spinner while loading */}
        </div>
      ) : (
        <div className="team-card-wrapper">
          {leauge.map((a, index) => (
            <div key={index} className="team-card">
              <ShapeExample image={a.image} />
              <p className="team-name">{a.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
