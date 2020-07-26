import React, { useRef, useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Header from "../components/header";
import styled, { keyframes } from "styled-components";
import IndexLayout from "../layouts/IndexLayout";

import Image from "../components/image";
import SEO from "../components/seo";

const move = (w, num) => keyframes`
0% {
  transform: translate(0%, -50%);
}
100% {
  transform: translate(${w ? -w * num + "px" : "0%"}, -50%);
}
`;

const Slider = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translate(0%, -50%);
  max-height: 36.4rem;
  animation: ${props => {
      console.log(props.numberOfProjects);
      return move(props.width, props.numberOfProjects);
    }}
    5s linear infinite;
`;

const SliderImage = styled.img.attrs(props => ({
  src: props.src,
}))`
  object-fit: cover;
  object-position: center;
  width: 15vw;
  height: 15vw;
  max-width: 30rem;
  max-height: 30rem;
  opacity: 0.9;
  margin-right: 5.5rem;
  filter: grayscale(100%);
  @media (max-width: 1024px) {
    margin-right: 3rem;
    width: 20vw;
    height: 20vw;
  }
  @media (max-width: 768px) {
    margin-right: 2rem;
    width: 27.5vw;
    height: 27.5vw;
    opacity: 0.8;
  }
  @media (max-width: 480px) {
    margin-right: 1.5rem;
    width: 30vw;
    height: 30vw;
  }
`;

const IndexPage = () => {
  const firstChildRef = useRef();
  const [imageWidth, setImageWidth] = useState(0);

  const data = useStaticQuery(graphql`
    query ProjectImagesQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project-item" } }, id: {} }
      ) {
        edges {
          node {
            frontmatter {
              featuredimage
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (firstChildRef.current) {
      handleResize();
    }
  }, [firstChildRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    let temp = getComputedStyle(firstChildRef.current).width.split("px");
    if (temp.length > 1) {
      setImageWidth(parseInt(temp[0]));
    }
  };

  return (
    <div className="title-screen-page">
      <IndexLayout>
        <div className="margin-index-page">
          <div className="title-name-holder">
            <h1 className="title-header">Sophie</h1>
            <h1 className="title-header">Studio</h1>
          </div>
          <Slider
            width={imageWidth}
            numberOfProjects={
              data.allMarkdownRemark.edges.length > 1
                ? data.allMarkdownRemark.edges.length
                : 1
            }
          >
            {data &&
              data.allMarkdownRemark.edges.map((edge, index) => {
                if (!index) {
                  return (
                    <div key={edge.node.id} ref={firstChildRef}>
                      <SliderImage
                        src={edge.node.frontmatter.featuredimage}
                      ></SliderImage>
                    </div>
                  );
                }
                return (
                  <div key={edge.node.id}>
                    <SliderImage
                      src={edge.node.frontmatter.featuredimage}
                    ></SliderImage>
                  </div>
                );
              })}
            <div key={"last-child" + data.allMarkdownRemark.edges[0].node.id}>
              <SliderImage
                src={
                  data.allMarkdownRemark.edges[0].node.frontmatter.featuredimage
                }
              ></SliderImage>
            </div>
          </Slider>
        </div>
      </IndexLayout>
    </div>
    // <Layout>
    //   <SEO title="Home" />
    //   <h1>Hi people</h1>
    //   <p>Welcome to your new Gatsby site.</p>
    //   <p>Now go build something great.</p>
    //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    //     <Image />
    //   </div>
    //   <Link to="/page-2/">Go to page 2</Link> <br />
    //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    // </Layout>
  );
};

export default IndexPage;
