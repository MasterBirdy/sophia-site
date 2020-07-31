import React from "react";
import { Link } from "gatsby";

const ProjectGridItem = ({
  image,
  title,
  tags,
  year,
  doodle,
  subtitle,
  slug,
}) => {
  return (
    <div className="shop-projects-grid-item">
      <Link to={slug}>
        <img src={image}></img>
      </Link>
      <p className="title">{`${title}${subtitle ? ` | ${subtitle}` : ``}`}</p>
      <div className="shop-projects-info">
        <span>{tags.join(" | ")}</span>
        <span>{`$${doodle} DOODLE`}</span>
      </div>
      <p className="year">{year}</p>
    </div>
  );
};

export default ProjectGridItem;
