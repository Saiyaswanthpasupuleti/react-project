import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Players.css'; // Import CSS for additional styles

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePlayers = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-players',
        params: { teamid: '2' },
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setPlayers(response.data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handlePlayers();
  }, []);

  return (
    <div className="players-container" style={{ padding: '30px' }}>
      <h3 className="text-center mb-4" style={{ color: 'green', fontWeight: 'bold' }}>
        Players
      </h3>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {players.map((player, index) => (
            <Col key={index} className="d-flex align-items-stretch">
              <Card
                style={{
                  border: '2px solid green',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 128, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s', // Add transition for hover effect
                }}
                className="player-card flex-grow-1" // Add a class for additional styling
              >
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <ShapeExample image={player.image} />
                </div>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Card.Title
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                    }}
                  >
                    {player.title}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2"
                    style={{
                      color: 'darkgreen',
                      fontStyle: 'italic',
                      fontSize: '1rem',
                    }}
                  >
                    {player.Role}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: '1rem' }}>
                    <strong style={{ color: 'green' }}>Role:</strong> {player.Role}
                    <br />
                    <strong style={{ color: 'green' }}>Player ID:</strong> {player.id}
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
