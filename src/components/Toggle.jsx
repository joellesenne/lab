import React from 'react';
import PropTypes from 'prop-types';

import { ButtonToggleStyled } from './styles/Toggle.Styled';

class Toggle extends React.Component {
  render() {
    let { toggleTheme, title } = this.props;
    return <ButtonToggleStyled onClick={toggleTheme}>{title}</ButtonToggleStyled>;
  }
}

Toggle.propTypes = {
  toggleTheme: PropTypes.any,
  title: PropTypes.any
};

Toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Toggle;
