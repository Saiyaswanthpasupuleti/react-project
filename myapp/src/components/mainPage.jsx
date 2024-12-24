import React, { useEffect, useState } from "react";
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter,Routes,Route, Navigate,Link } from 'react-router-dom'
import Home from "./Home";
import { Login } from "./login";
import { Signup } from "./signup";
import UpcomingMatches from "./Upcomingmatches";



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
                {/* <Route path="/home/*" element={loggedin ? <Home /> : <Navigate to="/login" />}/> */}
                <Route path="/home/*" element={loggedin ? <Home /> : <Navigate to="/login" />} />
                <Route path="/home/matches/Upcomingmatches" element={ <UpcomingMatches/>} />

                <Route path="/signup" element={loggedin ? <Navigate to="/login" /> : <Signup />}/>
                <Route path="/login" element={loggedin ? <Navigate to="/home" /> : <Login />}/>
                <Route path="*" element={<Navigate to={loggedin ? "/home" : "/login"} />} />
                
                {/* <Route path="/matches" element={loggedin?<Matches/>:<Navigate to="/login"/>}/> */}
                

            </Routes>
            </BrowserRouter>
            </div>
            
        
       
    )
}