import React from "react";
import PropTypes from "prop-types";
import { Motion, spring, presets } from "react-motion";
import { LayoutStyled } from "./styles/Layout.Styled";
import Header from "./Header";
import Footer from "./Footer";
import { site } from "../portfolio";

class Layout extends React.Component {
  render() {
    let { children } = this.props;
    return (
      <LayoutStyled>
        <Motion
          defaultStyle={{
            opacity: 0,
            translateY: 30,
          }}
          style={{
            opacity: spring(1),
            translateY: spring(0, presets.wobbly),
          }}
        >
          {(interpolatedStyles) => (
            <div
              style={{
                transform: `translateY(${interpolatedStyles.translateY}px)`,
                opacity: interpolatedStyles.opacity,
              }}
            >
              <Header
                title={site.title}
                heading={site.heading}
                base={site.base}
              />
            </div>
          )}
        </Motion>
        {children}
        <Footer name={site.name} url={site.url} />
      </LayoutStyled>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
