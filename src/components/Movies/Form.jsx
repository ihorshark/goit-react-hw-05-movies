import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import { StyledForm, StyledInput, StyledButton } from './Form.styled';

export function Form({ onSubmit }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));

  function formSubmit(e) {
    e.preventDefault();

    onSubmit(searchQuery);
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
