import PropTypes from 'prop-types';
import { FooterStyled } from './styles/Footer.Styled';
import {useGetYear} from "../utils";

export default function Footer({ siteName, siteUrl }) {
  return (
    <FooterStyled>
      <p>
        &copy; {useGetYear()} - All rights reserved -{' '}
        <a href={siteUrl} target="_blank" rel="noopener noreferrer" title={siteName}>
          {siteName}
        </a>
      </p>
    </FooterStyled>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  siteUrl: PropTypes.node,
  siteName: PropTypes.node
};
