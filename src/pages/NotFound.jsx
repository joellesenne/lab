import { HelmetProvider } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function NotFound() {
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
}
