import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Lab.jsx';
import Content from '../components/Content';
import { HelmetProvider } from 'react-helmet-async';

class NotFound extends React.Component {
  render() {
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
  }
}

export default NotFound;
