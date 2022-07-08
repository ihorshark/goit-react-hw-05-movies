import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast, getImage } from 'components/TMDB-api';
import styled from 'styled-components';

const StyledWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc((100% - 25px) / 5);
  margin-bottom: 32px;
`;

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  return (
    <StyledWrapper>
      {cast.map(actor => {
        const image = getImage(actor.profile_path, 'w92');
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
