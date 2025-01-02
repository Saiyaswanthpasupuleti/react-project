import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/WomenMatches.css'; // Import the CSS file
import BootSpinner from './spinner';

export default function WomenMatches() {
  const [women, setWomen] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

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
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching women matches:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    handleWomenMatch();
  }, []);

  return (
    <div className="shared-container" style={{backgroundColor:"black"}}>
      <h1 className="custom-grid-heading">Women Matches 🏏</h1>
      <div className="custom-grid">
        {loading ? (
          <div className="spinner-container">
            {/* Add your spinner here if needed */}
          <BootSpinner/>
          </div>
        ) : (
          women.map((a, index) => (
            <div key={index} className="custom-card">
              <div className="card-body">
                <h4 className="card-title">{a.date}</h4>
                {a.matchList.map((b, idx) => (
                  <div key={idx} className="series-info">
                    <p className="card-subtitle text-success">{b.seriesName}</p>
                    {b.seriesList.map((c, id) => (
                      <div key={id}>
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
