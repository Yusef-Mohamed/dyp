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
import Analytic from '../analytic/Analytic'
import Lives from '../lives/Lives'
import Packages from '../packages/Packages'

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
          case "analytic" :
             return <Analytic /> ;  
          case "lives" :
            return <Lives />
          case "packages" :
            return <Packages />
      
         
          default:
        }
      };

      const logOut =()=>{
        sessionStorage.clear()
        setLogin(false)
        sessionStorage.setItem("step","home")

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
 
    </DropdownButton>
            </div>

     
            </div>
        {displayStep(currentStep)}
        </div>
    </div>
  )
}

export default LoginHome
