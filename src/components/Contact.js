import React from "react";
import logo2 from "../images/logo2.png";

export default function Contact() {
  return (
    <>
      <div className="container contact-form">
        <div className="contact-image">
          <img src={logo2} alt="contact" />
        </div>
        <form method="post">
          <h3>Contact Us</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="button"
                  name="btnSubmit"
                  className="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  width="100%"
                  height="150px"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
