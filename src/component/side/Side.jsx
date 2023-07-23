import React from 'react'
import logo from "../../assets/logs.png";
import { Link } from 'react-router-dom';
import {FaUniversity } from 'react-icons/fa';
import {AiFillHome } from 'react-icons/ai';
import {SiGoogleanalytics } from 'react-icons/si';
import {MdLiveTv } from 'react-icons/md';
import {GiPlainDagger} from 'react-icons/gi';
import { AppContext } from '../../App'
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
    
    <div className='momo' onClick={()=>clickOnSide("home")}><AiFillHome /> Home</div>
    <h2>education</h2>
    <div className='momo' onClick={()=>clickOnSide("education")}><FaUniversity /> Courses</div>
    <div className='momo' onClick={()=>clickOnSide("analytic")}><SiGoogleanalytics /> Analytic</div>
    <div className='momo' onClick={()=>clickOnSide("lives")}><MdLiveTv/> Lives</div>
    <div className='momo' onClick={()=>clickOnSide("packages")}><GiPlainDagger/> Choose Package</div>
    <h2>store</h2>

   


   

 
 
</div>
   </div>
  )
}

export default Side
