import React from "react";

import "../styles/index.sass";

const AnimationCircle = () => {
    return (
        <div className="animation-container">
            <div className="circle outer-circle">
            <div className="animation-circle-orbit outer">
                <div className="dot dot-outer" />
            </div>
            </div>
            <div className="circle ellipse"></div>
            <div className="headline-container">
                <div className="headline">
                    Viktoriia Komarovska, frontend developer
                </div>
            </div>
            <div className="viewport">
               <span className="moveX">
                   <div className="moveY"><span className="elipsoid"></span></div>
               </span>
            </div>
        </div>
    );
};

export default AnimationCircle;
