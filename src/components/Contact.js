import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="lg-heading contact">
          Contact<span className="text-secondary"> Me</span>
        </h1>
        <div className="contact boxes">
          <div className="contact-linkedin">
            <span className="text-secondary">
              <a href="https://www.linkedin.com/in/lflint/" target="_blank">
                LinkedIn
              </a>
            </span>
          </div>
          <div className="contact-email">
            <span className="text-secondary">Email:</span> lflint07@gmail.com
          </div>
          <div className="contact-resume">
            <span className="text-secondary">
              <a href="/images/Luke_Flint_Resume_09_2020_ekos.pdf" target="_blank">Resume</a>
              </span>
          </div>
        </div>
        <footer id="about-footer">Copyright &copy; 2020</footer>
      </div>
    </div>
  );
}

export default Contact;
