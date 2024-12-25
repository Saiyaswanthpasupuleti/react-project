import React, { useState } from "react";
import { app } from "./fireBase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import image from './img1.jpg'; // Import the image from the current directory

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authentication = getAuth(app);
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(authentication, email, password);
            setEmail("");
            setPassword("");
            nav("/home");
        } catch (err) {
            alert(err);
        }
    }
  

    return (
        <div 
            style={{ 
                backgroundColor: "#f8f9fa", 
                minHeight: "100vh", 
                padding: "20px", 
                backgroundImage: `url(${image})`, // Use the imported image for background
                backgroundSize: 'cover',  // Ensure the entire image fits
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat' // Prevent image from repeating
            }}
        >
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
             
                <div 
                    className="card p-4 shadow-lg" 
                    style={{ 
                        maxWidth: '450px', 
                        width: '100%', 
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // More transparent background with 20% opacity
                        borderRadius: "15px",
                        backdropFilter: "blur(15px)" // Adjusted blur effect for a smoother background
                    }}
                >
                    <h1 className="text-center mb-4" style={{ fontSize: '2.5rem', color: "#28a745" }}>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                style={{ fontSize: '1.2rem', padding: '10px' }}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                style={{ fontSize: '1.2rem', padding: '10px' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100" style={{ fontSize: '1.2rem', padding: '12px' }}>Login</button>
                    </form>
                    <p
                        onClick={() => nav("/signup")}
                        className="text-center mt-3"
                        style={{ cursor: "pointer", color: "#007BFF", fontSize: '1.1rem' }}
                    >
                        Don't have an account? Click here to sign up.
                    </p>
                </div>
            </div>
        </div>
    );
}
