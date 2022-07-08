import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from 'components/TMDB-api';
import { useSearchParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Form } from './Form';

const StyledUl = styled.ul`
  border: 0;
  padding: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 18px;
  line-height: 1.5;
`;

export default function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  function onFormSubmit(query) {
    setSearchParams({ query: query });
  }

  useEffect(() => {
    if (searchParams.get('query') === null) return;
    searchMovies(searchParams.get('query')).then(data =>
      setMovies(data.data.results)
    );
  }, [searchParams]);

  useEffect(() => {
    return setMovies([]);
  }, []);

  return (
    <section>
      <Form onSubmit={onFormSubmit} />
      {movies.length > 0 && (
        <div>
          {/* <h1>Searched movies</h1> */}
          <StyledUl>
            {movies.map(movie => (
              <StyledLi key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </StyledLi>
            ))}
          </StyledUl>
        </div>
      )}
    </section>
  );
}
