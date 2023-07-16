import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import process from 'prop-types/prop-types.js';
import axios from 'axios';
import ReactCodepen from 'react-codepen-embed';

import { ItemStyled, LinkStyled, ListStyled } from './styles/Lab.Styled.js';

const Lab = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getLab() {
      setLoading(true);
      try {
        const response = await axios(process.env.REACT_APP_API_URL);
        setData(response.data);
      } catch (error) {
        setErrors(true);
      }
      setLoading(false);
    }
    getLab().then();
  }, []);

  return (
    <>
      {errors && <h2>Something went wrong...</h2>}
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
                height={350}
              />
            </ItemStyled>
          ))}
        </ListStyled>
      )}
    </>
  );
};

Lab.propTypes = {
  prop: PropTypes.string
};

export default React.memo(Lab);
