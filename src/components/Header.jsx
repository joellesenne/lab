import PropTypes from 'prop-types';
import { BsCodeSlash } from 'react-icons/bs';

import { HeaderStyled } from './styles/Header.Styled';

export default function Header({ titleUrl, heading, baseUrl }) {
  return (
    <HeaderStyled>
      <a href={baseUrl} title={titleUrl}>
        <h1>
          <BsCodeSlash /> {titleUrl}
        </h1>
      </a>
      <p dir="rtl">{heading}</p>
    </HeaderStyled>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  titleUrl: PropTypes.node,
  heading: PropTypes.node,
  baseUrl: PropTypes.node
};
