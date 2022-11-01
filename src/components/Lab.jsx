import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactCodepen from 'react-codepen-embed';
import { ItemStyled, LinkStyled, ListStyled } from './styles/Lab.Styled.js';
import process from 'prop-types/prop-types';

function Lab() {
  const [loading, setLoading, error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLab = async () => {
      setLoading(true);

      try {
        const response = await axios(process.env.REACT_APP_API_URL);
        setData(response.data);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };
    getLab();
  }, []);

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
            Script & design by{' '}
            <a href="https://codepen.io/joellesenne/" target="_blank" rel="noreferrer">
              @joellesenne
            </a>
          </p>
          {data.map((item) => (
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
                height={450}
              />
            </ItemStyled>
          ))}
        </ListStyled>
      )}
    </>
  );
}

export default Lab;
