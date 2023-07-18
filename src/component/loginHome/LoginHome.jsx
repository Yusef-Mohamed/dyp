import React, { useContext, useEffect } from 'react'
import Side from '../side/Side'
import './login-home.css'
import { useState } from 'react'
import { AppContext } from '../../App'
import {AiFillHome } from 'react-icons/ai';
import {FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import HomeForKogin from '../homPgaeFOrLogin/HomeForKogin'
import EduCategs from '../educationCategory/EduCategs'
import Courses from '../courses/Courses'

const LoginHome = () => {
const {currentStep,setCurrentStep}=useContext(AppContext)
const {userName, setUserName}=useContext(AppContext)
const {login, setLogin}=useContext(AppContext)
const history =useNavigate()

    const displayStep = (step) => {
        switch (step) {
          case "home":
            return <HomeForKogin />;
          case "education":
            return <EduCategs />;
          case "courses":
            return <Courses />;
      
         
          default:
        }
      };

      const logOut =()=>{
        sessionStorage.clear()
        setLogin(false)

      }
      
    const clickOnHome =(step)=>{
      setCurrentStep(step)
      sessionStorage.setItem("step",step)
    }
      useEffect(()=>{
       
            window.onpopstate = () => {
              history("/loginHome")
            };

           if(sessionStorage.getItem("step")){
            setCurrentStep(sessionStorage.getItem("step"))
           }
          
      },[])
  return (
    <div className="login-home">
            <Side />
        <div className="container">
            <div className="top-nav">
                <span onClick={()=>clickOnHome("home")}>

            <AiFillHome />
                </span>
            <div className="user">
                <span><FaUserAlt/></span>

            <DropdownButton id="dropdown-basic-button" title={userName}>
      <Dropdown.Item ><Link onClick={logOut} to="/">Log Out</Link></Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
            </div>

     
            </div>
        {displayStep(currentStep)}
        </div>
    </div>
  )
}

export default LoginHome
