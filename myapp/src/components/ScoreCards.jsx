import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function ScoreCards() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const handleScore = async () => {
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.scoreCard);
        setScores(response.data.scoreCard);
      } catch (error) {
        console.error(error);
      }
    };
    handleScore();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cricket Scorecards</h1>
      {scores.map((score, index) => {
        const batsmenData = Array.isArray(score.batTeamDetails.batsmenData)
          ? score.batTeamDetails.batsmenData
          : []; // Fallback to an empty array if batsmenData is not an array
        const bowlersData = Array.isArray(score.bowlTeamDetails.bowlersData)
          ? score.bowlTeamDetails.bowlersData
          : [];

        return (
          <div key={index} style={{ marginBottom: '40px' }}>
            <h3>
              Innings: {score.batTeamDetails.batTeamName} vs{' '}
              {score.bowlTeamDetails.bowlTeamName}
            </h3>

            {/* Batting Table */}
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Batsman Name</th>
                  <th>Runs</th>
                  <th>Balls</th>
                  <th>Fours</th>
                  <th>Sixes</th>
                  <th>Strike Rate</th>
                </tr>
              </thead>
              <tbody>
                {batsmenData.map((batsman, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{batsman.batName || 'N/A'}</td>
                    <td>{batsman.runs || 0}</td>
                    <td>{batsman.balls || 0}</td>
                    <td>{batsman.fours || 0}</td>
                    <td>{batsman.sixes || 0}</td>
                    <td>{batsman.strikeRate || 0}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Bowling Table */}
            <h4>Bowling: {score.bowlTeamDetails.bowlTeamName}</h4>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Bowler Name</th>
                  <th>Overs</th>
                  <th>Runs</th>
                  <th>Wickets</th>
                  <th>Economy</th>
                </tr>
              </thead>
              <tbody>
                {bowlersData.map((bowler, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{bowler.bowlName || 'N/A'}</td>
                    <td>{bowler.overs || 0}</td>
                    <td>{bowler.runs || 0}</td>
                    <td>{bowler.wickets || 0}</td>
                    <td>{bowler.economy || 0}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        );
      })}
    </div>
  );
}
