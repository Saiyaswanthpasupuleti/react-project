import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/LeaugeMatch.css'; // Make sure this CSS file is linked correctly
import BootSpinner from './spinner';

export default function Leaugematches() {
  const [leauge, Setleauge] = useState([]);

  useEffect(() => {
    const handleLeauge = async () => {
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
        console.log(response.data.response.schedules);
        Setleauge(response.data.response.schedules);
      } catch (error) {
        console.error(error);
      }
    };

    handleLeauge();
  }, []);

  return (
    <div className="intl-match-card-container">
      <h1 className="intl-matches-heading">League Matches 🏏</h1>

      {/* Display Spinner if loading */}
      {!leauge.length ? (
        <BootSpinner/>
      ) : (
        <div className="intl-card-wrapper">
          {leauge.map((a, index) => {
            return (
              <div key={index} className="intl-match-card">
                <p>{a.date}</p>

                {a.matchList.map((b, indexB) => {
                  return (
                    <div key={indexB} className="intl-match-details">
                      <p className="intl-match-title">{b.seriesName}</p>
                      {b.seriesList.map((c, indexC) => {
                        return (
                          <div key={indexC} className="intl-series-info">
                            <h4>Format:</h4>
                            <p>{c.matchFormat}</p>

                            <h4>Match Title:</h4>
                            <p>{c.matchTitle}</p>

                            <h4>Series Name:</h4>
                            <p>{c.seriesName}</p>

                            <h4>Venue:</h4>
                            <p className="intl-match-venue">{c.venue}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
