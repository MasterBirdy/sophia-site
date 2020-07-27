import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";

const ContactUsPage = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="press-page">
      <Layout subheader={data.markdownRemark.frontmatter.title}>
        <div className="press-inner-page">
          <div
            className="press-page-content"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          ></div>
        </div>
      </Layout>
    </div>
  );
};

export default ContactUsPage;

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
