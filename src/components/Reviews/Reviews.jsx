import { useParams } from 'react-router-dom';
import { getReviews } from 'components/TMDB-api';
import { useState, useEffect } from 'react';
import { StyledList } from './Reviews.styled';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(data => setReviews(data.data.results));
  }, [movieId]);

  return (
    <StyledList>
      {reviews.length > 0
        ? reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            );
          })
        : "We don't have any reviews for this movie."}
    </StyledList>
  );
}
