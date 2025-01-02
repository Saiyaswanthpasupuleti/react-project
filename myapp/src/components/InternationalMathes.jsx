import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./css/InternationalMatches.css";
import BootSpinner from './spinner'; // Importing the spinner component

export default function InternationalMatches() {
  const [intmatches, setIntmatches] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const handleInternational = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule-international',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setIntmatches(response.data.response.schedules);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error as well
      }
    };
    handleInternational();
  }, []);

  return (
    <div className="shared-container">
      <h1 className="text-center mb-4" style={{ color: "#28a745", fontWeight: "bold" }}>
        International Matches 🏏
      </h1>
      <div className="custom-grid">
        {loading ? (
          <BootSpinner /> // Show spinner while loading
        ) : (
          intmatches.map((a, index) => (
            <div key={index} className="custom-card">
              <div className="card-body">
                <h4 className="card-title" style={{ color: "#28a745" }}>{a.date}</h4>
                {a.matchList.map((b, idx) => (
                  <div key={idx} className="series-info">
                    <p className="card-subtitle text-success">{b.seriesName}</p>
                    {b.seriesList?.map((c, id) => (
                      <div key={id}>
                        <p className="text-light">
                          <strong>Series:</strong> {c.seriesName}
                        </p>
                        <p className="text-light">
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
