import React from 'react';
import PropTypes from 'prop-types';
import { Title, TitleSecond } from 'components/Style/Element.styled';

const H1 = ({ title }) => <Title>{title}</Title>;

const H2 = ({ title }) => <TitleSecond>{title}</TitleSecond>;

H1.prototype = {
  title: PropTypes.string,
};
H2.prototype = {
  title: PropTypes.string,
};
export { H1, H2 };
