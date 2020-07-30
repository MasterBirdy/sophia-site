import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import { animated } from "react-spring";
import { useTemplateProps } from "../animation/animations";

const FAQPage = ({ data, transitionStatus }) => {
  const [isIn, setIsIn] = useState(false);
  console.log(transitionStatus);

  const templateProps = useTemplateProps(isIn, 600);

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

  const post = data.markdownRemark;

  return (
    <div className="faq-page">
      <Layout isIn={isIn} subheader={data.markdownRemark.frontmatter.title}>
        <animated.div style={templateProps} className="faq-inner-page">
          <div
            className="large-text-container"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          ></div>
        </animated.div>
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
