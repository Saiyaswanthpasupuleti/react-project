import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Upcomingmatches from "./Upcomingmatches";
import LiveMatches from "./LiveMatches";

export default function Matches() {
  return (
  
      <div>
      
      <Link className="link" to="Upcomingmatches" style={{ textDecoration: 'none', color: 'green', marginRight: '15px' }}>
    Upcoming Matches
  </Link>        
      
       

        <Routes>
          <Route path="Upcomingmatches" element={<Upcomingmatches />} />
          <Route path="livematches" element={<LiveMatches />} />
        </Routes>
      </div>

  );
}
