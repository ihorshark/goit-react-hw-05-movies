import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'components/TMDB-api';
import { getImage } from 'components/TMDB-api';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  console.log(cast);
  return (
    <ul>
      {cast.map(actor => {
        const image = getImage(actor.profile_path, 'w92');
        return (
          <li key={actor.id}>
            <img src={image} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
