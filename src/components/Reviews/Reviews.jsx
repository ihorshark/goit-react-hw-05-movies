import { useParams } from 'react-router-dom';
import { getReviews } from 'services/TMDB-api';
import { useState, useEffect } from 'react';
import { StyledList } from './Reviews.styled';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(data => {
      data.data.total_results
        ? setReviews(data.data.results)
        : setReviews("We don't have any reviews for this movie.");
    });
  }, [movieId]);

  return typeof reviews === 'string' ? (
    reviews
  ) : (
    <StyledList>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        );
      })}
    </StyledList>
  );
}
