import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ text }) => (
  <div>
    <header>{text}</header>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
