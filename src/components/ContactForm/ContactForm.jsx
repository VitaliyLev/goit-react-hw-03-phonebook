import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { Form, Label, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Form action="" onSubmit={this.handleFormSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Input name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label htmlFor={this.numberInputId}>
            Number
            <input
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              placeholder="Input number xxx-xx-xx"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
