import React from "react";

import "../styles/index.sass";

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      {/*<h2>Get in touch</h2>*/}
      {/*<p>Feel free to contact me or fill in the form and I'll get back to you shortly.</p>*/}
      <div className="contacts-container-inner">
        <div className="social-links-container">
          <div className="social-icons-container">
            <img
              className="social-icon"
              src="/assets/images/telegram-icon.png"
            />
            <img
              className="social-icon"
              src="/assets/images/whatsapp-icon-black.svg"
            />
            <img />
          </div>
          +380971638551
        </div>
        <div className="social-links-container">
          <div className="social-icons-container">
            <img className="social-icon" src="/assets/images/mail-icon.png" />
          </div>
          <a href="mailto:vkomarovska98@gmail.com">vkomarovska98@gmail.com</a>
        </div>
        <div className="social-links-container">
          <div className="social-icons-container">
            <img
              className="social-icon"
              src="/assets/images/linkedin-logo.png"
            />
          </div>
          <a href="https://www.linkedin.com/in/vkomarovska/" target="_blank">
            vkomarovska
          </a>
        </div>
        <div className="social-links-container">
          <div className="social-icons-container">
            <img
              className="social-icon"
              src="/assets/images/facebook-icon.png"
            />
          </div>
          <a href="https://www.facebook.com/vkomarovska/">vkomarovska</a>
        </div>
        <div className="social-links-container">
          <div className="social-icons-container">
            <img className="social-icon" src="/assets/images/github-icon.png" />
          </div>
          <a href="https://github.com/viktoriiakomarovska">
            viktoriiakomarovska
          </a>
          {/*<a href="https://github.com/komarovska">*/}
          {/*  komarovska*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
