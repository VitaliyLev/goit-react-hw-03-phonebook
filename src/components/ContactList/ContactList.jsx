import React from 'react';
import PropTypes from 'prop-types';

import { Button, Item } from './ContactList.styled';

export function ContactList({ contactsByRender, onDeleteContact }) {
  return (
    <>
      <ul>
        {contactsByRender.map(({ name, number, id }) => (
          <Item key={id}>
            {name}: {number}
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
          </Item>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactsByRender: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
