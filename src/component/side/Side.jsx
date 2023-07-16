import React from 'react'
import logo from "../../assets/logs.png";
import { Link } from 'react-router-dom';
import {FaUniversity } from 'react-icons/fa';
import {AiFillHome } from 'react-icons/ai';
import { AppContext } from '../../App'
import { useContext } from 'react';

const Side = () => {
    const {currentStep,setCurrentStep}=useContext(AppContext)

    const clickOnSide =(step)=>{
      setCurrentStep(step)
      sessionStorage.setItem("step",step)
    }
  return (
   <div className="side">
<img src={logo} alt="" />
<div className="list">
    
    <div onClick={()=>clickOnSide("home")}><AiFillHome /> Home</div>
    <div onClick={()=>clickOnSide("education")}><FaUniversity /> Education</div>



   

 
 
</div>
   </div>
  )
}

export default Side
