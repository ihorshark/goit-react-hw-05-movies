import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchMovies } from 'components/TMDB-api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Form } from './Form';
import {
  StyledMovieSection,
  StyledUl,
  StyledLi,
  StyledLink,
} from './Movies.styled';

export default function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  function onFormSubmit(query) {
    setSearchParams({ query: query });
  }

  useEffect(() => {
    const query = searchParams.get('query');
    if (query === null) {
      return;
    }
    if (query === '') {
      toast.warning('Please enter some film!');
      return;
    }
    searchMovies(query).then(data => {
      if (data.data.total_results === 0) {
        toast.error(`There is no ${query} film`);
        return;
      }
      setMovies(data.data.results);
    });
  }, [searchParams]);

  useEffect(() => {
    return setMovies([]);
  }, []);

  return (
    <StyledMovieSection>
      <Form onSubmit={onFormSubmit} />
      {movies.length > 0 && (
        <div>
          <StyledUl>
            {movies.map(movie => (
              <StyledLi key={movie.id}>
                <StyledLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </StyledLink>
              </StyledLi>
            ))}
          </StyledUl>
        </div>
      )}
    </StyledMovieSection>
  );
}
