import { NavLink } from 'react-router-dom';
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

export { StyledContainer, StyledNav, StyledLink };
