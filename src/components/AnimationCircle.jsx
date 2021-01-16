import React from 'react';

import '../styles/index.sass';

const AnimationCircle = () => (
  <div className="animation-container">
    <div className="circle outer-circle">
      <div className="animation-circle-orbit outer">
        <div className="dot dot-outer" />
      </div>
    </div>
    <div className="circle ellipse" />
    <div className="headline-container">
      <div className="headline">Viktoriia Komarovska, frontend developer</div>
    </div>
    <div className="viewport">
      <span className="moveX">
        <div className="moveY">
          <span className="elipsoid" />
        </div>
      </span>
    </div>
    <div className="stage_description">
      I am a devoted software engineer with solid experience and real passion towards programming.
      I can become a member of your development team as well as help you to make your dream project live.
    </div>
    <div className="dot dot-animated dot-large" />
    <div className="dot dot-animated dot-small" />
    <div className="oval-empty" />
  </div>
);

export default AnimationCircle;
