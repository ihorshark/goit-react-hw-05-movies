import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 200px;
  height: 26px;
`;

const StyledButton = styled.button`
  height: 32px;
`;

export function Form({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  function formSubmit(e) {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery('');
  }

  return (
    <form onSubmit={formSubmit}>
      <label>
        <StyledInput
          type="text"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <StyledButton type="submit">Search</StyledButton>
      </label>
    </form>
  );
}
