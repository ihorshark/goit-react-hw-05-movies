import { useState } from 'react';
import { StyledForm, StyledInput, StyledButton } from './Form.styled';

export function Form({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  function formSubmit(e) {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery('');
  }

  return (
    <StyledForm onSubmit={formSubmit}>
      <label>
        <StyledInput
          type="text"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <StyledButton type="submit">Search</StyledButton>
      </label>
    </StyledForm>
  );
}
