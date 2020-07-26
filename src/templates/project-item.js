import React from "react";
import { graphql } from "gatsby";

const ProjectItemPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Hi, I'm the project item page.</h1>
    </div>
  );
};

export default ProjectItemPage;

export const contactUsPageQuery = graphql`
  query ProjectItem($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
