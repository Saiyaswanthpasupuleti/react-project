import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/InternationSeries.css";
import BootSpinner from "./spinner";

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
    <div className="intl-match-card-container">
      <h1 className="intl-matches-heading">International Series</h1>
      <div className="intl-card-wrapper">
        {series.length === 0 ? (
          <BootSpinner/>
        ) : (
          series.map((a, index) => (
            <div key={index} className="intl-match-card">
              <div className="intl-series-info">
                <h4>{a.date}</h4>
              </div>
              {a.seriesList.map((b, idx) => (
                <div key={idx} className="intl-match-details">
                  <p className="intl-match-title">{b.seriesName}</p>
                  <p className="intl-match-venue">{b.seriesDate}</p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
