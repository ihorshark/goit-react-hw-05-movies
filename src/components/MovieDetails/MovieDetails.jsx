import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { filmDetails, getImage } from 'services/TMDB-api';
import {
  StyledSection,
  StyledButton,
  StyledWrapper,
  StyledInfo,
  StyledAdditionalInfo,
  StyledAdditionalLinks,
  StyledLi,
  StyledLink,
} from './MovieDetails.styled';

export default function MovieDetails() {
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
      <Link to={location?.state?.from ?? '/'}>
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
            <StyledLink
              to="cast"
              state={{
                from: location?.state?.from ?? '/',
              }}
            >
              Cast
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink
              to="reviews"
              state={{
                from: location?.state?.from ?? '/',
              }}
            >
              Reviews
            </StyledLink>
          </StyledLi>
        </StyledAdditionalLinks>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </StyledAdditionalInfo>
    </StyledSection>
  );
}
