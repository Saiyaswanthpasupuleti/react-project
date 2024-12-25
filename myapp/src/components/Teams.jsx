import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BootSpinner from './spinner';
import NavigationBar from './navbar';
import { Link } from 'react-router-dom';

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
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",gap:"30px",height:"100vh"}}>
   
      <h3 className="text-center mb-4 upcoming-title">Teams List 🏏</h3>
                <Link to="internationlist" className="match-card upcoming-matches">
                    Internation list
                  </Link>
                  <Link to="domesticlist" className="match-card upcoming-matches">
                    Domestic list
                  </Link>
                  <Link to="leaugelist" className="match-card upcoming-matches">
                    Leauge list
                  </Link>
                  <Link to="womenlist" className="match-card upcoming-matches">
                    Women list
                  </Link>
    </div>
  );
}
