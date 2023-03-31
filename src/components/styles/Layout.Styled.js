import styled from 'styled-components';

export const LayoutStyled = styled.main`
  padding: 2.5rem;
  @media only screen and (max-width: 768px) {
    padding-inline: 0;
  }
`;

export const SectionStyled = styled.section`
  margin: 0 auto;
  position: relative;
  max-width: 38em;
`;
