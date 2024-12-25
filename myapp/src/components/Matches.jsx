import React from "react";
import { Link } from "react-router-dom";
import './css/Matches.css'; 
import NavigationBar from "./navbar";

export default function Matches() {
  return (
    <div className="match-card-container">
      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100vh"}}>
      <h1  className="text-success">Matches 🏏</h1>
  
  <Link to="Upcomingmatches" className="match-card upcoming-matches">
          Upcoming Matches
        </Link>

      </div>




      
    </div>
  );
}
