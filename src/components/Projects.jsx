import React, { useState } from "react";
import * as PropTypes from "prop-types";
import AnimationCircle from "./AnimationCircle";

import "../styles/index.sass";
import { graphql, StaticQuery } from "gatsby";
import ProjectDetailsPopup from "./ProjectDetailsPopup";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [detailsPopupOpened, toggleDetailsPopup] = useState(false);
  const [technologiesPopupOpened, toggleTechnologiesPopup] = useState(false);

  const getClassname = (index, length) => {
    if (index === currentProject) {
      return "current";
    }
    if (
      (index === currentProject + 1 ||
        (index === 0 && currentProject === length - 1)) &&
      !(index === length - 1 && currentProject === 0)
    ) {
      return "next";
    }
    if (
      index === currentProject - 1 ||
      (index === length - 1 && currentProject === 0)
    ) {
      return "previous";
    }
    return "";
  };

  return (
    <StaticQuery
      query={graphql`
        query ProjectsSectionQuery {
          projectsSection: datoCmsProjectsSection {
            headline
            detailsButton
            technologiesButton
            projects {
              name
              description
              mainImage {
                url
                alt
              }
              descriptionDetailed
              additionalImages {
                url
                alt
              }
              projectTechnologies {
                name
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <a id="projects">
            <div
              className={`projects-container projects-container-${currentProject}`}
            >
              {data?.projectsSection?.projects?.map((item, index) => (
                <div
                  className={`projects-container-inner projects-container-inner-${getClassname(
                    index,
                    data.projectsSection.projects.length
                  )} projects-container-inner-${index}`}
                >
                  <div className="project-overview">
                    <div className="project-overview-inner">
                      <h1 className="project-name">{item.name}</h1>
                      <div
                        className="project-description"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></div>
                      <div className="projects-slider">
                        <p
                          className="project-details-button"
                          onClick={() => toggleDetailsPopup(!detailsPopupOpened)}
                        >
                          {data.projectsSection.detailsButton}
                        </p>
                        <p className="project-technologies-button" onClick={() => toggleTechnologiesPopup(!technologiesPopupOpened)}>
                          {data.projectsSection.technologiesButton}
                        </p>
                      </div>
                    </div>
                    <div className="projects-container-bottom-line">
                      <div className="projects-container-headline">
                        {data.projectsSection.headline}
                      </div>
                      <p className="project-number-mobile">{`0${index + 1}`}</p>
                      <div className="project-arrows">
                        <img
                          className="project-arrows-icon project-arrows-icon-left"
                          src="/assets/images/right-arrow.svg"
                          onClick={() => {
                            if (index > 0) {
                              if (index > 1) {
                                setCurrentProject(currentProject - 1);
                              }
                              setCurrentProject(currentProject - 1);
                            } else {
                              setCurrentProject(
                                data.projectsSection.projects.length - 1
                              );
                            }
                          }}
                        />
                        <h1 className="project-name-small">{item.name}</h1>
                        <img
                          className="project-arrows-icon"
                          src="/assets/images/right-arrow.svg"
                          onClick={() => {
                            if (
                              data.projectsSection.projects.length - 1 >
                              index
                            ) {
                              setCurrentProject(currentProject + 1);
                            } else {
                              setCurrentProject(0);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <picture className="project-image-main">
                    <img src={item.mainImage.url} alt={item.mainImage.alt} />
                  </picture>
                  <div className="project-number-container">
                    <p className="project-number">{`0${index + 1}`}</p>
                  </div>
                  {detailsPopupOpened && index === currentProject && (
                    <ProjectDetailsPopup
                      onClose={toggleDetailsPopup}
                      headline={item.name}
                      descriptionDetailed={item.descriptionDetailed}
                      additionalImages={item.additionalImages}
                    />
                  )}
                  {technologiesPopupOpened && index === currentProject && (
                    <ProjectDetailsPopup
                      onClose={toggleTechnologiesPopup}
                      headline={item.name}
                      technologies={item.projectTechnologies}
                    />
                  )}
                </div>
              ))}
            </div>
          </a>
        );
      }}
    />
  );
};

export default Projects;

Projects.propTypes = {
  data: {
    projectsSection: {
      headline: PropTypes.string,
      detailsButton: PropTypes.string,
      technologiesButton: PropTypes.string,
      projects: {
        name: PropTypes.string,
        description: PropTypes.string,
        mainImage: {
          url: PropTypes.string,
          alt: PropTypes.string,
        },
        descriptionDetailed: PropTypes.string,
        additionalImages: {
          url: PropTypes.string,
          alt: PropTypes.string,
        },
        projectTechnologies: {
          name: PropTypes.string
        }
      },
    },
  },
};
