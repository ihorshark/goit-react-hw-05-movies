import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast, getImage } from 'services/TMDB-api';
import { StyledWrapper, StyledItem } from './Cast.styled';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  return (
    <StyledWrapper>
      {cast.map(actor => {
        const image = getImage(actor.profile_path, 'w154');
        return (
          <StyledItem key={actor.id}>
            <img src={image} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
}
