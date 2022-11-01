import styled from "styled-components";

export const LinkScrollToTopStyled = styled.a`
  position: fixed;
  right: 1.45rem;
  bottom: 1.45rem;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  font-size: 3rem;
  transition: all 0.25s linear;
  z-index: 999;
  & svg {
    transform: scale(1);
    transition: all 0.25s linear;
    &:hover {
      transform: scale(1.08);
    }
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 2rem;
  }
`;
