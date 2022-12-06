import React from 'react';
import PropTypes from 'prop-types';
import { LayoutStyled } from './styles/Layout.Styled';
import Header from './Header';
import Footer from './Footer';
import { site } from '../portfolio';

class Layout extends React.Component {
  render() {
    let { children } = this.props;
    return (
      <LayoutStyled>
        <Header titleUrl={site.titleUrl} heading={site.heading} baseUrl={site.baseUrl} />
        {children}
        <Footer siteName={site.siteName} siteUrl={site.siteUrl} />
      </LayoutStyled>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
