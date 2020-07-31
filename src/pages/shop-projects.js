import React, { useState, useEffect, useRef } from "react";
import { useSpring, useSprings, useChain, animated } from "react-spring";
import { useTemplateProps, useFloatingLetters } from "../animation/animations";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import { Link, useStaticQuery, graphql } from "gatsby";
import ProjectGridItem from "../components/projectgriditem";

const ShiftedLetter = styled(animated.span)`
  display: inline-block;
`;

const ShopProducts = ({ transitionStatus }) => {
  const data = useStaticQuery(graphql`
    query ProjectShopQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project-item" } }, id: {} }
      ) {
        edges {
          node {
            id
            frontmatter {
              featuredimage
              doodle
              tags
              title
              subtitle
              year
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log(data);
  const [isIn, setIsIn] = useState(false);

  const [
    leftSpring,
    leftSprings,
    rightSpring,
    rightSprings,
  ] = useFloatingLetters("shop", "projects");

  const templateProps = useTemplateProps(isIn, 600, 1100);

  useEffect(() => {
    setIsIn(transitionStatus === "entering" || transitionStatus === "entered");
  }, [transitionStatus]);

  return (
    <div className="shop-projects-page">
      <animated.div className="shop-projects-layout" style={templateProps}>
        <Layout subheader={"Shop Projects"} isIn={isIn}>
          <div className="shop-projects-inner-page">
            <div className="shop-projects-grid">
              {data.allMarkdownRemark.edges.map(item => {
                return (
                  <ProjectGridItem
                    image={item.node.frontmatter.featuredimage}
                    tags={item.node.frontmatter.tags}
                    year={item.node.frontmatter.year}
                    title={item.node.frontmatter.title}
                    doodle={item.node.frontmatter.doodle}
                    subtitle={item.node.frontmatter.subtitle}
                    slug={item.node.fields.slug}
                  ></ProjectGridItem>
                );
              })}
            </div>
          </div>
        </Layout>
      </animated.div>
      <div>
        <animated.h1 className="floating-header" style={leftSpring}>
          {leftSprings.map((props, i) => {
            return (
              <ShiftedLetter key={i} style={props}>
                {"shop".split("")[i]}
              </ShiftedLetter>
            );
          })}
        </animated.h1>
        <animated.h1 className="floating-header" style={rightSpring}>
          {rightSprings.map((props, i) => {
            return (
              <ShiftedLetter key={i} style={props}>
                {"projects".split("")[i]}
              </ShiftedLetter>
            );
          })}
        </animated.h1>
      </div>
    </div>
  );
};

export default ShopProducts;
