import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Teams.css'; // Import CSS for additional styles
import BootSpinner from './spinner';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleTeams = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-teams',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setTeams(response.data.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }


    // const options = {
    //   method: 'GET',
    //   url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-teams-domestic',
    //   headers: {
    //     'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
    //     'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data.response);
    //   setTeams(response.data.response);
    // } catch (error) {
    //   console.error(error);
    // }
    };





    handleTeams();
  }, []);

  return (
    <div className="teams-container" style={{ padding: '30px' }}>
      <h3 className="text-center mb-4" style={{ color: 'green', fontWeight: 'bold' }}>
        Teams
      </h3>
      {loading ? (
        <div className="text-center"> <BootSpinner/></div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {teams.map((team, index) => (
            <Col key={index} className="d-flex align-items-stretch">
              <Card
                style={{
                  border: '2px solid green',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 128, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s', // Add transition for hover effect
                }}
                className="team-card flex-grow-1" // Add a class for additional styling
              >
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <ShapeExample image={team.image} />
                </div>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Card.Title
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                    }}
                  >
                    {team.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1rem' }}>
                    <strong style={{ color: 'green' }}>Team ID:</strong> {team.id}
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
