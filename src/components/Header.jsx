import React from 'react';
import { PropTypes } from 'prop-types';
import { HeaderStyled } from './styles/Header.Styled';
import { BsCodeSlash } from 'react-icons/bs';

class Header extends React.Component {
  render() {
    let { titleUrl, heading, baseUrl } = this.props;
    return (
      <HeaderStyled>
        <a href={baseUrl} title={titleUrl}>
          <h1>
            <BsCodeSlash /> {titleUrl}
          </h1>
        </a>
        <p>{heading}</p>
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  titleUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default Header;
