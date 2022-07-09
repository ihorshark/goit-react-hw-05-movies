import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 26px;
`;

const StyledButton = styled.button`
  height: 32px;
  background-color: #707070;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export { StyledForm, StyledInput, StyledButton };
