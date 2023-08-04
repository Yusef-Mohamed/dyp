import React, { useContext, useEffect } from "react";
import Side from "../side/Side";
import "./login-home.css";
import { useState } from "react";
import { AppContext } from "../../App";
import { AiFillHome } from "react-icons/ai";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Route, useNavigate } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HomeForKogin from "../homPgaeFOrLogin/HomeForKogin";
import EduCategs from "../educationCategory/EduCategs";
import Courses from "../courses/Courses";
import Analytic from "../analytic/Analytic";
import Lives from "../lives/Lives";
import Packages from "../packages/Packages";
import Store from "../store/Store";
import Profile from "../profile/Profile";
import Cart from "../cart/Cart";
import Footer from "../Footer/Footer";

const LoginHome = () => {
  const { currentStep, setCurrentStep } = useContext(AppContext);
  const { userName, setUserName, route, num, setNum } = useContext(AppContext);
  const { login, setLogin, token } = useContext(AppContext);

  const history = useNavigate();

  const displayStep = (step) => {
    switch (step) {
      case "home":
        return <HomeForKogin />;
      case "education":
        return <EduCategs />;
      case "courses":
        return <Courses />;
      case "analytic":
        return <Analytic />;
      case "lives":
        return <Lives />;
      case "packages":
        return <Packages />;
      case "store":
        return <Store />;
      case "profile":
        return <Profile />;
      case "cart":
        return <Cart />;

      default:
    }
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

  const clickOnHome = (step) => {
    setCurrentStep(step);
    sessionStorage.setItem("step", step);
  };
  useEffect(() => {
    window.onpopstate = () => {
      history("/loginHome");
    };

    if (sessionStorage.getItem("step")) {
      setCurrentStep(sessionStorage.getItem("step"));
    }

    fetch(`${route}/store/cart`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setNum(data.numberOfCartItems));
  }, []);
  return (
    <div className="login-home">
      <div
        className="sideControler"
        onClick={() =>
          document.querySelector(".sideControler").classList.remove("open")
        }
      >
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
          <span
            className="mobile-only"
            onClick={() =>
              document.querySelector(".sideControler").classList.add("open")
            }
          >
            <FaBars size={32} />
          </span>
          <span
            onClick={() => clickOnHome("cart")}
            className="cart-icon pc-only"
          >
            <div className="num">{num}</div>
            <FiShoppingCart />
          </span>
          <span onClick={() => clickOnHome("home")} className=" pc-only">
            <AiFillHome />
          </span>
          <div className="user pc-only">
            <span onClick={() => clickOnHome("profile")}>
              <FaUserAlt />
            </span>
            <DropdownButton id="dropdown-basic-button" title={userName}>
              <Dropdown.Item>
                <Link onClick={logOut} to="/">
                  Log Out
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        {displayStep(currentStep)}
        <Footer />
      </div>
    </div>
  );
};

export default LoginHome;
