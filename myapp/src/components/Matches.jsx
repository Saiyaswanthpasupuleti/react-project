import React from "react";
import { Link } from "react-router-dom";

import './css/Matches.css';

export default function Matches() {
  return (
    <div className="match-card-container"  style={{ padding:"30px",display:"flex",height:"100vh",justifyContent:"space-between",alignItems:"center",flexDirection:"column" }}>
      {/* Content Wrapper */}
      <h1 className="text-light">Matches 🏏</h1>
      <div className="content-wrapper" style={{ display:"flex",height:"100vh",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column" }}>
        
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
  );
}
