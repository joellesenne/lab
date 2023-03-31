import React from 'react';
import { PropTypes } from 'prop-types';
import { BsCodeSlash } from 'react-icons/bs';

import { HeaderStyled } from './styles/Header.Styled';

const Header = ({ titleUrl, heading, baseUrl }) => {
  return (
    <HeaderStyled>
      <a href={baseUrl} title={titleUrl}>
        <h1>
          <BsCodeSlash /> {titleUrl}
        </h1>
      </a>
      <p dir="rtl">{heading}</p>
    </HeaderStyled>
  );
};

Header.propTypes = {
  titleUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default Header;
