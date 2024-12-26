import React, { useEffect, useState } from "react";
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
import Stats from "./Iccranking";
import axios from "axios";
import BootSpinner from "./spinner"; // Import the spinner component
import "./css/Home.css"; // Custom CSS for Home
import Iccranking from "./Iccranking";


export default function Home() {
  const [home, Sethome] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state to display any errors

  useEffect(() => {
    const handleHome = async () => {
      const options = {
        method: 'GET',
        url: 'https://crickbuzz-official-apis.p.rapidapi.com/home',
        headers: {
          'x-rapidapi-key': 'b14026a447msh4a37530d0a62e93p1932ffjsnb6244e35e7f8',
          'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log("API Response: ", response.data.homepage); // Log full response to inspect data
        // Check if the response has the expected data structure
        if (response.data.homepage && Array.isArray(response.data.homepage)) {
          Sethome(response.data.homepage); // Set the homepage data
        } else {
          throw new Error("Unexpected data structure.");
        }
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("API Error: ", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false); // Stop loading even if there's an error
      }
    };
    handleHome();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="matches/*" element={<Matches />} />
        <Route path="schedules/*" element={<Schedules />} />
        <Route path="series/*" element={<Series />} />
        <Route path="venues" element={<Venues />} />
        <Route path="players" element={<Players />} />
        <Route path="news" element={<News />} />
        <Route path="iccranking" element={<Iccranking/>} />
      </Routes>

      <div className="container mt-4">
        <h1 className="text-center mb-4">Latest News 🏏</h1>

        {loading ? (
          <div className="d-flex justify-content-center">
            <BootSpinner />
          </div>
        ) : error ? (
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
          </div>
        ) : (
          home.length > 0 ? (
            home.map((a, index) => (
              <div key={index} className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title text-success">{a.stories?.headline}</h4>
                  <p className="card-text">{a.stories?.context }</p>
                  <p className="card-text">
                    <small className="text-muted">{a.stories?.intro}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No data available to display.</p>
          )
        )}
      </div>
    </div>
  );
}
