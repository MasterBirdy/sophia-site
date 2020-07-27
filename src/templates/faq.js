import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";

const FAQPage = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="faq-page">
      <Layout subheader={data.markdownRemark.frontmatter.title}>
        <div className="faq-inner-page">
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

export default FAQPage;

export const faqPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
