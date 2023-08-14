import React from "react";
import "./polises.css";
import pdf from "../../assets/file-pdf.svg";
function Polises() {
  return (
    <div className="polises">
      <div className="layout"></div>
      <div className="contact container">
        <h1 className="display-5 display-md-5 display-lg-3">سياساتنا</h1>
        <div className="policies-container">
          <div></div>
          <a
            href="https://drive.google.com/file/d/108UDsPrCjCBLvy9WnQdQp3Qv3WAj95QM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="policie ">
              <img src={pdf} alt="" />
              <h6>السياسات والاحكام</h6>
            </div>
          </a>
          <div></div>

          <a
            href="https://drive.google.com/file/d/16HD6pDIHZQBVQA0c12W4tNVJUZvBeY6x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="policie ">
              <img src={pdf} alt="" />
              <h6>شروط الاستخدام</h6>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Polises;
