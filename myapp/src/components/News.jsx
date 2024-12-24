import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './News.css'; // Import CSS for additional styles

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://crickbuzz-official-apis.p.rapidapi.com/news',
        params: { lastId: '127528' },
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'crickbuzz-official-apis.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setNews(response.data.storyList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleNews();
  }, []);

  return (
    <div className="news-container">
      <h3 className="text-center mb-4 news-title">
        Cricket News 🏏
      </h3>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {news.map((item, index) => (
            <Col key={index} className="d-flex align-items-stretch">
              <Card className="news-card flex-grow-1">
                <Card.Body>
                  <Card.Title className="news-card-title">
                    {item.story.hline}
                  </Card.Title>
                  <Card.Text className="news-card-text">
                    {item.story.intro}
                  </Card.Text>
                  <Card.Footer className="news-card-footer">
                    Published on: {item.story.pubTime}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
