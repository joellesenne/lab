import React from "react";
import PropTypes from "prop-types";
import { FooterStyled } from "./styles/Footer.Styled.js";
import getYear from "../utils/getYear";

class Footer extends React.Component {
  render() {
    let { name, url } = this.props;
    return (
      <FooterStyled>
        <p>
          &copy; {getYear} - All rights reserved -{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </p>
      </FooterStyled>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.any,
  url: PropTypes.any,
};

Footer.prototypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Footer;
