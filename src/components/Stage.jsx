import React from "react";
import * as PropTypes from "prop-types";
import AnimationCircle from "./AnimationCircle";

import "../styles/index.sass";
import { graphql, StaticQuery } from "gatsby";

const Stage = () => {
  return (
    <StaticQuery
      query={graphql`
        query StageQuery {
          stage: datoCmsStage {
            headline,
            description,
            avatar {
              url
              alt
            }
          }
        }
      `}
      render={(data) => (
        <div className="stage-container">
          <picture className="avatar-container">
            <img
              src={data.stage.avatar.url}
              alt="black and white picture of a girl"
            />
          </picture>
          <AnimationCircle content={{ headline: data.stage.headline, description: data.stage.description }} />
        </div>
      )}
    />
  );
};

export default Stage;

Stage.propTypes = {
  data: {
    stage: {
      avatar: {
        url: PropTypes.String,
        alt: PropTypes.String,
      }
    },
    headline: PropTypes.String,
    description: PropTypes.String,
  }
};
