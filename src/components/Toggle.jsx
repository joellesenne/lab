import React from 'react';
import { PropTypes } from 'prop-types';

import { ButtonToggleStyled } from './styles/Buttom.Styled';

class Toggle extends React.Component {
  render() {
    let { toggleTheme, title } = this.props;
    return <ButtonToggleStyled onClick={toggleTheme}>{title}</ButtonToggleStyled>;
  }
}

Toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  title: PropTypes.object.isRequired
};

export default Toggle;
