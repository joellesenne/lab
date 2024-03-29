import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: space-between;
  justify-items: flex-start;
  margin-bottom: 1rem;
  padding: 3.5rem;
  height: 77px;
  font-size: 1.5ex;
  @media only screen and (max-width: 768px) {
    margin-block-end: 5rem;
    padding-inline: 8rem;
    font-size: 0.8em;
  }
`;
