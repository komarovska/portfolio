import React from "react";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";

import "../styles/index.sass";

const ContactsSection = (props) => {
  return (
    <a id="contacts">
    <section className="contacts-section-container">
      <div className="contacts-section-headline-container">
        <h1 className="headline-classic">Contact me</h1>
        <p className="description-classic">Got any questions or cooperation suggestions? Let's get in touch!</p>
      </div>
      <div className="contacts-section-inner">
        <ContactForm />
        <Contacts />
      </div>
    </section>
    </a>
  );
};

export default ContactsSection;
