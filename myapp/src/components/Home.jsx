import React from "react";
import { Route, Routes } from "react-router-dom";
import Matches from "./Matches";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./navbar";
import Schedules from "./Schedules";
import Series from "./Series";
import Teams from "./Teams";
import Venues from "./Venues";
import Players from "./Players";
import News from "./News";
import Stats from "./Stats";
export default function Home() {
  return (
    <div>
        <NavigationBar/>
     
      <Routes>
        <Route path="matches" element={<Matches />} />
        <Route path="schedules" element={<Schedules/>}/>
        <Route path="series" element={<Series/>}/>
        <Route path="teams" element={<Teams/>}/>
        <Route path="venues" element={<Venues/>}/>
        <Route path="venues" element={<Venues/>}/>
        <Route path="players" element={<Players/>}/>
        <Route path="players" element={<Players/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="stats" element={<Stats/>}/>
      </Routes>
    </div>
  );
}
