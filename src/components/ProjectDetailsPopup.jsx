import React from "react";
import { createPortal } from "react-dom";

import "../styles/index.sass";
import * as PropTypes from "prop-types";

const ProjectDetailsPopup = (props) => {
  const el = React.useRef(document.createElement("div"));

  React.useEffect(() => {
    el.current.id = "details-popup";
    document.body.appendChild(el.current);
    return () => {
      document.body.removeChild(el.current);
    };
  }, []);

  const handleClose = React.useCallback(() => {
    props.onClose(false);
  }, []);

  return createPortal(
    <div className="project-details-popup-overlay" onClick={handleClose}>
      <div
        className="project-details-popup"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          className="project-details-popup-cross-icon"
          src="/assets/images/cross-svgrepo-com.svg"
          onClick={handleClose}
        />
        <h3>{props.headline}</h3>
        {props.descriptionDetailed && (
          <div
            dangerouslySetInnerHTML={{ __html: props.descriptionDetailed }}
          />
        )}
        {props.technologies && (
          <div className="project-details-popup-technologies">
            <h5>Technologies used in this project:</h5>
            <ul>
              {props.technologies.map((technology) => (
                <li>{technology.name}</li>
              ))}
            </ul>
          </div>
        )}
        {props.additionalImages && (
          <div className="project-details-popup-image-gallery">
            {props.additionalImages.map((image) => (
              <img
                className="project-details-popup-image"
                src={image.url}
                alt={image.alt}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    el.current
  );
};

export default ProjectDetailsPopup;

ProjectDetailsPopup.propTypes = {
  onClose: PropTypes.func,
  headline: PropTypes.string,
  descriptionDetailed: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  additionalImages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
