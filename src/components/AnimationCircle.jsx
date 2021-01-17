import React from 'react';
import * as PropTypes from 'prop-types'

import '../styles/index.sass';

const AnimationCircle = (props) => (
  <div className="animation-container">
    <div className="circle outer-circle">
      <div className="animation-circle-orbit outer">
        <div className="dot dot-outer" />
      </div>
    </div>
    <div className="circle ellipse" />
    <div className="headline-container">
      <div className="headline">{props.content.headline}</div>
    </div>
    <div className="viewport">
      <span className="moveX">
        <div className="moveY">
          <span className="elipsoid" />
        </div>
      </span>
    </div>
    <div className="stage_description">
      {props.content.description}
    </div>
    <div className="dot dot-animated dot-large" />
    <div className="dot dot-animated dot-small" />
    <div className="oval-empty" />
  </div>
);

export default AnimationCircle;

AnimationCircle.propTypes = {
  content: {
    headline: PropTypes.string,
    description: PropTypes.string,
  }
};
