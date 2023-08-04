import React, { useEffect } from "react";
import logo from "../../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { FaUniversity, FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { GiPlainDagger } from "react-icons/gi";
import { AppContext } from "../../App";
import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FiShoppingCart } from "react-icons/fi";
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
      <img src={logo} alt="" />
      <div className="list">
        <div className="momo" onClick={() => clickOnSide("home")}>
          <AiFillHome /> Home
        </div>
        <h2>education</h2>
        <div className="momo" onClick={() => clickOnSide("education")}>
          <FaUniversity /> Courses
        </div>
        <div className="momo" onClick={() => clickOnSide("analytic")}>
          <SiGoogleanalytics /> Analytic
        </div>
        <div className="momo" onClick={() => clickOnSide("lives")}>
          <MdLiveTv /> Lives
        </div>
        <div className="momo" onClick={() => clickOnSide("packages")}>
          <GiPlainDagger /> Choose Package
        </div>
        <h2>store</h2>
        <div className="momo" onClick={() => clickOnSide("store")}>
          <FaStore /> Store
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
