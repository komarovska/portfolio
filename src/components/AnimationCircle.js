import React from "react";

import "../styles/index.sass";

const AnimationCircle = () => {
    return (
        <div className="animation-container">
            <div className="circle outer-circle"></div>
            <div className="animation-circle-orbit outer">
                <div className="dot dot-outer" />
            </div>
            <div className="circle inner-circle"></div>
            <div className="animation-circle-orbit inner">
                <div className="dot dot-inner" />
            </div>
            {/*<div className="deform">*/}
            {/*    <div className="rotate">*/}
            {/*        <div className="contr-rotate">*/}
            {/*            <div className="inner" />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default AnimationCircle;
