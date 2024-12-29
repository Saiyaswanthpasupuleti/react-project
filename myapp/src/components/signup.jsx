import React, { useState } from "react";
import { app } from "./fireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import image from "./img1.jpg"; // Import the image from the current directory

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const authentication = getAuth(app);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(authentication, email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      nav("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
        backgroundImage: `url(${image})`, // Use the imported image for background
        backgroundSize: "cover", // Ensure the entire image fits
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image from repeating
      }}
    >
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card p-4 shadow-lg"
          style={{
            maxWidth: "450px",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Black background with 80% opacity
            borderRadius: "15px", // Rounded corners
            border: "none", // Explicitly removes border
            backdropFilter: "blur(15px)", // Keeps the blur effect
          }}
        >
          <h1
            className="text-center mb-4"
            style={{ fontSize: "2.5rem", color: "#28a745" }}
          >
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{ fontSize: "1.2rem", padding: "10px" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ fontSize: "1.2rem", padding: "10px" }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Re-enter your password"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                style={{ fontSize: "1.2rem", padding: "10px" }}
              />
              {password && confirmPassword && password !== confirmPassword && (
                <small style={{ color: "red", fontSize: "0.9rem" }}>
                  Passwords do not match.
                </small>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-success w-100"
              style={{ fontSize: "1.2rem", padding: "12px" }}
            >
              Sign Up
            </button>
          </form>
          <p
            onClick={() => nav("/login")}
            className="text-center mt-3"
            style={{ cursor: "pointer", color: "green", fontSize: "1.1rem" }}
          >
            Already have an account? Click here to login.
          </p>
        </div>
      </div>
    </div>
  );
}
