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
              <a
                href="mailto:wealthmakers.helpcenter@gmail.com"
                style={{ whiteSpace: "wrap" }}
              >
                wealthmakers.helpcenter@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-6 contactItem">
            <img
              src="https://igeniusglobal.com/static/media/contact-phone-icon.d6b3ab835863a5a8ad61da3a8d5cb2c2.svg"
              alt=""
            />
            <div>
              <h5>WhatsApp</h5>
              <a
                href="https://wa.me/message/IOYQFZS6IDWHC1"
                target="_blank"
                rel="noreferrer"
              >
                +49 1520 4845414
              </a>
            </div>
          </div>
          <div className="col-md-6 contactItem">
            <img
              src="https://igeniusglobal.com/static/media/contact-location-icon.80ba69616027e5cb5a19b969f96fa20f.svg"
              alt=""
            />
            <div>
              <h5>Deutschland</h5>
              <p>Konstanzenstraße .64 90439 Nürnberg Deutschland</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
