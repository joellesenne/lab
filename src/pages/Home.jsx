import React, { Fragment } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../components/Layout';
import Content from '../components/Content';
import Gallery from '../components/Lab.jsx';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <title>Lab</title>
      </HelmetProvider>
      <Layout>
        <Content>
          <Gallery />
        </Content>
      </Layout>
    </>
  );
};

export default Home;
