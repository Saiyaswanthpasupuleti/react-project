import React, { useEffect, useState } from "react";
import axios from "axios";

import BootSpinner from "./spinner";
import "./css/InternationSeries.css"; // Ensure styles are imported

export default function InternationalSeries() {
  const [series, IntSeries] = useState([]);

  useEffect(() => {
    const handleSeries = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-series-international",
        headers: {
          "x-rapidapi-key": "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.response);
        IntSeries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    handleSeries();
  }, []);

  return (
    <div className="shared-container" style={{backgroundColor:"black"}}>
      <h1 className="text-center mb-4" style={{ color: "#28a745", fontWeight: "bold" }}>
       Welcome to International Series 🏏
      </h1>
      <div className="custom-grid">
        {series.length === 0 ? (
          <BootSpinner />
        ) : (
          series.map((a, index) => (
            <div key={index} className="custom-card">
              <div className="card-body">
                <h4 className="card-title" style={{color:"#28a745"}}>{a.date}</h4>
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
