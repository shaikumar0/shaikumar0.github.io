import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-text">
          Have a project in mind or just want to connect? Feel free to reach out!
        </p>

        <div className="contact-links">
          <a href="https://github.com/shaikumar0" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shaik-umar-400947290/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>

        <p className="contact-email">shaikumar14363@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
