import React from "react";
import styled from "styled-components";

const ProjectImage = styled.div`
  display: inline-block;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 720px;
`;

const ProjectImages = ({ images }) => {
  return (
    <div className="project-item-images">
      {images.map((image, index) => {
        return <ProjectImage image={image} key={image + index}></ProjectImage>;
      })}
    </div>
  );
};

export default ProjectImages;
