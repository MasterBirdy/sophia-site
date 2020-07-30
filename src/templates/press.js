import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import { animated } from "react-spring";
import { useTemplateProps } from "../animation/animations";

const PressPage = ({ data, transitionStatus }) => {
  const [isIn, setIsIn] = useState(false);

  const templateProps = useTemplateProps(isIn, 600);

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

  const post = data.markdownRemark;
  return (
    <div className="press-page">
      <Layout subheader={data.markdownRemark.frontmatter.title} isIn={isIn}>
        <animated.div style={templateProps} className="press-inner-page">
          <div
            className="press-page-content"
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          ></div>
        </animated.div>
      </Layout>
    </div>
  );
};

export default PressPage;

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
