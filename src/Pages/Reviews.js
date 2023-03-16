import React, { useState, useEffect } from 'react';

const NYTBookReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        'https://api.nytimes.com/svc/books/v3/reviews.json?api-key=YOUR_API_KEY'
      );
      const data = await response.json();
      setReviews(data.results);
    };
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>New York Times Book Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.book_title}</h2>
          <h3>{review.book_author}</h3>
          <p>{review.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default NYTBookReviews;
