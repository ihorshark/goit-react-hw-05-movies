import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #828282;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #707070;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
`;

const StyledInfo = styled.div`
  max-width: 600px;
`;

const StyledAdditionalInfo = styled.div`
  padding: 15px;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
`;

const StyledAdditionalLinks = styled.ul`
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 15px;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  color: #f5f5f5;
`;

export {
  StyledSection,
  StyledButton,
  StyledWrapper,
  StyledInfo,
  StyledAdditionalInfo,
  StyledAdditionalLinks,
  StyledLi,
  StyledLink,
};
