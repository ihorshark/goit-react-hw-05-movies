import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import styled from 'styled-components';

const StyledContainer = styled.section`
  max-width: 1440px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 50px;
  background-color: rgba(30, 30, 30, 0.8);
`;

const StyledLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: darkgrey;
  :not(:last-child) {
    padding-right: 10px;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    color: white;
  }
`;

export const App = () => {
  return (
    <StyledContainer>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </StyledContainer>
  );
};
