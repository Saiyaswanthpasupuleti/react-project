import React, { useEffect, useState } from "react";
import axios from "axios";
import BootSpinner from "./spinner";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Schedules() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule",
        headers: {
          "x-rapidapi-key": "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setSchedules(response.data.response.schedules); // Assuming 'response' is the correct field
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div className="schedule-container" style={{ padding: "20px" }}>
      <h3 className="text-center mb-4" style={{ color: "green", fontWeight: "bold" }}>
        Schedules
      </h3>
      {loading ? (
        <BootSpinner />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {schedules.map((schedule, index) => (
            <Col key={index}>
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
                    {schedule.date}
                  </Card.Title>
                  <Row xs={1} md={2} lg={1}>
                    {schedule.matchList.map((match, idx) => (
                      <Col key={idx}>
                        <Card
                          style={{
                            border: "2px solid darkgreen", // Dark green border for match cards
                            borderRadius: "8px",
                            marginBottom: "10px", // Slight margin between match cards
                          }}
                        >
                          <Card.Body>
                            <Card.Title style={{ color: "darkgreen" }}>
                              {match.seriesName}
                            </Card.Title>
                            <Card.Text>
                              <strong style={{ color: "green" }}>Series ID:</strong>{" "}
                              {match.seriesId}
                              <br />
                              <strong style={{ color: "green" }}>Number of Matches:</strong>{" "}
                              {match.seriesList.length}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
