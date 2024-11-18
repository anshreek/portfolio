import React from "react";
import "./Contact.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
          <div style={{ flex: 1 }}>
            <ContactInfo
              iconUrl="/assets/images/mail_3856684.png"
              text="anshreekakde86@gmail.com"
            />
            <ContactInfo
              iconUrl="/assets/images/github_5968896.png"
              text="https://github.com/anshreek"
            />
          </div>
          <div style={{ flex: 1 }}></div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
