import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { filmDetails, getImage } from 'components/TMDB-api';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: rgba(240, 240, 240, 0.8);
`;

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
`;

const StyledInfo = styled.div`
  max-width: 600px;
`;

const StyledAdditionalInfo = styled.div`
  padding: 15px;
  box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
`;

const StyledAdditionalLinks = styled.ul`
  border: 0;
  padding: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 18px;
`;

export function MovieDetails() {
  const location = useLocation();
  const [film, setFilm] = useState({});
  const [genres, setGenres] = useState('');
  const [image, setImage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    filmDetails(movieId).then(data => {
      setFilm(data.data);
      setGenres(() =>
        data.data.genres
          .map(genre => {
            return genre.name;
          })
          .join(', ')
      );
      setImage(getImage(data.data.poster_path, 'w342'));
    });
  }, [movieId]);

  return (
    <StyledSection>
      <Link to={location.state.from}>
        <StyledButton type="button">Go back</StyledButton>
      </Link>

      <StyledWrapper>
        <img src={image} alt={film.original_title} />
        <StyledInfo>
          <h1>{film.original_title}</h1>
          <p>User score: {film.vote_average}</p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </StyledInfo>
      </StyledWrapper>
      <StyledAdditionalInfo>
        <h2>Additional information</h2>
        <StyledAdditionalLinks>
          <StyledLi>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          </StyledLi>
          <StyledLi>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </StyledLi>
        </StyledAdditionalLinks>
        <Outlet />
      </StyledAdditionalInfo>
    </StyledSection>
  );
}
