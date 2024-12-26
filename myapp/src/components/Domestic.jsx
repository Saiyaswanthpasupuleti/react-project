import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BootSpinner from './spinner';
export default function Domestic() {
    const [domSeries,SetDomSeries]=useState([])
    useEffect(()=>{
        const handleDomestic=async ()=>{
            const options = {
                method: 'GET',
                url: 'https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-series-domestic',
                headers: {
                  'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
                  'x-rapidapi-host': 'free-cricbuzz-cricket-api.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
                  SetDomSeries(response.data.response)
              } catch (error) {
                  console.error(error);
              }


        }
        handleDomestic()

    },[])
  return (
    <div className="intl-match-card-container">
      <h1 className="intl-matches-heading">Domestic Series 🏏</h1>
      <div className="intl-card-wrapper">
        {domSeries.length === 0 ? (
          <BootSpinner />
        ) : (
            domSeries.map((a, index) => (
            <div key={index} className="intl-match-card">
              <div className="intl-series-info">
                <h4>{a.date}</h4>
              </div>
              {a.seriesList.map((b, idx) => (
                <div key={idx} className="intl-match-details">
                  <p className="intl-match-title">{b.seriesName}</p>
                  <p className="intl-match-venue">{b.seriesDate}</p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
