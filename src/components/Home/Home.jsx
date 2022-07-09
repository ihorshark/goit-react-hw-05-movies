import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'components/TMDB-api';
import {
  StyledMain,
  StyledTitle,
  StyledUl,
  StyledLi,
  StyledLink,
} from './Home.styled';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.data.results));
  }, []);

  return (
    <StyledMain>
      <StyledTitle>Trending today</StyledTitle>
      <StyledUl>
        {movies.map(movie => (
          <StyledLi key={movie.id}>
            <StyledLink
              to={`/goit-react-hw-05-movies/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledMain>
  );
}
