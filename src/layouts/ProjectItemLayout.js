import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectItemSubheader from "../components/projectitemsubheader";

const ProjectItemLayout = ({
  children,
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
  instagramlink,
  spotifylink,
  isIn,
}) => {
  return (
    <>
      <div className="project-item-layout">
        <Header logoOn={true} borderOn={true} isIn={true}></Header>
        <ProjectItemSubheader
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
          instagramlink={instagramlink}
          spotifylink={spotifylink}
          isIn={isIn}
        ></ProjectItemSubheader>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProjectItemLayout;
