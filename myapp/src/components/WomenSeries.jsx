import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BootSpinner from './spinner';
import './css/WomenSeries.css'; // Assuming you will place this CSS file here

export default function WomenSeries() {
  const [womenSeries, SetWomenSeirs] = useState([]);

  useEffect(() => {
    const handleWomenSeries = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-series-women',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        SetWomenSeirs(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    handleWomenSeries();
  }, []);

  return (
    <div className="shared-container" style={{ backgroundColor: 'black' }}>
      <h1 className="text-center mb-4 text-success" style={{ fontWeight: 'bold' }}>
        Women Series 🏏
      </h1>
      <div className="custom-grid">
        {womenSeries.length === 0 ? (
          <BootSpinner />
        ) : (
          womenSeries.map((a, index) => (
            <div key={index} className="custom-card">
              <div className="card-body">
                <h4 className="card-title">{a.date}</h4>
                {a.seriesList.map((b, idx) => (
                  <div key={idx} className="series-info">
                    <p className="card-subtitle text-success">{b.seriesName}</p>
                    <p className="text-light">
                      
                      <strong>Series Date:</strong> {b.seriesDate}
                      
                    </p>
                    
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
