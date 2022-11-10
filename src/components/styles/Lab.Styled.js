import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemStyled = styled.li`
  margin-block: 5rem;
  margin-inline: 0.5rem;
  @media only screen and (max-width: 768px) {
    margin-block: 3rem;
  }
`;

export const LinkStyled = styled.a`
  display: inline-block;
  position: relative;
  padding-inline: 1rem;
  width: min(auto, 60%);
`;
