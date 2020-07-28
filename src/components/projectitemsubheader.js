import React from "react";
import { FaYoutube } from "react-icons/fa";

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
}) => {
  return (
    <div className="project-item-subheader">
      <div className="subheader-grid">
        <div className="subheader-title col-3 column-start-2">
          <h2>
            {title} {subtitle && " | " + subtitle}
          </h2>
        </div>
        <div className="social-media col-1">
          <FaYoutube></FaYoutube>
          <FaYoutube></FaYoutube>
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
    </div>
  );
};

ProjectItemSubheader.defaultProps = {
  title: "",
  subtitle: "",
  doodle: 0,
  tags: [],
  description: "No description provided.",
};

export default ProjectItemSubheader;
