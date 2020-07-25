import React from "react";
import { Link } from "gatsby";
import "../scss/main.scss";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <div className="title-screen-page">
      <div className="full-width-container">
        <div class="title-name-holder">
          <h1 className="title-header">Sophie</h1>
          <h1 className="title-header">Studio</h1>
        </div>
      </div>
    </div>
    // <Layout>
    //   <SEO title="Home" />
    //   <h1>Hi people</h1>
    //   <p>Welcome to your new Gatsby site.</p>
    //   <p>Now go build something great.</p>
    //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //     <Image />
    //   </div>
    //   <Link to="/page-2/">Go to page 2</Link> <br />
    //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    // </Layout>
  );
};

export default IndexPage;
