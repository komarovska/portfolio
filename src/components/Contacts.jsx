import React from "react";

import "../styles/index.sass";

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      <div className="contacts-container-inner">
        <div className="social-links-container">
          <a href="https://t.me/vi_lavender">
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
            <span>+380971638551</span>
          </a>
        </div>
        <div className="social-links-container">
          <a href="mailto:vkomarovska98@gmail.com">
            <div className="social-icons-container">
              <img className="social-icon" src="/assets/images/mail-icon.png" />
            </div>
            <span>vkomarovska98@gmail.com</span>
          </a>
        </div>
        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/vkomarovska/" target="_blank">
            <div className="social-icons-container">
              <img
                className="social-icon"
                src="/assets/images/linkedin-logo.png"
              />
            </div>
            <span>vkomarovska</span>
          </a>
        </div>
        <div className="social-links-container">
          <a href="https://www.facebook.com/vkomarovska/">
            <div className="social-icons-container">
              <img
                className="social-icon"
                src="/assets/images/facebook-icon.png"
              />
            </div>
            <span>vkomarovska</span>
          </a>
        </div>
        <div className="social-links-container">
          <a href="https://github.com/viktoriiakomarovska">
            <div className="social-icons-container">
              <img
                className="social-icon"
                src="/assets/images/github-icon.png"
              />
            </div>
            <span>viktoriiakomarovska</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
