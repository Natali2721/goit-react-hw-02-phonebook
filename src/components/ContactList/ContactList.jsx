import {
  Button,
  ContactItem,
  Contacts,
  ContactTxt,
} from 'components/Style/Element.styled';
import { FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
            <FaUserAlt />
            <ContactTxt>
              {name} : {number}
            </ContactTxt>
            <Button
              //onClickDelete={() => onClickDelete(contact.id)}
              id={id}
            >
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  // onClickDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
