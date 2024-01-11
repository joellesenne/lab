import { ButtonToggleStyled } from './styles/Button.Styled';

export default function Toggle({ toggleTheme, title }) {
  return <ButtonToggleStyled onClick={toggleTheme}>{title}</ButtonToggleStyled>;
}
