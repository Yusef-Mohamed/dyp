import React from "react";
import { Link } from "react-router-dom";
import "./polises.css";
import pdf from "../../assets/file-pdf.svg";
import link from "../../assets/link.svg";
function Polises() {
  return (
    <div className="polises">
      <div className="layout"></div>
      <div className="contact container">
        <h1 className="display-5 display-md-5 display-lg-3">Get In Touch</h1>
        <div className="policies-container">
          <Link to={"/polises/compliance"}>
            <div className="policie ">
              <img src={link} alt="" />
              <h6>Compliance & Regulatory</h6>
            </div>
          </Link>

          <div></div>
          <a
            href="../../assets/iGenius-Policies-Procedures.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="policie ">
              <img src={pdf} alt="" />
              <h6>Policies & Procedures</h6>
            </div>
          </a>
          <div></div>
          <Link to={"/polises/distributoragreement"}>
            <div className="policie ">
              <img src={link} alt="" />
              <h6>Distributor Agreement</h6>
            </div>
          </Link>
          <div></div>
          <Link to={"/polises/privacypolicy"}>
            <div className="policie ">
              <img src={link} alt="" />
              <h6>Privacy Policy</h6>
            </div>
          </Link>
          <div></div>
          <Link to={"/polises/purchaseterms"}>
            <div className="policie ">
              <img src={link} alt="" />
              <h6>Purchase Terms</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Polises;
