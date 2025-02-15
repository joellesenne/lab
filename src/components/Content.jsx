import PropTypes from 'prop-types';
import { ContentStyled } from './styles/Content.Styled';

export default function Content({ children }) {
  return <ContentStyled>{children}</ContentStyled>;
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
};
