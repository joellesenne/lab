import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
  padding-inline: 2rem;
  color: ${({ theme }) => theme.text};
  font-size: 3.5rem;
  z-index: 999;
  & svg {
    transform: scale(1);
    transition: transform var(--duration) linear;
    &:hover {
      transform: scale(1.08);
    }
  }
  @media only screen and (max-width: 768px) {
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
    font-size: 2.5rem;
  }
`;

export const ButtonToggleStyled = styled(ButtonStyled)`
  top: 1.45rem;
  transform: translateX(-4.5rem);
  @media only screen and (max-width: 768px) {
    top: 1rem;
    transform: translateX(0);
  }
`;

export const LinkScrollToTopStyled = styled(ButtonStyled)`
  bottom: 1.45rem;
  transform: translateX(65rem);
  @media only screen and (max-width: 768px) {
    bottom: 1rem;
    transform: translateX(0);
  }
`;
