import React from 'react';
import PropTypes from 'prop-types';
import { LayoutStyled } from './styles/Layout.Styled';

import { site } from '../portfolio';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <LayoutStyled>
    <Header titleUrl={site.titleUrl} heading={site.heading} baseUrl={site.baseUrl} />
    {children}
    <Footer siteName={site.siteName} siteUrl={site.siteUrl} />
  </LayoutStyled>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
