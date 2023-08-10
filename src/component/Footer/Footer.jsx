import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import stipeLogo from "../../assets/stripe.png";
import cryptopay from "../../assets/Cryptopay.jpg";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
function Footer() {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255) 0%, rgba(79, 80, 82, 0.25) 10%, rgba(79, 80, 82, 0.5) 25%, rgb(79, 80, 82) 100%)",
        position: "relative",
        zIndex: "3",
      }}
      className="text-white fw-bolder py-4 footer"
    >
      <div className="content-container">
        <div className="row py-5">
          <div
            className="col-lg-4  text-center py-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <img className="w-50 " src={logo} alt="" />
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100095054437735"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={30} color="#ffcc00" />
              </a>
              <a
                href="https://www.instagram.com/wealth_makers_official/?igshid=Y2I2MzMwZWM3ZA"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={30} color="#ffcc00" />
              </a>
              <a
                href="https://twitter.com/Wealth_Makers_"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter size={30} color="#ffcc00" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKlzTSsJBGg48ElLpUDT9rA"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube size={30} color="#ffcc00" />
              </a>
              <a
                href="https://www.tiktok.com/@wealth_makers_official"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok size={30} color="#ffcc00" />
              </a>
            </div>
          </div>
          <div className="col-lg-8 row py-3">
            <div className="col-4">
              <h4>
                <Link to={"/polises"} className="hoverGold">
                  Polises
                </Link>
              </h4>
              <ul style={{ listStyle: "none", margin: "10px", padding: "0" }}>
                <li>
                  <a
                    href="https://drive.google.com/file/d/108UDsPrCjCBLvy9WnQdQp3Qv3WAj95QM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverGold"
                  >
                    <h6>Policies & Procedures</h6>
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/16HD6pDIHZQBVQA0c12W4tNVJUZvBeY6x/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverGold"
                  >
                    <h6>Terms of Use</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h4>
                <Link to={"/contact"} className="hoverGold">
                  Contact Us
                </Link>
              </h4>
              <ul style={{ listStyle: "none", margin: "10px", padding: "0" }}>
                <li>
                  <a
                    href="mailto:wealthmakers.helpcenter@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverGold"
                  >
                    <h6>Email</h6>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/IOYQFZS6IDWHC1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverGold"
                  >
                    <h6>WhatsApp</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h4>
                <Link to={"/aboutus"} className="hoverGold">
                  About Us
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={stipeLogo}
            alt="PaymentMethods"
            style={{ height: "50px" }}
          />
          <img
            src={cryptopay}
            alt="PaymentMethods"
            style={{ height: "50px", margin: "0 10px " }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
