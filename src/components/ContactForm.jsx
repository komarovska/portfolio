import React from "react";

import "../styles/index.sass";

const ContactForm = (props) => {
  const [icon, setIcon] = React.useState(
    "/assets/images/right-arrow-white.svg"
  );
  const formStyle = {
    textAlign: "left",
  };
  const buttonsStyle = {
    margin: "1rem",
    textAlign: "center",
  };
  return (
    <div className="contact-form-container">
      <form
        style={formStyle}
        className="form"
        method="post"
        action="https://www.flexyform.com/f/0cd65ef995654029ff5c20784aa4c54aa5a56259"
      >
        <div className="contact-form-text">
          <span>Hi, my name is</span>
          <input required type="text" name="fullname" placeholder="your name" />
          <span>and I would like to talk about</span>{" "}
          <input required type="text" name="topic" placeholder="topic" />
          {/*<select>*/}
          {/*  <option disabled selected value>*/}
          {/*    {" "}*/}
          {/*    -- select an option --{" "}*/}
          {/*  </option>*/}
          {/*  <option name="action" id="job" value="job">*/}
          {/*    Job*/}
          {/*  </option>*/}
          {/*  <option name="action" id="freelance" value="freelance">*/}
          {/*    Freelance*/}
          {/*  </option>*/}
          {/*  <option name="action" id="mentorship" value="mentorship">*/}
          {/*    Mentorship*/}
          {/*  </option>*/}
          {/*  <option name="action" id="consultation" value="consultation">*/}
          {/*    Consultation*/}
          {/*  </option>*/}
          {/*</select>*/}
          <br />
          <span>You can reach me at</span>
          <input
            required
            type="email"
            name="email"
            placeholder="your email"
          />{" "}
          <span>or</span>{" "}
          <input required type="tel" name="phone" placeholder="your phone" />
          {/*. I also would like to say*/}
          {/*<textarea*/}
          {/*  name="message"*/}
          {/*  rows="1"*/}
          {/*  placeholder="Your message"*/}
          {/*></textarea>*/}
        </div>
        <div className="submit-button-container">
          <button
            type="submit"
            className="button special"
            onMouseEnter={() => setIcon("/assets/images/right-arrow.svg")}
            onMouseLeave={() =>
              setIcon("/assets/images/right-arrow-white.svg")
            }
          >
            <span className="button-label">Send</span>
            <img className="button-arrow-icon" src={icon} alt="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
