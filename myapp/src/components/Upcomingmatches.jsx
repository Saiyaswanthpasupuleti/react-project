import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UpcomingMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-matches-upcoming",
        headers: {
          "x-rapidapi-key": "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMatches(response.data.response); // Assuming 'response' is the correct field
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="upcoming-matches-container" style={{ padding: "20px" }}>
      <h3 className="text-center mb-4" style={{ color: "green", fontWeight: "bold" }}>
        Upcoming Matches  🏏
      </h3>
      {matches.length === 0 ? (
        <BootSpinner />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {matches.map((match, index) => (
            match.matchList &&
            match.matchList.length > 0 &&
            match.matchList.map((matchItem, itemIndex) => (
              <Col key={itemIndex}>
                <Card
                  className="h-100"
                  style={{
                    border: "2px solid green", // Green border
                    borderRadius: "10px", // Slightly rounded corners
                    boxShadow: "0 4px 6px rgba(0, 128, 0, 0.1)", // Subtle shadow
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{
                        color: "green", // Green title
                        fontWeight: "bold",
                      }}
                    >
                      {matchItem.matchTitle}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2"
                      style={{ color: "darkgreen", fontStyle: "italic" }}
                    >
                      {match.seriesName}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong style={{ color: "green" }}>Venue:</strong>{" "}
                      {matchItem.matchVenue}
                      <br />
                      <strong style={{ color: "green" }}>Date:</strong>{" "}
                      {matchItem.matchDate}
                      <br />
                      <strong style={{ color: "green" }}>Time:</strong>{" "}
                      {matchItem.matchTime}
                      <br />
                      <strong style={{ color: "green" }}>Status:</strong>{" "}
                      {matchItem.currentStatus}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ))}
        </Row>
      )}
      <img src="./"></img>
    </div>
  );
}