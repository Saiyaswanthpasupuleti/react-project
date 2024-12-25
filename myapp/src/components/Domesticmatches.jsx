import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BootSpinner from './spinner'; // Importing the spinner component
import "./css/DomesticMatches.css"; // Importing the CSS file

export default function Domesticmatches() {
  const [domestic, setDomestic] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const handleDomestic = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule-domestic',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setDomestic(response.data.response.schedules);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error as well
      }
    };
    handleDomestic();
  }, []);

  return (
    <div className="domestic-match-container">
      <h1 className="domestic-heading">Domestic Matches 🏏</h1>
      <div className="domestic-match-wrapper">
        {loading ? (
          <div className="spinner-container">
            <BootSpinner /> {/* Show spinner while loading */}
          </div>
        ) : (
          domestic.map((a, index) => (
            <div key={index} className="domestic-match-card">
              <p className="match-date">Date: {a.date}</p>
              {a.matchList.map((b, idx) => (
                <div key={idx} className="match-details">
                  <p className="match-series">{b.seriesName}</p>
                  {b.seriesList.map((c, id) => (
                    <div key={id} className="match-series-info">
                      <p className="match-title">Match Title: {c.matchTitle}</p>
                      <p className="match-venue">Venue: {c.venue}</p>
                      <p className="match-date">Date: {c.date}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
