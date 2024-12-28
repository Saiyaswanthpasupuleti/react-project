import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos';
import BootSpinner from './spinner';
import './css/WomenTeamList.css'; // Import the CSS file for styling

export default function WomenTeamList() {
  const [team, SetTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const handleWomensTeam = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-teams-women',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        SetTeam(response.data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Stop loading when data is fetched
      }
    };

    handleWomensTeam();
  }, []);

  return (
    <div className="team-list-container" style={{backgroundColor:"black"}}>
  
      <h1 className="intl-matches-heading text-success">Womens Teams 🏏</h1>


      {isLoading ? (
        <div className="spinner-container">
          <BootSpinner /> {/* Show spinner while loading */}
        </div>
      ) : (
        <div className="team-card-wrapper">
          {team.map((a, index) => (
            <div key={index} className="team-card" style={{backgroundColor:"black"}}>
              <ShapeExample image={a.image} />
              <p className="team-name text-light">{a.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
