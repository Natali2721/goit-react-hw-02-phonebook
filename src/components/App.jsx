import { Component } from 'react';
import { Box } from './Box/Box';
import { H1, H2 } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box as="main" px={5}>
        <H1 title="Phonebook" />
        <H2 title="Contacts" />
      </Box>
    );
  }
}
