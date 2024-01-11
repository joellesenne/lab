import { HelmetProvider } from 'react-helmet-async';

import Layout from '../components/Layout';
import Content from '../components/Content';
import Gallery from '../components/Lab';

export default function Home() {
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
