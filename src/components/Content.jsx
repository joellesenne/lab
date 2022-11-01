import React from "react";
import PropTypes from "prop-types";
import { ContentStyled } from "./styles/Content.Styled";

class Content extends React.Component {
  render() {
    let { children } = this.props;
    return <ContentStyled>{children}</ContentStyled>;
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
