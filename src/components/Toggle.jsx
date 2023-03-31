import React from 'react';
import { PropTypes } from 'prop-types';

import { ButtonToggleStyled } from './styles/Buttom.Styled';

function Toggle({ toggleTheme, title }) {
  return <ButtonToggleStyled onClick={toggleTheme}>{title}</ButtonToggleStyled>;
}

Toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  title: PropTypes.object.isRequired
};

export default Toggle;
