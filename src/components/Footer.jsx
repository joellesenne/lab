import React from 'react';
import { PropTypes } from 'prop-types';
import { FooterStyled } from './styles/Footer.Styled.js';
import getYear from '../utils/getYear';

class Footer extends React.Component {
  render() {
    let { siteName, siteUrl } = this.props;
    return (
      <FooterStyled>
        <p>
          &copy; {getYear} - All rights reserved -{' '}
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" title={siteName}>
            {siteName}
          </a>
        </p>
      </FooterStyled>
    );
  }
}

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired
};

export default Footer;
