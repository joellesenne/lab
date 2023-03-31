import styled from 'styled-components';

export const ContentStyled = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0;
  h2 {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    margin-block-end: 0.5rem;
    margin-inline: 4.5rem;
  }
`;
