import React, { useEffect, useState } from "react";
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter,Routes,Route, Navigate,Link } from 'react-router-dom'
import Home from "./Home";
import { Login } from "./login";
import { Signup } from "./signup";
import UpcomingMatches from "./Upcomingmatches";
import Teams from "./Teams";
import Matches from "./Matches";
import NavigationBar from "./navbar";
import Schedules from "./Schedules";
import InternationalMathes from "./InternationalMathes";
import Domesticmatches from "./Domesticmatches";
import Leaugematches from "./Leaugematches";
import Womenmatches from "./Womenmatches";
import Series from "./Series";
import InternationalSeries from "./InternationalSeries";
import Domestic from "./Domestic";
import LeagueSeries from "./LeagueSeries";
import WomenSeries from "./WomenSeries";
import InternationTeamsList from "./InternationTeamsList";
import DomesticTeam from "./DomesticTeam";
import LeaugeListTeam from "./LeaugeListTeam";
import WomenTeamList from "./WomenTeamList";
import Players from "./Players";
import Venues from "./Venues";
import News from "./News";
import Iccranking from "./Iccranking";



export function Mainfile(){
    const [loggedin,isloggedin]=useState(false)
    const Authentication=getAuth()
    useEffect(()=>{
         const a=onAuthStateChanged(Authentication,(e)=>{
            if(e){
                isloggedin(true)
            }
            else{
                isloggedin(false)
            }
        })
        return ()=>a()

    },[Authentication])
    return(
        <div>
          
    
            <BrowserRouter>
            
            <Routes>
                
                <Route path="/home/*" element={loggedin ? <Home /> : <Navigate to="/login" />} />
                {/* <Route path="/home/matches" element={ <Matches/>} /> */}
               <Route path="/home/schedules" element={<Schedules/>}></Route>
                <Route path="/home/matches/Upcomingmatches" element={ <UpcomingMatches/>} />
                <Route path="/home/matches" element={ <Matches/>} />
                {/* <Route path="/home/teams" element={ <Teams/>} />
                <Route path="/home/schedules" element={ <Schedules/>} /> */}
                <Route path="/home/schedules/internationalmatches" element={<InternationalMathes/>}></Route>
                <Route path="/home/schedules/domesticmatches" element={<Domesticmatches/>}></Route>
                <Route path="/home/schedules/leaugematches" element={<Leaugematches/>}></Route>
                <Route path="/home/schedules/womenmatches" element={<Womenmatches/>}></Route>
                <Route path="/home/series" element={<Series/>}></Route>
                <Route path="/home/series/internationalseries" element={<InternationalSeries/>}></Route>
                <Route path="/home/series/domesticseries" element={<Domestic/>}></Route>
                <Route path="/home/series/leaguesseries" element={<LeagueSeries/>}></Route>
                <Route path="/home/series/womenseries" element={<WomenSeries/>}></Route>
                <Route path="/home/teams" element={<Teams/>}></Route>
                <Route path="/home/teams/internationlist" element={<InternationTeamsList/>}></Route>
                <Route path="/home/teams/domesticlist" element={<DomesticTeam/>}></Route>
                <Route path="/home/teams/leaugelist" element={<LeaugeListTeam/>}></Route>
                <Route path="/home/teams/womenlist" element={<WomenTeamList/>}></Route>
                <Route path="/home/players" element={<Players/>}></Route>
                <Route path="/home/venues" element={<Venues/>}></Route>
                <Route path="/home/news" element={<News/>}></Route>
                
                <Route path="/home/iccranking" element={<Iccranking/>}></Route>
                


                <Route path="/signup" element={loggedin ? <Navigate to="/login" /> : <Signup />}/>
                <Route path="/login" element={loggedin ? <Navigate to="/home" /> : <Login />}/>
                <Route path="*" element={<Navigate to={loggedin ? "/home" : "/login"} />} />
                
                {/* <Route path="/matches" element={loggedin?<Matches/>:<Navigate to="/login"/>}/> */}
                

                


            </Routes>
            </BrowserRouter>
            </div>
            
        
       
    )
}