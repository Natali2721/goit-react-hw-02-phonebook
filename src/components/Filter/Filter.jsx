import PropTypes from 'prop-types';
import { Input, P } from 'components/Style/Element.styled';

export const Filter = ({ title }) => (
  <div>
    <P>{title}</P>
    <Input
      type="text"
      name="nameToFind"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //      required
    />
  </div>
);

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
