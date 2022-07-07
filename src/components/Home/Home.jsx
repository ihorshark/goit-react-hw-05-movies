import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from 'components/TMDB-api';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(data => {
      console.log(data.data.results);
      setMovies(data.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
