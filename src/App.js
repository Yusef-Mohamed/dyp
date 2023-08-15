import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Nav from "./component/nav-bar/Nav";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Login from "./component/login/Login";
import Signin from "./component/sign-in/SignIn";
import ContactUs from "./component/ContactUs/ContactUs";
import Polises from "./component/Polises/Polises";

import Activate from "./component/activation/Activate";
import AboutUs from "./component/AboutUS/AboutUs";
import Memberbenifits from "./component/Memberbenifits/Memberbenifits";
import Leadership from "./component/Leadership/Leadership";
import LoginHome from "./component/loginHome/LoginHome";
import Courses from "./component/courses/Courses";

import { BiLike } from "react-icons/bi";

import Products from "./component/products/Products";
import Edit from "./component/edit-profile/Edit";
import Password from "./component/password/Password";
import ProductPage from "./component/productPage/ProductPage";

export const AppContext = createContext();

function App() {
  // no inspect
  // function disableContextMenu(event) {
  //   event.preventDefault();
  // }

  // window.addEventListener("contextmenu", disableContextMenu);

  const [loader, setLoader] = useState(false);
  const [route, setRoute] = useState("https://api.wealthmakers-fx.com/api/v1");
  const [showMessage, setShowMessage] = useState(false);
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [currentStep, setCurrentStep] = useState("home");
  const [categoryId, setCategoryId] = useState("");
  const [done, setDone] = useState(false);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    let timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showMessage]);
  useEffect(() => {
    let timeout;
    if (done) {
      timeout = setTimeout(() => {
        setDone(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [done]);
  const messageError = (msg) => {
    setMessage(msg);
    setShowMessage(true);
  };
  useEffect(() => {
    setUserName(sessionStorage.getItem("userName"));
    setToken(sessionStorage.getItem("token"));
    // setUserId(sessionStorage.getItem("userId"));
    setLogin(sessionStorage.getItem("login"));
    // setUserEmail(sessionStorage.getItem("email"));
  }, [login]);

  return (
    <AppContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userId,
        setUserId,
        login,
        setLogin,
        userName,
        setUserName,
        messageError,
        token,
        setToken,
        loader,
        setLoader,
        route,
        setRoute,
        currentStep,
        setCurrentStep,
        categoryId,
        setCategoryId,
        num,
        setNum,
        done,
        setDone,
        refresh,
        setRefresh,
      }}
    >
      <div className="App">
        {done ? (
          <div data-aos="fade-left" data-aos-duration="500" className="done">
            <BiLike />
          </div>
        ) : null}
        {showMessage ? <div className="message">{message}</div> : null}
        {loader ? (
          <div className="loader-cont">
            <div id="wifi-loader">
              <svg class="circle-outer" viewBox="0 0 86 86">
                <circle class="back" cx="43" cy="43" r="40"></circle>
                <circle class="front" cx="43" cy="43" r="40"></circle>
                <circle class="new" cx="43" cy="43" r="40"></circle>
              </svg>
              <svg class="circle-middle" viewBox="0 0 60 60">
                <circle class="back" cx="30" cy="30" r="27"></circle>
                <circle class="front" cx="30" cy="30" r="27"></circle>
              </svg>
              <svg class="circle-inner" viewBox="0 0 34 34">
                <circle class="back" cx="17" cy="17" r="14"></circle>
                <circle class="front" cx="17" cy="17" r="14"></circle>
              </svg>
              <div class="text" data-text="loading"></div>
            </div>
          </div>
        ) : null}

        {login ? null : <Nav />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/polises" element={<Polises />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/memberbenifits" element={<Memberbenifits />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/products" element={<Products />} />
          <Route path="/loginHome" element={<LoginHome />} />
          <Route path="/loginHome/product/:id" element={<ProductPage />} />
          <Route path="/loginHome/edit" element={<Edit />} />
          <Route path="/loginHome/password" element={<Password />} />
          <Route
            path="/course/64afdcabb76f30db60b23568"
            element={<Courses />}
          />
        </Routes>
      </div>
      {login ? null : <Footer />}
    </AppContext.Provider>
  );
}

export default App;
