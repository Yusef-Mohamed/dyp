import React from "react";
import "./ContactUs.css";
import { MdAlternateEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
function ContactUs() {
  return (
    <div className="contactUs">
      <div className="layout"></div>
      <div className="contact container">
        <h1 className="display-5 display-md-5 display-lg-3">Get In Touch</h1>
        <div className="row">
          <div className="col-md-6 contactItem">
            <div className="icon">
              <MdAlternateEmail color="black" size={52} />
            </div>
            <div>
              <h5>Email</h5>
              <a href="mailto:wealthmakers.helpcenter@gmail.com">
                wealthmakers.helpcenter@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-6 contactItem">
            <div className="icon">
              <BsWhatsapp color="black" size={52} />
            </div>

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
            <div className="icon">
              <GrLocation color="black" size={52} />
            </div>

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
