import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BootSpinner from './spinner'; // Importing the spinner component
import './css/DomesticMatches.css'; // Importing the CSS file

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
    <div className="shared-container" style={{ backgroundColor: 'black' }}>
      <h1 className="text-center mb-4" style={{ color: '#28a745', fontWeight: 'bold' }}>
        Domestic Matches 🏏
      </h1>
      <div className="custom-grid" style={{ backgroundColor: 'black' }}>
        {loading ? (
          <div className="spinner-container">
            <BootSpinner /> {/* Show spinner while loading */}
          </div>
        ) : (
          domestic.map((a, index) => (
            <div key={index} className="custom-card" style={{ backgroundColor: 'black' }}>
              <div className="card-body">
                <h4 className="card-title">{a.date}</h4>
                {a.matchList.map((b, idx) => (
                  <div key={idx} className="match-details">
                    <p className="card-subtitle text-success">{b.seriesName}</p>
                    {b.seriesList.map((c, id) => (
                      <div key={id} className="match-info">
                        <p className="text-light">
                          <strong>Match Title:</strong> {c.matchTitle}
                        </p>
                        <p className="text-light">
                          <strong>Venue:</strong> {c.venue}
                        </p>
                        <p className="text-success">
                          <strong>Date:</strong> {c.date}
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
