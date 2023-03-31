import styled, { keyframes } from 'styled-components';

const lightSpeedIn = keyframes`
  0% {
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }

  80% {
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }

  100% {
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
`;

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
  justify-content: space-between;
  justify-items: flex-end;
  margin: 3rem;
  opacity: 0;
  transform: translateX(-100%) skewX(0deg);
  animation: ${lightSpeedIn} 1s ease-out both;
  h1 {
    position: relative;
    svg {
      position: absolute;
      top: 6px;
      left: -75px;
      @media only screen and (max-width: 350px) {
      display: none;
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
  @media only screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;
