import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404 - Not Found! | Lab</title>
        </Helmet>
        <Layout>
          <h2>404 - Not Found!</h2>
          <p>
            <Link to="/">Go Home</Link>
          </p>
        </Layout>
      </>
    );
  }
}

export default NotFound;
