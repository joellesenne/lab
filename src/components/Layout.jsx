import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import { LayoutStyled } from './styles/Layout.Styled';
import Header from './Header';
import Footer from './Footer';
import { site } from '../portfolio';

class Layout extends React.Component {
  render() {
    let { children } = this.props;
    return (
      <LayoutStyled>
        <Motion
          defaultStyle={{
            opacity: 0,
            translateY: 30
          }}
          style={{
            opacity: spring(1),
            translateY: spring(0, presets.wobbly)
          }}>
          {(interpolatedStyles) => (
            <div
              style={{
                transform: `translateY(${interpolatedStyles.translateY}px)`,
                opacity: interpolatedStyles.opacity
              }}>
              <Header titleUrl={site.titleUrl} heading={site.heading} baseUrl={site.baseUrl} />
            </div>
          )}
        </Motion>
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
