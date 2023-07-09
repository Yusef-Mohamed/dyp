import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="contactUs">
      <div className="layout"></div>
      <div className="contact container">
        <h1 className="display-5 display-md-5 display-lg-3">Get In Touch</h1>
        <div className="row">
          <div className="col-md-6 contactItem">
            <img
              src="https://igeniusglobal.com/static/media/contact-email-icon.c0e0e0d7477fabbbd9d43c5e1fd13947.svg"
              alt=""
            />
            <div>
              <h5>Email</h5>
              <p>support@igeniusglobal.com</p>
            </div>
          </div>
          <div className="col-md-6 contactItem">
            <img
              src="https://igeniusglobal.com/static/media/contact-phone-icon.d6b3ab835863a5a8ad61da3a8d5cb2c2.svg"
              alt=""
            />
            <div>
              <h5>Phone</h5>
              <p>1-801-939-3580</p>
            </div>
          </div>
          <div className="col-md-6 contactItem">
            <img
              src="https://igeniusglobal.com/static/media/contact-location-icon.80ba69616027e5cb5a19b969f96fa20f.svg"
              alt=""
            />
            <div>
              <h5>Headquarters</h5>
              <p>459 North 300 West Suite 15B Kaysville, UT 84037</p>
            </div>
          </div>
          <div className="col-md-6 contactItem">
            <img
              src="https://igeniusglobal.com/static/media/contact-location-icon.80ba69616027e5cb5a19b969f96fa20f.svg"
              alt=""
            />
            <div>
              <h5>Europe Headquarters</h5>
              <p>
                23 Rue Royale 690001 Lyon 844672105 R.C.S. Lyon Established
                12/17/18
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
