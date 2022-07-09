import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledNav, StyledLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <StyledContainer>
      <StyledNav>
        <StyledLink to="/goit-react-hw-05-movies/">Home</StyledLink>
        <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
      </StyledNav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
}
