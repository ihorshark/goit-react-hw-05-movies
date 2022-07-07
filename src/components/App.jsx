import { Routes, Route, NavLink } from 'react-router-dom';
import Container from './Common/Container';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </Container>
  );
};
