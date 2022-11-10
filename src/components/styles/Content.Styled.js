import styled from 'styled-components';

export const ContentStyled = styled.article`
  display: flex;
  flex-direction: column;
  margin-blog: 0;
  //margin-inline: 3rem;
  & h2 {
    max-width: 400px;
  }
  @media only screen and (max-width: 768px) {
    margin-block-end: 0.5rem;
    margin-inline: 6rem;
  }
`;
