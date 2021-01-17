import React from 'react';
import AnimationCircle from './AnimationCircle';

import '../styles/index.sass';

const Stage = () => (
  <div className="stage-container">
    <picture className="avatar-container">
      <img src="/assets/images/avatar_black_and_white.jpg" alt="black and white picture of a girl" />
    </picture>
    <AnimationCircle />
  </div>
);

export default Stage;
