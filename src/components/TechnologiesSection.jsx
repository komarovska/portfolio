/* eslint-disable
jsx-a11y/anchor-has-content
jsx-a11y/anchor-is-valid
jsx-a11y/click-events-have-key-events
jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import * as PropTypes from "prop-types";

import "../styles/index.sass";

const TechnologiesSection = () => {
  const [cursorCoordinates, setCursorCoordinates] = useState({ x: 0, y: 0 });
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const cursor = document.querySelector(
  //     ".technologies-section-container-cursor"
  //   );
  //   console.log(cursor);
  //   let speed = 1;
  //   const createCustomCursor = (event) => {
  //     setMouseCoordinates({ x: event.pageX, y: event.pageY })
  //     let distX = mouseCoordinates.x - cursorCoordinates.x;
  //     let distY = mouseCoordinates.y - cursorCoordinates.y;
  //
  //     setCursorCoordinates({
  //       x: cursorCoordinates.x + distX * speed,
  //       y: cursorCoordinates.y + distY * speed,
  //     });
  //
  //     cursor.style.left = cursorCoordinates.x + "px";
  //     cursor.style.top = cursorCoordinates.y + "px";
  //     // const mouseX = event.pageX;
  //     // const mouseY = event.pageY;
  //     // setCursorCoordinates({ x: mouseX, y: mouseY });
  //     // cursor.style.left = mouseX + "px";
  //     // cursor.style.top = mouseY - 120 + "px";
  //   };
  //   document.addEventListener("mousemove", (event) => createCustomCursor(event));
  //   console.log(cursorCoordinates);
  //   return document.removeEventListener("mousemove", createCustomCursor);
  // }, [mouseCoordinates]);

  return (
    <StaticQuery
      query={graphql`
        query TechnologiesSectionQuery {
          technologies: datoCmsTechnologiesSection {
            keyTechnologies {
              name
            }
            secondaryTechnologies {
              name
            }
            complimentaryTechnologies {
              name
            }
          }
        }
      `}
      render={(data) => (
        <a id="technologies">
        <section className="technologies-section-container">
          {/*<div className="technologies-section-container-cursor" />*/}
          <div className="technologies-section">
            <div className="technologies-section-container-headline headline-classic">
              Technologies I use
            </div>
            {data.technologies.keyTechnologies.map((item, index) => (
              <div
                className={`technologies-section-grid-item technologies-section-grid-item-${
                  index + 1
                }`}
              >
                <div
                  className={`technologies-section-circle technologies-section-circle-${
                    index + 1
                  } technologies-section-circle-large`}
                >
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
            {data.technologies.secondaryTechnologies.map((item, index) => (
              <div
                className={`technologies-section-grid-item technologies-section-grid-item-${
                  index + 1 + data.technologies.keyTechnologies.length
                }`}
              >
                <div
                  className={`technologies-section-circle technologies-section-circle-${
                    index + 1 + data.technologies.keyTechnologies.length
                  } technologies-section-circle-medium`}
                >
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
            {data.technologies.complimentaryTechnologies.map((item, index) => (
              <div
                className={`technologies-section-grid-item technologies-section-grid-item-${
                  index +
                  1 +
                  data.technologies.keyTechnologies.length +
                  data.technologies.secondaryTechnologies.length
                }`}
              >
                <div
                  className={`technologies-section-circle technologies-section-circle-${
                    index +
                    1 +
                    data.technologies.keyTechnologies.length +
                    data.technologies.secondaryTechnologies.length
                  } technologies-section-circle-small`}
                >
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        </a>
      )}
    />
  );
};

export default TechnologiesSection;

TechnologiesSection.propTypes = {
  data: {
    technologies: {
      keyTechnologies: PropTypes.array,
      secondaryTechnologies: PropTypes.array,
      complimentaryTechnologies: PropTypes.array,
    },
  },
};
