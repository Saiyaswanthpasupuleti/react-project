import React, { useState } from "react";
import { app } from "./fireBase";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
export function Signup(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const authentication=getAuth(app)
    const nav=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(authentication,email,password)
            setEmail("")
            setPassword("")
            nav("/login")

        }
        catch(err){
            alert(err.message)
        }
       
        
    }
    return(
        <div >
            <form onSubmit={handleSubmit} >
                <h1>SignUp</h1>
                <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}