import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: space-between;
  justify-items: flex-end;
  margin: 0 3rem;
  & h1,
  & p {
    margin: 0;
  }
  & h1 {
    position: relative;
    & svg {
      position: absolute;
      top: 12px;
      left: -75px
    }
    transform:scale(1);
    transition: all 0.25s linear;

    &:hover {
      transform:scale(1.08);
    }
  }
  & img {
    display: block;
    position: absolute;
    width: 50px;
    height: auto;
    transform: translateX(-65px) translateY(20px) scale(1);
    transition: all 0.25s linear;
    &:hover {
      transform: translateX(-65px) translateY(20px) scale(1.08);
    }

    @media (max-width: 768px) {
      display: none;
      scale(.6)
    }
  }

  @media (max-width: 768px) {
    margin-bottom:.5rem;
  }
`;
