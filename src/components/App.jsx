import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Box } from './Box/Box';
import { H1, H2 } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = data => {
    const id = nanoid();
    // if (
    //   this.state.contacts.filter(contact => contact.name === data.name).length >
    //   0
    // ) {
    //  alert(`${data.name} is already in contacts`);
    //  return;
    //}
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: data.name,
          number: data.number,
          id: id,
        },
      ],
    });
  };

  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    //const normolizeFilter = this.state.filter.toLowerCase();
    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normolizeFilter)
    //);
    return (
      <Box as="main" px={5}>
        <H1 title="Phonebook" />
        <Phonebook onChange={this.handleChange} onSubmit={this.formSubmit} />
        <H2 title="Contacts" />

        <ContactList contacts={this.state.contacts} />
      </Box>
    );
  }
}
