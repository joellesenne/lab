import ReactCodepen from 'react-codepen-embed';
import UseDataFetch from "../hooks/UseDataFetch";

import { ItemStyled, LinkStyled, ListStyled } from './styles/Lab.Styled';

export default function Lab() {
  const { data, loading, error } = UseDataFetch();
  return (
    <>
      {error && <h2>Something went wrong...</h2>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ListStyled>
          <h2>
            <a href="https://codepen.io/" target="_blank" rel="noreferrer">
              CodePen
            </a>{' '}
            online code editor
          </h2>
          <p>
            Script &amp; design by{' '}
            <a href="https://codepen.io/joellesenne/" target="_blank" rel="noreferrer">
              @joellesenne
            </a>
          </p>
          {data && data.map((item) => (
            <ItemStyled key={item.id}>
              <LinkStyled
                href={`https://codepen.io/joellesenne/full/${item.url}/`}
                target="_blank"
                rel="noopener noreferrer">
                {item.name}
              </LinkStyled>
              <ReactCodepen
                hash={item.url}
                user="joellesenne"
                title={item.name}
                defaultTab="result"
                height={350}
              />
            </ItemStyled>
          ))}
        </ListStyled>
      )}
    </>
  );
}
