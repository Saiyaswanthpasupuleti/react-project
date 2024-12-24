import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const handleSeries = async () => {
      const options = {
        method: "GET",
        url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-series",
        headers: {
          "x-rapidapi-key": "7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f",
          "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setSeries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    handleSeries();
  }, []);

  return (
    <div className="series-container">
      <h3 className="text-center mb-4 upcoming-title">Cricket Series 🏏</h3>
      {series.length === 0 ? (
        <p className="text-center loading-text">Loading...</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {series.map((seriesItem, index) => (
            <Col key={index} className="d-flex">
              <Card className="series-card w-100">
                <Card.Body>
                  <Card.Title className="series-card-title">
                    Series Date: {seriesItem.date}
                  </Card.Title>
                  {seriesItem.seriesList.map((listItem, listIndex) => (
                    <div key={listIndex} className="series-details">
                      <Card.Subtitle className="series-card-subtitle">
                        {listItem.seriesName}
                      </Card.Subtitle>
                      <Card.Text>
                        <strong>Start Date:</strong> {listItem.seriesDate}
                      </Card.Text>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
