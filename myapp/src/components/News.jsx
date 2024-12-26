import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShapeExample from './Playes-Images-photos';
import BootSpinner from './spinner';
import './News.css';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://cricket-live-line1.p.rapidapi.com/news',
        headers: {
          'x-rapidapi-key': '7ae981e42amsh872b0f8b9fa9783p1d2701jsn96e941a8c85f',
          'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setNews(response.data.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Ensure loading is false even if there is an error
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
        <BootSpinner />
      ) : (
        <div className="news-list">
          {news.map((a, index) => (
            <div key={index} className="news-item">
              <ShapeExample image={a.image} />
              <h4 className="news-item-title">{a.title}</h4>
              <p className="news-item-description">{a.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
