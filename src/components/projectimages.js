import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/slick.scss";

var settings = {
  slidesToShow: 2,
  variableWidth: true,
};

const ProjectImage = styled.div`
  display: inline-block;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 720px !important;
  outline: none;
  cursor: pointer;
`;

const ProjectImages = ({ images, imagesRef }) => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => {
        return <ProjectImage image={image} key={image + index}></ProjectImage>;
      })}
    </Slider>
  );
};

export default ProjectImages;
