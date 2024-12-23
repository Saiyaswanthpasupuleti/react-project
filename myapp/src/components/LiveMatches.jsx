import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner";
import Accordion from 'react-bootstrap/Accordion';

export default function LiveMatches() {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-matches-live',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setLiveMatches(response.data.matches); // Adjust based on your API response structure
      } catch (error) {
        console.error(error);
      }
    };

    fetchLiveMatches();
  }, []);

  return (
    <div>
      <p>Live Matches</p>
      {liveMatches.length === 0 ? (
        <BootSpinner />
      ) : (
        <Accordion defaultActiveKey="0" flush>
          {liveMatches.map((match, index) => {
            return (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{match.matchInfo.matchName}</Accordion.Header>
                <Accordion.Body>
                  <h6>{match.seriesName}</h6>
                  <p>Format: {match.matchInfo.matchFormat}</p>
                  <p>Venue: {match.matchInfo.matchVenue}</p>
                  <p>Date: {match.matchInfo.matchDate}</p>
                  <p>Time: {match.matchInfo.matchTime}</p>
                  <p>Status: {match.matchStatus.status}</p>
                  {/* You can add more details if needed, depending on the API response */}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      )}
    </div>
  );
}
