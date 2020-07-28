import React from "react";
import { graphql } from "gatsby";
import ProjectImages from "../components/projectimages";
import ProjectItemLayout from "../layouts/ProjectItemLayout";

const ProjectItemPage = ({ data }) => {
  console.log(data);
  const {
    featuredimage,
    featuredmovingimage,
    description,
    doodle,
    images,
    link,
    subtitle,
    tags,
    title,
    year,
  } = data.markdownRemark.frontmatter;

  const allImages = [featuredimage, images];
  console.log(allImages);
  return (
    <div className="project-item-page">
      <ProjectItemLayout
        featuredimage={featuredimage}
        featuredmovingimage={featuredmovingimage}
        description={description}
        doodle={doodle}
        images={images}
        link={link}
        subtitle={subtitle}
        tags={tags}
        title={title}
        year={year}
      >
        <div className="project-item-container">
          <div className="project-item-inner-page">
            <ProjectImages images={allImages}></ProjectImages>
          </div>
        </div>
      </ProjectItemLayout>
    </div>
  );
};

export default ProjectItemPage;

export const projectItemPageQuery = graphql`
  query ProjectItem($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        featuredimage
        description
        doodle
        featuredmovingimage
        images
        link
        subtitle
        tags
        title
        year
      }
    }
  }
`;
