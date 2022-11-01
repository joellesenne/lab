import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemStyled = styled.li`
  margin: 5rem 0 0.5rem;
  @media (max-width: 768px) {
    margin: 3rem 0 0.5rem;
  }
`;

export const LinkStyled = styled.a`
  display: inline-block;
  position: relative;
  padding: 1rem;
  max-width: 60%;
`;
