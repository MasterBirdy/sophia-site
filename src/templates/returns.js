import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import { animated } from "react-spring";
import { useTemplateProps } from "../animation/animations";

const ReturnsPage = ({ data, transitionStatus }) => {
  const [isIn, setIsIn] = useState(false);

  const templateProps = useTemplateProps(isIn, 600);

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

  const post = data.markdownRemark;

  return (
    <div className="returns-page">
      <Layout subheader={data.markdownRemark.frontmatter.title}>
        <animated.div style={templateProps} className="returns-inner-page">
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
