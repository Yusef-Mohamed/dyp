import React, { useEffect } from "react";
import logo from "../../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FiShoppingCart } from "react-icons/fi";
import home from "../../assets/sidebarlogos/home.png";
import analytic from "../../assets/sidebarlogos/analytic.png";
import courses from "../../assets/sidebarlogos/courses.png";
import live from "../../assets/sidebarlogos/live.png";
import store from "../../assets/sidebarlogos/store.png";
import packagee from "../../assets/sidebarlogos/package.png";
import { AppContext } from "../../App";
const Side = () => {
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
  const history = useNavigate();

  const clickOnHome = (step) => {
    setCurrentStep(step);
    sessionStorage.setItem("step", step);
    history("/loginHome");
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
      .then((data) => {
        console.log(data);
        setNum(data.numberOfCartItems);
      });
  }, []);
  const clickOnSide = (step) => {
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
    <div className="side">
      <img src={logo} alt="" className="logo" />
      <div className="list">
        <div className="momo" onClick={() => clickOnSide("home")}>
          <img src={home} alt="home" /> <span>Home</span>
        </div>
        <h2>education</h2>
        <div className="momo" onClick={() => clickOnSide("education")}>
          <img src={courses} alt="courses" /> <span>Courses</span>
        </div>
        <div className="momo" onClick={() => clickOnSide("analytic")}>
          <img src={analytic} alt="analytic" /> <span>Analytic</span>
        </div>
        <div className="momo" onClick={() => clickOnSide("lives")}>
          <img src={live} alt="lives" /> <span>Lives</span>
        </div>
        <div className="momo" onClick={() => clickOnSide("packages")}>
          <img src={packagee} alt="Package" style={{ width: "25px" }} />{" "}
          <span>Choose Package</span>
        </div>
        <h2>store</h2>
        <div className="momo" onClick={() => clickOnSide("store")}>
          <img src={store} alt="Store" style={{ width: "25px" }} />{" "}
          <span>Store</span>
        </div>
        <span onClick={() => clickOnHome("cart")} className="momo  mobile-only">
          {num} <FiShoppingCart /> Cart
        </span>
        <span
          className="user mobile-only momo"
          onClick={() => clickOnHome("profile")}
        >
          <FaUserAlt /> Profile
        </span>
        <div className="user mobile-only momo">
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
    </div>
  );
};

export default Side;
