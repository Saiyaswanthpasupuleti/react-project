import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BootSpinner from './spinner';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/LiveMatches.css';

export default function LivesMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-matches-live',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
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
    <div className="upcoming-matches-container" style={{backgroundColor:"black"}}>
      
      <h3 className="text-center mb-4" style={{ color: "#28a745", fontWeight: 'bold' }}>
      Welcome to Live Matches Page 🏏
      </h3>
      {matches.length === 0 ? (
        <BootSpinner />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {matches.map((match, index) => (
            match.matchList &&
            match.matchList.length > 0 &&
            match.matchList.map((matchItem, itemIndex) => (
              <Col key={itemIndex}>
                <Card className="h-100 upcoming-matches">
                  <Card.Body>
                    <Card.Title>
                      {matchItem.matchTitle}
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                      {match.seriesName}
                    </Card.Subtitle>
                    <Card.Text className='text-light'>
                      <strong>Venue:</strong> {matchItem.matchVenue}
                      <br />
                      <strong>Date:</strong> {matchItem.matchDate}
                      <br />
                      <strong>Time:</strong> {matchItem.matchTime}
                      <br />
                      <strong>Status:</strong> {matchItem.currentStatus}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ))}
        </Row>
      )}
    </div>
  );
}
