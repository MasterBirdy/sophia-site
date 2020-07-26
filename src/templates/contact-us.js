import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";

const ContactUsPage = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="contact-us-page">
      <Layout>
        <div className="contact-us-grid">
          <div
            className="contact-us-grid-item"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          ></div>
          <div>
            <p>world</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ContactUsPage;

export const contactUsPageQuery = graphql`
  query ContactUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
