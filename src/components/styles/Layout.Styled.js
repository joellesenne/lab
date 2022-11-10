import styled from 'styled-components';

export const LayoutStyled = styled.main`
  padding-block: 2.5rem;
  padding-inline: 2.5rem;
  @media only screen and (max-width: 768px) {
    padding-inline: 0;
  }
`;

export const SectionStyled = styled.section`
  margin-block: 0;
  margin-inline: auto;
  position: relative;
  width: min(100%, 38em);
`;
