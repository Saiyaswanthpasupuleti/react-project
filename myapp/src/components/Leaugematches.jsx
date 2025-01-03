import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/LeaugeMatch.css'; // Link the CSS file
import BootSpinner from './spinner'; // Assuming you have this spinner component

export default function Leaugematches() {
  const [leauge, Setleauge] = useState([]);

  useEffect(() => {
    const fetchLeagueMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule-league',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        Setleauge(response.data.response.schedules);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeagueMatches();
  }, []);

  return (
    <div className="shared-container" style={{backgroundColor:"black"}}>
      <h1 className="league-matches-heading text-success">League Matches 🏏</h1>
      <div className="custom-grid">
        {!leauge.length ? (
          <BootSpinner /> // Show spinner while loading
        ) : (
          leauge.map((a, index) => (
            <div key={index} className="custom-card">
              <div className="card-body">
                <h4 className="card-title">{a.date}</h4>
                {a.matchList.map((b, indexB) => (
                  <div key={indexB} className="series-info">
                    <p className="card-subtitle text-success">{b.seriesName}</p>
                    {b.seriesList.map((c, indexC) => (
                      <div key={indexC} className="match-details">
                        <p className="text-light">
                          <strong className='text-success'>Format:</strong> {c.matchFormat}
                        </p>
                        <p className="text-light">
                          <strong className='text-success'>Match Title:</strong> {c.matchTitle}
                        </p>
                        <p className="text-light">
                          <strong className='text-success'>Venue:</strong> {c.venue}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
