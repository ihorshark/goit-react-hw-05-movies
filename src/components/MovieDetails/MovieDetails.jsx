import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { filmDetails, getImage } from 'components/TMDB-api';

export function MovieDetails() {
  const [film, setFilm] = useState({});
  const [image, setImage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    filmDetails(movieId).then(data => {
      setFilm(data.data);
      setImage(getImage(data.data.poster_path));
    });
  }, [movieId]);

  return (
    <div>
      <img src={image} alt="kjhfdsk" />
    </div>
  );
}
