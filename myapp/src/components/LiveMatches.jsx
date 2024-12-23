import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner"; // Custom spinner component

export default function LiveMatches() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for spinner
  
  useEffect(() => {
    const fetchLiveMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://crickbuzz-official-apis.p.rapidapi.com/matches/live',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        // Assuming the structure has keys like typeMatches, seriesMatches
        setLiveMatches(response.data);
        setLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchLiveMatches();
  }, []);

  if (loading) {
    return <BootSpinner />; // Display spinner while loading
  }

  // Extract data from the response
  const { typeMatches = [], seriesMatches = [] } = liveMatches;

  return (
    <div className="container mt-4">
      <h3>Live Matches</h3>

      {typeMatches.length > 0 && (
        <div>
          <h4>Type Matches</h4>
          {typeMatches.map((match, index) => (
            <div key={index}>
              <h5>Match Type: {match.matchType}</h5>
              {/* Render match details here */}
              <p>{match.someMatchDetail}</p> {/* Replace with actual match details */}
            </div>
          ))}
        </div>
      )}

      {seriesMatches.length > 0 && (
        <div>
          <h4>Series Matches</h4>
          {seriesMatches.map((match, index) => (
            <div key={index}>
              <h5>Series Name: {match.seriesName}</h5> {/* Display series name */}
              <p>{match.someMatchDetail}</p> {/* Replace with actual match details */}
            </div>
          ))}
        </div>
      )}

      {/* Handle case where there are no live matches */}
      {!typeMatches.length && !seriesMatches.length && (
        <p>No live matches available at the moment.</p>
      )}
    </div>
  );
}
