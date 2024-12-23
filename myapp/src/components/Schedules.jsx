import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Schedules() {
  const [Schedule,Setschedule]=useState([])

  useEffect(()=>{
    let scheduledmatches=async ()=>{
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data.matchScheduleMap);
        const scheduleData = Object.values(response.data.matchScheduleMap);
        Setschedule(scheduleData);  

      } catch (error) {
        console.error(error);
      }
      


    }
    scheduledmatches()

  },[])


  return (
    <div>
      <h1>Welcome to Schedule Page</h1>
     
    {Schedule.map((a)=>{
      return(
        <div>
          <h1>{JSON.stringify(a)}</h1>
          </div>
      )
    })}
    </div>
  )
}
