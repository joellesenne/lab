import React, { Fragment } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <HelmetProvider>
        <title>404 - Not Found! | Lab</title>
      </HelmetProvider>
      <Layout>
        <h2>404 - Not Found!</h2>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </Layout>
    </>
  );
};

export default NotFound;
