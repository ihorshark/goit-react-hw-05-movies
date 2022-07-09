import styled from 'styled-components';

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
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

export { StyledWrapper, StyledItem };
