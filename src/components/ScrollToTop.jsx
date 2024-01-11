import { LinkScrollToTopStyled } from './styles/Button.Styled';

export default function ScrollToTop({ scrollToTop, title }) {
  return <LinkScrollToTopStyled onClick={scrollToTop}>{title}</LinkScrollToTopStyled>
}
