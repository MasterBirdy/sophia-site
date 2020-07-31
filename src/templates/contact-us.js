import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import { animated } from "react-spring";
import { useTemplateProps } from "../animation/animations";

const ContactUsPage = ({ data, transitionStatus }) => {
  const [isIn, setIsIn] = useState(false);

  const templateProps = useTemplateProps(isIn, 600, 1000);

  const post = data.markdownRemark;

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

  return (
    <div className="contact-us-page">
      <Layout subheader={data.markdownRemark.frontmatter.title} isIn={isIn}>
        <animated.div style={templateProps} className="contact-us-inner-page">
          <div className="contact-us-grid">
            <div className="contact-us-grid-container">
              <div
                className="contact-us-grid-item"
                dangerouslySetInnerHTML={{
                  __html: post.html,
                }}
              ></div>
            </div>
          </div>
        </animated.div>
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
