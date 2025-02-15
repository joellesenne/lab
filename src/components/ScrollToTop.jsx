import PropTypes from 'prop-types';
import { LinkScrollToTopStyled } from './styles/Button.Styled';

export default function ScrollToTop({ scrollToTop, title }) {
  return <LinkScrollToTopStyled onClick={scrollToTop}>{title}</LinkScrollToTopStyled>
}

ScrollToTop.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  scrollToTop: PropTypes.node
};
