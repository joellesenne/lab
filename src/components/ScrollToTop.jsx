import React from 'react';
import PropTypes from 'prop-types';
import { LinkScrollToTopStyled } from './styles/ScrollToTop.Styled.js';

class ScrollToTop extends React.Component {
  render() {
    let { scrollToTop, title } = this.props;
    return <LinkScrollToTopStyled onClick={scrollToTop}>{title}</LinkScrollToTopStyled>;
  }
}

ScrollToTop.propTypes = {
  scrollToTop: PropTypes.any,
  title: PropTypes.any
};

ScrollToTop.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ScrollToTop;
