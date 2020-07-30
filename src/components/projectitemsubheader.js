import React from "react";
import { FaYoutube, FaLink, FaInstagram, FaSpotify } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const ProjectItemSubheader = ({
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
  const springProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isIn ? 1 : 0,
    },
    config: {
      duration: 600,
    },
  });

  return (
    <animated.div style={springProps} className="project-item-subheader">
      <div className="subheader-grid">
        <div className="subheader-title col-3 column-start-2">
          <h2>
            {title} {subtitle && " | " + subtitle}
          </h2>
        </div>
        <div className="social-media col-1">
          {link && <FaLink></FaLink>}
          {youtubelink && <FaYoutube></FaYoutube>}
          {instagramlink && <FaInstagram></FaInstagram>}
          {spotifylink && <FaSpotify></FaSpotify>}
        </div>
        <div className="project-information col-3">
          <div className="project-subitem-item">
            <p>
              {tags.map((tag, index) => {
                if (!index) {
                  return tag;
                }
                return " | " + tag;
              })}
            </p>
          </div>
          <div className="project-subitem-item">
            <p>${doodle} DOODLE</p>
          </div>
          <div className="project-subitem-item">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="subheader-description-container">
        <div className="subheader-description">
          <p>{description}</p>
        </div>
      </div>
    </animated.div>
  );
};

ProjectItemSubheader.defaultProps = {
  title: "",
  subtitle: "",
  doodle: 0,
  tags: [],
  description: "No description provided.",
  link: "",
  youtubelink: "",
  instagramlink: "",
  spotifylink: "",
};

export default ProjectItemSubheader;
