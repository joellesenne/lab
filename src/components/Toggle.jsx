import PropTypes from 'prop-types';
import { ButtonToggleStyled } from './styles/Button.Styled';

export default function Toggle({ toggleTheme, title }) {
  return <ButtonToggleStyled onClick={toggleTheme}>{title}</ButtonToggleStyled>;
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
  toggleTheme: PropTypes.node
};
