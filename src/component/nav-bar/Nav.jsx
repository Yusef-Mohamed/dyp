import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
      <Link to="/">
            <img src={logo} alt="Logo"  className="logo"/>
          </Link>
        <div className="list">
        
          <Link onClick={showMenu} to="/">
            Home
          </Link>
          <Link onClick={showMenu} to="/about-us">
            member benifits
          </Link>

       
    <DropdownButton id="dropdown-basic-button" title="who we are">
      <Dropdown.Item > <Link onClick={showMenu} to={"/polises"}>Polises</Link></Dropdown.Item>
      <Dropdown.Item  > <Link onClick={showMenu} to={"/contact"}>ContactUs</Link></Dropdown.Item>
      <Dropdown.Item >   <Link onClick={showMenu} to={"/"}>Leadership</Link></Dropdown.Item>
      <Dropdown.Item >   <Link onClick={showMenu} to={"/"}>AboutUs</Link></Dropdown.Item>
    </DropdownButton>
        
          
            <Link className="login" onClick={showMenu} to="/login">
              Login
            </Link>
        </div>
  
      </div>
    </div>
  );
};

export default Nav;
