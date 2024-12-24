import React, { useState } from "react";
// import "./App.css"; // Add your CSS styles for proper rendering

const RandomCircles = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = () => {
    if (circles.length === 2) {
      // Remove all circles after 3rd click
      setCircles([]);
    } else {
      // Generate a random circle
      const randomRadius = Math.floor(Math.random() * (200 - 10 + 1)) + 10; // 10px to 200px radius
      const randomX = Math.random() * (window.innerWidth - randomRadius * 2);
      const randomY = Math.random() * (window.innerHeight - randomRadius * 2);

      const newCircle = {
        id: circles.length + 1,
        x: randomX,
        y: randomY,
        radius: randomRadius,
      };

      setCircles([...circles, newCircle]);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }} onClick={handleClick}>
      {circles.map((circle) => (
        <div
          key={circle.id}
          style={{
            position: "absolute",
            top: circle.y,
            left: circle.x,
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 123, 255, 0.5)", // Customize the color as needed
          }}
        ></div>
      ))}
    </div>
  );
};

export default RandomCircles;
