import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import { Link } from "react-router-dom";

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const handleSeries = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-series",
        headers: {
          "x-rapidapi-key": "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setSeries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    handleSeries();
  }, []);

  return (
    <div className="series-container" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",gap:"30px",backgroundColor:"black",height:"100vh"}}>

<h3 className="text-center text-light mb-4 upcoming-title">Cricket Series 🏏</h3>

<Link to="internationalseries" className="match-card upcoming-matches">
              International Series
            </Link>
            <Link to="domesticseries" className="match-card upcoming-matches">
              Domestic Series
            </Link>
            <Link to="leaguesseries" className="match-card upcoming-matches">
              Leagues Series
            </Link>
            <Link to="womenseries" className="match-card upcoming-matches">
              Women Series
            </Link>




           
    </div>
  );
}
