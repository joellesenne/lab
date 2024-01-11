import { FooterStyled } from './styles/Footer.Styled';
import getYear from '../utils/getYear';

export default function Footer({ siteName, siteUrl }) {
  return (
    <FooterStyled>
      <p>
        &copy; {getYear} - All rights reserved -{' '}
        <a href={siteUrl} target="_blank" rel="noopener noreferrer" title={siteName}>
          {siteName}
        </a>
      </p>
    </FooterStyled>
  );
}
