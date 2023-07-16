import React from 'react';
import PropTypes from 'prop-types';

import { ContentStyled } from './styles/Content.Styled';

const Content = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default React.memo(Content);
