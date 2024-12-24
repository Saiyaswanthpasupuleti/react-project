import React from "react";
import { Link } from "react-router-dom";
import './css/Matches.css'; // Import the CSS file

export default function Matches() {
  return (
    <div className="match-card-container">
      {/* Upcoming Match Card */}
      <Link to="Upcomingmatches" className="match-card upcoming-matches">
        Upcoming Matches
      </Link>

      {/* Live Match Card */}
      <Link to="LiveMatches" className="match-card live-matches">
        Live Matches
      </Link>
    </div>
  );
}
