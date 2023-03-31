import React from 'react';
import { PropTypes } from 'prop-types';

import { LinkScrollToTopStyled } from './styles/Buttom.Styled';

const ScrollToTop = ({ scrollToTop, title }) => (
  <LinkScrollToTopStyled onClick={scrollToTop}>{title}</LinkScrollToTopStyled>
);

ScrollToTop.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  title: PropTypes.object.isRequired
};

export default ScrollToTop;
