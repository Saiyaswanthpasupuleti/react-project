import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import "./css/Icc.css";
import BootSpinner from './spinner';

export default function Iccranking() {
  const [ranking, Setranking] = useState([]);
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    const handleRanking = async () => {
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket2.p.rapidapi.com/stats/v1/rankings/teams',
        params: {
          isWomen: '0',
          formatType: 't20'
        },
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'cricbuzz-cricket2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data); // Check the full response data

        if (response.data && response.data.rank) {
          Setranking(response.data.rank);  // Update state with fetched data
        } else {
          console.log("No ranking data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        Setloading(false); // Set loading to false after the request is done
      }
    };

    handleRanking();
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <div className="container" style={{ maxWidth: '80%', marginTop: '30px' }}>
      <h1>Icc Rankings 🏏</h1>
      {loading ? (
        <BootSpinner />
      ) : (
        <Table responsive="sm" className="table-bordered table-striped table-hover">
          <thead className="bg-success text-white">
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Matches</th>
              <th>Points</th>
              <th>Rating</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {ranking.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            ) : (
              ranking.map((a, b) => (
                <tr key={b} className={b % 2 === 0 ? 'bg-light' : 'bg-success text-white'}>
                  <td>{b + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.matches}</td>
                  <td>{a.points}</td>
                  <td>{a.rating}</td>
                  <td>{a.rank}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
}
