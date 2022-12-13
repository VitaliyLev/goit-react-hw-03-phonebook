import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Label } from './Filter.styled';

export function Filter({ filterValue, inputChange }) {
  const findInputId = nanoid();
  return (
    <>
      <Label htmlFor={findInputId}>
        Find contacts by name
        <input
          onChange={inputChange}
          value={filterValue}
          name="filter"
          type="text"
          placeholder="Input name to find"
        />
      </Label>
    </>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};
