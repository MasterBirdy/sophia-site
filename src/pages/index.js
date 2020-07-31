import React, { useRef, useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useSpring, animated } from "react-spring";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import Header from "../components/header";
import styled, { keyframes } from "styled-components";
import IndexLayout from "../layouts/IndexLayout";

import Image from "../components/image";
import SEO from "../components/seo";

const move = (w, num) => {
  return keyframes`
    0% {
      transform: translate(0%, -50%);
    }
    100% {
      transform: translate(${w ? -w * num + "px" : "0%"}, -50%);
    }
    `;
};

const Slider = styled(animated.div)`
  position: absolute;
  display: flex;
  top: 48%;
  overflow-x: hidden;
  transform: translate(0%, -48%);
  max-height: 36.4rem;
  will-change: transform;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    transition: opacitiy 1000ms ease-in-out;
    opacity: 1;
  }

  &.fade-exit {
    transition: opacity 1000ms ease-in-out;
    opacity: 0;
  }

  &.fade-exit-active {
    opacity: 1;
  }

  animation: ${props => {
      return move(props.width, props.numberOfProjects);
    }}
    ${props => 6 + props.numberOfProjects * 2}s linear infinite;
`;

const SliderImage = styled.img.attrs(props => ({
  src: props.src,
}))`
  object-fit: cover;
  object-position: center;
  width: 15vw;
  height: 15vw;
  max-width: 19rem;
  max-height: 19rem;
  opacity: 0.8;
  margin-right: 5.5rem;
  filter: grayscale(100%);
  cursor: pointer;
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

const imageURLTransform = url => {
  return url.replace("/upload", "/upload/w_350,h_350,c_fill");
};

const IndexPage = ({ location, transitionStatus, entry, exit }) => {
  const firstChildRef = useRef();
  const [imageWidth, setImageWidth] = useState(0);
  const [isIn, setIsIn] = useState(false);
  const [hoveredOver, setHoveredOver] = useState(false);

  const transitionProps = useSpring({
    opacity:
      transitionStatus === "entering" || transitionStatus === "entered" ? 1 : 0,
  });

  const springProps = useSpring({
    opacity: isIn ? 1 : 0,
  });

  const delayProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isIn ? 1 : 0,
    },
    delay: 1000,
    config: {
      duration: 750,
    },
  });

  const data = useStaticQuery(graphql`
    query ProjectImagesQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project-item" } }, id: {} }
      ) {
        edges {
          node {
            id
            frontmatter {
              featuredimage
            }
            fields {
              slug
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

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

  const handleResize = () => {
    let temp = getComputedStyle(firstChildRef.current).width.split("px");
    if (temp.length > 1) {
      setImageWidth(parseInt(temp[0]));
    }
  };

  return (
    <div className="title-screen-page">
      <IndexLayout isIn={isIn} exit={exit} entry={entry}>
        <animated.div style={transitionProps} className="margin-index-page">
          <animated.div
            style={springProps}
            className="title-name-holder"
            onMouseEnter={() => setHoveredOver(true)}
            onMouseLeave={() => setHoveredOver(false)}
          >
            <h1
              className={[
                "title-header",
                "first-name",
                hoveredOver ? "hovered" : "",
              ].join(" ")}
            >
              Sophie
            </h1>
            <h1
              className={["title-header", hoveredOver ? "hovered" : ""].join(
                " "
              )}
            >
              Studio
            </h1>
          </animated.div>
          <Slider
            width={imageWidth}
            style={delayProps}
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
                      <TransitionLink
                        to={edge.node.fields.slug}
                        exit={{
                          length: 0.5,
                          state: {
                            pathname: edge.node.fields.slug,
                          },
                        }}
                        entry={{
                          delay: 0.5,
                          state: {
                            pathname: edge.node.fields.slug,
                          },
                        }}
                      >
                        <SliderImage
                          src={imageURLTransform(
                            edge.node.frontmatter.featuredimage
                          )}
                        ></SliderImage>
                      </TransitionLink>
                    </div>
                  );
                }

                return (
                  <div key={edge.node.id}>
                    <TransitionLink
                      to={edge.node.fields.slug}
                      exit={{
                        length: 0.5,
                        state: {
                          pathname: edge.node.fields.slug,
                        },
                      }}
                      entry={{
                        delay: 0.5,
                        state: {
                          pathname: edge.node.fields.slug,
                        },
                      }}
                    >
                      <SliderImage
                        src={edge.node.frontmatter.featuredimage}
                      ></SliderImage>
                    </TransitionLink>
                  </div>
                );
              })}
            {data &&
              data.allMarkdownRemark.edges.map(edge => {
                return (
                  <div key={"repeat" + edge.node.id}>
                    <TransitionLink
                      to={edge.node.fields.slug}
                      exit={{
                        length: 0.5,
                        state: {
                          pathname: edge.node.fields.slug,
                        },
                      }}
                      entry={{
                        delay: 0.5,
                        state: {
                          pathname: edge.node.fields.slug,
                        },
                      }}
                    >
                      <SliderImage
                        src={edge.node.frontmatter.featuredimage}
                      ></SliderImage>
                    </TransitionLink>
                  </div>
                );
              })}
          </Slider>
        </animated.div>
      </IndexLayout>
    </div>
  );
};

export default IndexPage;
