import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
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
      className="text-white fw-bolder py-4"
    >
      <div className="content-container">
        <div className="row py-5">
          <div
            className="col-lg-5  text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              gap: "40px",
            }}
          >
            <img className="w-50 " src={logo} alt="" />
            <div className="flex">
              <a
                href="https://www.facebook.com/profile.php?id=100095054437735"
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <FaFacebookF size={30} color="#ffcc00" />
              </a>
              <a
                href="https://www.instagram.com/wealth_makers_official/?igshid=Y2I2MzMwZWM3ZA"
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <AiFillInstagram size={30} color="#ffcc00" />
              </a>
              <a
                href="https://twitter.com/Wealth_Makers_"
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <AiOutlineTwitter size={30} color="#ffcc00" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKlzTSsJBGg48ElLpUDT9rA"
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <AiFillYoutube size={30} color="#ffcc00" />
              </a>
              <a
                href="https://www.tiktok.com/@wealth_makers_official"
                target="_blank"
                rel="noreferrer"
                className="p-3"
              >
                <FaTiktok size={30} color="#ffcc00" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 row py-3">
            <div className="col-4">
              <h4>
                <Link to={"/polises"} className="hoverGold">
                  Polises
                </Link>
              </h4>
            </div>
            <div className="col-4">
              <h4>
                <Link to={"/aboutus"} className="hoverGold">
                  About Us
                </Link>
              </h4>
            </div>
            <div className="col-4">
              <h4>
                <Link to={"/contact"} className="hoverGold">
                  Contact Us
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
            src="data:image/png;base64,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"
            alt="PaymentMethods"
            style={{ height: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
