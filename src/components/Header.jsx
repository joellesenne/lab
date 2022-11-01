import React from 'react';
import PropTypes from 'prop-types';
import { HeaderStyled } from './styles/Header.Styled';
import { BsCodeSlash } from 'react-icons/bs';

class Header extends React.Component {
  render() {
    let { title, heading, base } = this.props;
    return (
      <HeaderStyled>
        <a href={base} title={title}>
          <h1>
            <BsCodeSlash /> {title}
          </h1>
        </a>
        <p>{heading}</p>
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  title: PropTypes.any,
  heading: PropTypes.any,
  base: PropTypes.any
};

Header.prototypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired
};

export default Header;
