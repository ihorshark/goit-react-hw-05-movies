import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { filmDetails, getImage } from 'components/TMDB-api';

export function MovieDetails() {
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
    <section>
      <img src={image} alt="kjhfdsk" />
      <div>
        <h1>{film.original_title}</h1>
        <p>User score: {film.vote_average}</p>
        <h2>Overview</h2>
        <p>{film.overview}</p>
        <h2>Genres</h2>
        <p>{genres}</p>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
}
