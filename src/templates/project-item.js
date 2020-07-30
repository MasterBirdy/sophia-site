import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import { useSpring, animated } from "react-spring";
import ProjectImages from "../components/projectimages";
import ProjectItemLayout from "../layouts/ProjectItemLayout";

const ProjectItemPage = ({ data, transitionStatus, entry, exit }) => {
  const [isIn, setIsIn] = useState(false);
  const imagesRef = useRef();

  const normalProps = useSpring({
    from: {
      transform: "translateX(100%)",
    },
    to: {
      transform: isIn ? "translateX(0%)" : "translateX(100%)",
    },
    delay: 750,
    config: {
      mass: 12,
      tension: 165,
      friction: 69,
    },
  });

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

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
    youtubelink,
    spotifylink,
    instagramlink,
  } = data.markdownRemark.frontmatter;

  const allImages = [featuredimage];
  if (images.length) {
    allImages.push(...images);
  } else {
    allImages.push(images);
  }
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
        youtubelink={youtubelink}
        spotifylink={spotifylink}
        instagramlink={instagramlink}
        isIn={isIn}
      >
        <animated.div style={normalProps} className="project-item-container">
          <ProjectImages
            images={allImages}
            imagesRef={imagesRef}
          ></ProjectImages>
        </animated.div>
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
