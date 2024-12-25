import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/WomenMatches.css';

export default function WomenMatches() {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    const handleWomenMatch = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule-women',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setWomen(response.data.response.schedules || []);
      } catch (error) {
        console.error('Error fetching women matches:', error);
      }
    };

    handleWomenMatch();
  }, []);

  return (
    <div className="women-matches-container">
      <h1 className="women-matches-heading">Women Matches 🏏</h1>
      <div className="women-card-wrapper">
        {women.map((a, index) => (
          <div key={index} className="women-match-card">
            <p>{a.date}</p>
            <div className="series-list">
              {a.matchList.map((b, idx) => (
                <div key={idx} className="women-match-details">
                  <p className="women-match-title">{b.seriesName}</p>
                  {b.seriesList.map((c, idz) => (
                    <div key={idz}>
                      <p>Format: {c.matchFormat}</p>
                      <p>Match Title: {c.matchTitle}</p>
                      <p>Series Name: {c.seriesName}</p>
                      <p>Venue: {c.venue}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
