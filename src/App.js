import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { createContext } from "react";
import React, { useContext } from "react";
import Nav from "./component/nav-bar/Nav";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Login from "./component/login/Login";
import Signin from "./component/sign-in/SignIn";
import ContactUs from "./component/ContactUs/ContactUs";
import Polises from "./component/Polises/Polises";
import Privacy from "./component/Polises/Privacy";
import Compliance from "./component/Polises/Compliance";
import Purchaseterms from "./component/Polises/Purchaseterms";
import Distributoragreement from "./component/Polises/Distributoragreement";
import Privacypolicy from "./component/Polises/Privacypolicy";
import Activate from "./component/activation/Activate";
import AboutUs from "./component/AboutUS/AboutUs";


export const AppContext = createContext();

function App() {
  const [loader, setLoader] = useState(false);
  const [route, setRoute] = useState("https://api.wealthmakers-fx.com/api/v1");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    let timeout;
    if (showMessage) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showMessage]);
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
      }}
    >
      <div className="App">
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

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/polises" element={<Polises />} />
          <Route path="/polises/compliance" element={<Compliance />} />
          <Route path="/polises/purchaseterms" element={<Purchaseterms />} />
          <Route path="/activate" element={<Activate />} />
          <Route
            path="/polises/distributoragreement"
            element={<Distributoragreement />}
          />
          <Route path="/polises/privacypolicy" element={<Privacypolicy />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
