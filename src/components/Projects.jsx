import React from "react";
import * as PropTypes from "prop-types";
import AnimationCircle from "./AnimationCircle";

import "../styles/index.sass";
import { graphql, StaticQuery } from "gatsby";

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsSectionQuery {
          projectsSection: datoCmsProjectsSection {
            headline
          }
        }
      `}
      render={(data) => (
        <div className="projects-container">
          {data.projectsSection.headline}
        </div>
      )}
    />
  );
};

export default Projects;

Projects.propTypes = {
  data: {
    projectSection: {
      headline: PropTypes.string
    }
  }
};
