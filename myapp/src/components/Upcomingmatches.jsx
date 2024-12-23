import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner";
import Accordion from 'react-bootstrap/Accordion';

export default function Upcomingmatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-matches-upcoming',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setMatches(response.data.response); // Assuming 'response' is the correct field
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <p>Upcoming Matches</p>
      {matches.length === 0 ? (
        <BootSpinner />
      ) : (
        <Accordion defaultActiveKey="0" flush>
          {matches.map((match, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{match.matchList[0].matchTitle}</Accordion.Header>
              <Accordion.Body>
                <h6>{match.seriesName}</h6>
                <p>Format: {match.matchList[0].matchFormat}</p>
                <p>Venue: {match.matchList[0].matchVenue}</p>
                <p>Date: {match.matchList[0].matchDate}</p>
                <p>Time: {match.matchList[0].matchTime}</p>
                <p>Status: {match.matchList[0].currentStatus}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
}
