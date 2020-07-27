import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";

const ReturnsPage = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="returns-page">
      <Layout subheader={data.markdownRemark.frontmatter.title}>
        <div className="returns-inner-page">
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

export default ReturnsPage;

export const returnsPageQuery = graphql`
  query ReturnsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
