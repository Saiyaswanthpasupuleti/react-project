import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./css/Matches.css";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        setSchedules(response.data.response.schedules); // Assuming this is correct
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div
      className="schedule-container"
      style={{
        padding: "20px",
        display: "flex",
        height: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      {/* Navigation Buttons */}
      {/* <button
        className="home-button"
        onClick={() => navigate("/home")}
        style={{ position: "absolute", top: "20px", left: "20px" }}
      >
        Home
      </button>
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      >
        Back
      </button> */}

      {/* Heading */}
      <h3
        className="text-center mb-4 text-success"
        style={{ color: "green", fontWeight: "bold" }}
      >
        Welcome to Schedule Page 🏏
      </h3>

      {/* Links to Different Match Categories */}
      <Link to="internationalmatches" className="match-card upcoming-matches">
        International Matches
      </Link>
      <Link to="domesticmatches" className="match-card upcoming-matches">
        Domestic Matches
      </Link>
      <Link to="leaguematches" className="match-card upcoming-matches">
        League Matches
      </Link>
      <Link to="womenmatches" className="match-card upcoming-matches">
        Women Matches
      </Link>
    </div>
  );
}
