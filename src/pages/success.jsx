import React from "react";

import "../styles/index.sass";

const Success = () => {
  const [icon, setIcon] = React.useState(
    "/assets/images/right-arrow-white.svg"
  );
  return (
    <div className="contacts-section-container">
      <h1 className="headline-classic contacts-section-headline">Success!</h1>
      <div className="description-classic contacts-section-description">
        <p>
          Your form has been successfully submitted. Thank you for your
          interest!
        </p>
        <a className="submit-button-container back-button" href="/">
          <button
            type="submit"
            className="button special"
            onMouseEnter={() => setIcon("/assets/images/right-arrow.svg")}
            onMouseLeave={() => setIcon("/assets/images/right-arrow-white.svg")}
          >
            <span className="button-label">Go back</span>
            <img className="button-arrow-icon" src={icon} alt="arrow" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Success;
