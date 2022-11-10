import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: space-between;
  justify-items: flex-end;
  margin-block-end: 3rem;
  margin-inline: 3rem;
  & h1 {
    position: relative;
    & svg {
      position: absolute;
      top: 6px;
      left: -75px
    }
    transform:scale(1);
    transition: transform 0.25s linear;
    &:hover {
      transform:scale(1.08);
    }
  }
  & p {
    width: 80%;
    //padding-inline-start: 8rem;
  }
  & img {
    display: block;
    position: absolute;
    width: 50px;
    height: auto;
    transform: translateX(-65px) translateY(20px) scale(1);
    transition: transform var(--duration) linear;
    &:hover {
      transform: scale(1.08);
    }
    @media only screen and (max-width: 768px) {
      display: none;
      scale(.6);
      &:hover {
        transform: scale(1);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin-block-end: 1.5rem;
  }
`;
