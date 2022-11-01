import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Lab.jsx";
import Content from "../components/Content";
import { Helmet } from "react-helmet";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Lab</title>
        </Helmet>
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
