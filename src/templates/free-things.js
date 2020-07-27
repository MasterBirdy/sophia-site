import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";

const FreeThingsPage = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="free-things-page">
      <Layout subheader={data.markdownRemark.frontmatter.title}>
        <div className="free-things-inner-page">
          <div
            className="large-text-container"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          ></div>
        </div>
      </Layout>
    </div>
  );
};

export default FreeThingsPage;

export const freeThingsQuery = graphql`
  query freeThingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
