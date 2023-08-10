import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import React, { useContext } from "react";
import Side from "../side/Side";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AppContext } from "../../App";
import MainComponent from "./MainComponent";

const ProductPage = () => {
  const history = useNavigate();

  const id = useParams().id;
  const {
    currentStep,
    setLogin,
    token,
    userName,
    num,
    setNum,
    setCurrentStep,
    route,
  } = useContext(AppContext);
  const clickOnHome = (step) => {
    console.log(0);
    setCurrentStep(step);
    sessionStorage.setItem("step", step);
    history("/loginHome");
  };
  const logOut = () => {
    sessionStorage.clear();
    setLogin(false);
    sessionStorage.setItem("step", "home");
    fetch(`${route}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <div className="login-home">
      <div className="sideControler">
        <div
          className="closing"
          onClick={() =>
            document.querySelector(".sideControler").classList.remove("open")
          }
        >
          X
        </div>
        <Side />
      </div>
      <div className="containerr">
        <div className="top-nav">
          <img
            src={logo}
            style={{ height: "50px", marginRight: "auto" }}
            alt=""
            className="mobile-only"
          />
          <span
            className="mobile-only"
            onClick={() =>
              document.querySelector(".sideControler").classList.add("open")
            }
          >
            <FaBars size={32} color="#ffcc00" />
          </span>
          <span
            onClick={() => clickOnHome("cart")}
            className="cart-icon pc-only"
          >
            <div className="num">{num}</div>
            <FiShoppingCart color="#ffcc00" />
          </span>
          <span onClick={() => clickOnHome("home")} className=" pc-only">
            <AiFillHome color="#ffcc00" />
          </span>
          <div className="user pc-only">
            <span onClick={() => clickOnHome("profile")}>
              <FaUserAlt color="#ffcc00" />
            </span>
            <DropdownButton
              id="dropdown-basic-button"
              variant="none"
              className="logoutDrop"
              title={userName}
            >
              <Dropdown.Item>
                <Link onClick={logOut} to="/">
                  Log Out
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <MainComponent />
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
