import { useParams } from 'react-router-dom';
import { getReviews } from 'components/TMDB-api';
import { useState, useEffect } from 'react';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(data => setReviews(data.data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(review => {
            return (
              <li>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            );
          })
        : "We don't have any reviews for this movie."}
    </ul>
  );
}
