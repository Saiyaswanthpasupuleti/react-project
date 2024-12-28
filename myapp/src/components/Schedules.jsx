import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule",
        headers: {
          "x-rapidapi-key":
            "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setSchedules(response.data.response.schedules); // Assuming 'response' is the correct field
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div className="schedule-container" style={{ padding: "20px",display:"flex",height:"100vh",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column",backgroundColor:"black" }}>
      <h3
        className="text-center mb-4 text-success" 
        style={{ color: "green", fontWeight: "bold" }}
      >
       Welcome to Scheduled Matches Page 🏏
      </h3>
     
      <Link to="internationalmatches" className="match-card upcoming-matches">
        International Matches
      </Link>
      <Link to="domesticmatches" className="match-card upcoming-matches">
        Domestic Matches
      </Link>
      <Link to="leaugematches" className="match-card upcoming-matches">
        Leauge Matches
      </Link>
      <Link to="womenmatches" className="match-card upcoming-matches">
        Women Matches
      </Link>
    </div>
  );
}
