import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner";
import "./css/DomesticSeries.css"; // CSS file aligned with InternationalSeries

export default function Domestic() {
  const [domSeries, SetDomSeries] = useState([]);

  useEffect(() => {
    const handleDomestic = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-series-domestic",
        headers: {
          "x-rapidapi-key": "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.response);
        SetDomSeries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    handleDomestic();
  }, []);

  return (
    <div className="shared-container" style={{backgroundColor:"black"}}>
      <h1 className="text-center mb-4 text-success" style={{  fontWeight: "bold" }}>
        Domestic Series 🏏
      </h1>
      <div className="custom-grid" >
        {domSeries.length === 0 ? (
          <BootSpinner />
        ) : (
          domSeries.map((a, index) => (
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
