import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactsFilter/Filter';

import { Box } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    } else {
      this.setState({
        contacts: this.props.initialContacts,
      });
    }
  }

  componentDidUpdate(nextProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      name: name.trim(),
      number: number.trim(),
      id: nanoid(),
    };

    const contactCheck = contacts.find(contact => {
      return contact.name === newContact.name;
    });

    contactCheck
      ? alert(`${name} is already in the contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...contacts],
        }));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  filterContactByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = idContact => {
    const { contacts } = this.state;
    const arrayContactsNoDelete = contacts.filter(
      contact => contact.id !== idContact
    );
    this.setState(prevState => ({
      contacts: arrayContactsNoDelete,
    }));
  };

  render() {
    const filterContactsByName = this.filterContactByName();
    const { filter } = this.state;
    return (
      <>
        <Box>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addNewContact} />

          <h2>Contacts</h2>
          <div>
            <Filter filterValue={filter} inputChange={this.handleInputChange} />
            <ContactList
              contactsByRender={filterContactsByName}
              onDeleteContact={this.deleteContact}
            />
          </div>
        </Box>
      </>
    );
  }
}
