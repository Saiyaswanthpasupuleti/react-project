import React, { useState } from "react";
import { app } from "./fireBase";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { Signup } from "./signup";
export function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const authentication=getAuth(app)
    const nav=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
           await signInWithEmailAndPassword(authentication,email,password)
            setEmail("")
            setPassword("")
            nav("/home")

        }
        catch(err){
            alert(err)
        }
       
        
    }
    return(
        <div >
            <form onSubmit={handleSubmit} >
                <h1>Login</h1>
                <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <input type="submit"></input>
            </form>
            <p onClick={()=>nav("/signup")} style={{textAlign: "center",color: "#007BFF",cursor: "pointer",marginTop: "10px"}}>dont have account Click here to signup</p>
        </div>
    )
}