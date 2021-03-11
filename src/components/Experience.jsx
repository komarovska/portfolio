import React from "react";

import "../styles/index.sass";
import { graphql, StaticQuery } from "gatsby";
import * as PropTypes from "prop-types";

const Experience = (props) => {
  const [activeElement, setActiveElement] = React.useState(0);
  return (
    <StaticQuery
      query={graphql`
        query ExperienceSectionQuery {
          experience: datoCmsExperienceSection {
            headline
            timeline {
              timePeriod
              activityName
              activityDescription
            }
          }
        }
      `}
      render={(data) => (
        <a id="experience">
          <div className="experience-section-container">
            <h1 className="headline-classic experience-section-container-headline">
              {data.experience.headline}
            </h1>
            <div className="experience-section-container-inner">
              <div className="experience-section-skills-container">
                <div className="experience-section-timeline">
                  <div className="experience-section-timeline-items-container">
                    {data.experience.timeline.map((timelineItem, index) => {
                      return (
                        <div
                          key={timelineItem.timePeriod}
                          className={`experience-section-timeline-item ${
                            index === activeElement &&
                            "experience-section-timeline-item-active"
                          }`}
                          onClick={() => setActiveElement(index)}
                        >
                          <span>{timelineItem.timePeriod}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="experience-section-timeline-line-container">
                    <div className="experience-section-timeline-line" />
                    <div
                      className={`experience-section-timeline-circle experience-section-timeline-circle-${activeElement}`}
                    />
                  </div>
                <div className="experience-section-timeline-items-container">
                  {data.experience.timeline.map((timelineItem, index) => {
                    return (
                      <div
                        key={timelineItem.activityName}
                        onClick={() => setActiveElement(index)}
                        className={`experience-section-timeline-item ${
                          index === activeElement &&
                          "experience-section-timeline-item-active"
                        }`}
                      >
                        <span>{timelineItem.activityName}</span>
                      </div>
                    );
                  })}
                </div>
                </div>
                <div className="experience-section-languages-container">
                  <p><strong>Languages: </strong>
                    English, Ukrainian, Russian, German.
                  </p>
                </div>
              </div>
              <div className="experience-section-timeline-description-container">
                {data.experience.timeline.map((timelineItem, index) => {
                  return (
                    <div
                      key={timelineItem.activityName}
                      className={`experience-section-timeline-description ${
                        index === activeElement &&
                        "experience-section-timeline-description-active"
                      }`}
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: timelineItem.activityDescription,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
      )}
    />
  );
};

export default Experience;

Experience.propTypes = {
  data: {
    experience: {
      headline: PropTypes.string,
      timeline: PropTypes.arrayOf(
        PropTypes.shape({
          timePeriod: PropTypes.string,
          activityName: PropTypes.string,
          activityDescription: PropTypes.string,
        })
      ),
    },
  },
};
