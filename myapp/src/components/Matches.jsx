import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom";
import Upcomingmatches from "./Upcomingmatches";
import LiveMatches from "./LiveMatches";
import BasicExample from "./BCards";

export default function Matches() {
  return (
  
      <div>
      
      {/* <Link className="link" to="Upcomingmatches" style={{ textDecoration: 'none', color: 'green', marginRight: '15px' }}>
    Upcoming Matches
  </Link>         */}
  {/* <BasicExample title="Upcoming matches" text="Upcoming" src="https://www.shutterstock.com/image-vector/upcoming-colorful-letters-banner-260nw-1196478868.jpg" link="Upcomingmatches"/> */}
   
    

        {/* <Routes> */}
        {/* <Route path="Upcomingmatches" element={<Upcomingmatches />} />

          <Route path="Upcomingmatches" element={<Upcomingmatches />} /> */}
          {/* <Route path="livematches" element={<LiveMatches />} /> */}
        {/* </Routes>  */}
        <Upcomingmatches/>
        {/* <Outlet/> */}
      </div>

  );
}
