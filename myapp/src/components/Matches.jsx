import React from "react";
import { Link, useNavigate } from "react-router-dom";

import './css/Matches.css';

export default function Matches() {
  const navigate = useNavigate();

  return (
    <div className="match-card-container" style={{ padding: "30px", display: "flex", height: "100vh", justifyContent: "space-between", alignItems: "center", flexDirection: "column" }}>
      {/* Back Button */}
      <button 
        className="back-button" 
        onClick={() => navigate(-1)} 
        style={{ position: "absolute", top: "20px", right: "20px" }}
      >
        Back
      </button>
      <div>
{/* Content Wrapper */}

      <div className="content-wrapper" style={{ display: "flex", height: "100vh", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
      <h1 className="text-success">Welcome to Matches Page 🏏</h1>
        <Link to="livematches" className="match-card upcoming-matches">
          Live Matches
        </Link>
        <Link to="recentmatches" className="match-card upcoming-matches">
          Recent Matches
        </Link>
        <Link to="Upcomingmatches" className="match-card upcoming-matches">
          Upcoming Matches
        </Link>
      </div>
      
      </div>
    </div>
  );
}
