import React, { useState } from "react";
import Upcomingmatches from "./Upcomingmatches";
import BasicExample from "./BCards";
import { Route, Routes } from "react-router-dom";
import LiveMatches from "./LiveMatches";

export default function Matches() {
  
  
  

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",gap:"20px"}}>
      <BasicExample title="Upcoming Matches" src="https://www.shutterstock.com/image-vector/upcoming-colorful-letters-banner-260nw-1196478868.jpg" text="Upcoming matches" link="Upcomingmatches"/>  
      <BasicExample title="Live Matches" src="https://dailycricket.com.bd/live.jpg" text="Live matches" link="livematches"/>

      
      <Routes>
        <Route path="Upcomingmatches" element={<Upcomingmatches/>}></Route>
        <Route path="livematches" element={<LiveMatches/>}></Route>
        
      </Routes>
      
     
    </div>
  );
}
