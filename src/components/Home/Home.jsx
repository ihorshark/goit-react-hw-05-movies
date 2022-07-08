import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'components/TMDB-api';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 10px;
  background-color: rgba(240, 240, 240, 0.8);
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 26px;
  text-shadow: 1px 1px;
`;

const StyledUl = styled.ul`
  border: 0;
  padding: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 18px;
  line-height: 1.5;
`;

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
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledMain>
  );
}
