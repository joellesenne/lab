import styled from 'styled-components';

export const ContentStyled = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  & h2 {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
