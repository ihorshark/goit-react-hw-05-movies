import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 10px;
  background-color: #828282;
  min-height: 800px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 26px;
`;

const StyledUl = styled.ul`
  border: 0;
  padding: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 18px;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  color: #f5f5f5;
`;

export { StyledMain, StyledTitle, StyledUl, StyledLi, StyledLink };
