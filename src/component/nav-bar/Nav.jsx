import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { AppContext } from "../../App";
import logo from "../../assets/logs.png";
const Nav = () => {
  const { login, setLogin } = useContext(AppContext);
  const { messageError } = useContext(AppContext);

  const showMenu = () => {
    document.querySelector(".nav .container").classList.toggle("nav-active");
  };

  const logOut = () => {
    document.querySelector(".nav .container").classList.toggle("nav-active");
    setLogin(false);
    sessionStorage.clear();
  };

  const courses = (e) => {
    document.querySelector(".nav .container").classList.toggle("nav-active");
    if (!login) {
      e.preventDefault();
      messageError(" Please Login First");
    }
  };
  return (
    <div className="nav">
      <div className="mop-nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div id="menuToggle">
          <input onClick={showMenu} id="checkbox" type="checkbox" />
          <label class="toggle" for="checkbox">
            <div class="bar bar--top"></div>
            <div class="bar bar--middle"></div>
            <div class="bar bar--bottom"></div>
          </label>
        </div>
      </div>
      <div className="container">
        <div className="list">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="social">
          <Link onClick={showMenu} to="/">
            Home
          </Link>
          <Link onClick={showMenu} to="/about-us">
            member benifits
          </Link>

          <Link onClick={showMenu} to="conact">
            who we are{" "}
          </Link>

          {login ? (
            <Link onClick={logOut} className="login" to="/login">
              Log Out
            </Link>
          ) : (
            <Link className="login" onClick={showMenu} to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
