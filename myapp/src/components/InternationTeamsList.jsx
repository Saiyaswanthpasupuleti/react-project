import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/InternationTeamsList.css'; // Import the CSS file
import ShapeExample from './Playes-Images-photos';
import BootSpinner from './spinner'; // Spinner component

export default function InternationTeamsList() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const handleTeams = async () => {
        const options = {
            method: 'GET',
            url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-teams',
            headers: {
              'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
              'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com'
            }
          };

      try {
        const response = await axios.request(options);
        console.log(response.data.response);
        setTeam(response.data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Stop the spinner when data is fetched
      }
    };

    handleTeams();
  }, []);

  return (
    <div className="team-list-container">
         <h1 className="intl-matches-heading">International Teams</h1>
     
      {isLoading ? (
        <div className="spinner-container">
          <BootSpinner /> {/* Show spinner while loading */}
        </div>
      ) : (
        <div className="team-card-wrapper">
          {team.map((teamItem, index) => (
            <div key={index} className="team-card">
              <ShapeExample image={teamItem.image} />
              <p className="team-name">{teamItem.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
