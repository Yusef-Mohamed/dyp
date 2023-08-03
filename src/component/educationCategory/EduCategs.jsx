import React, { useContext, useEffect, useState } from 'react'
import catImage from '../../assets/download.jpg'
import './edu.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../assets/logs.png";

const EduCategs = () => {
    const [categs,setCategs]=useState([])
    const {currentStep,setCurrentStep}=useContext(AppContext)
    const {categoryId,setCategoryId}=useContext(AppContext)
    const {route,setRoute}=useContext(AppContext)

    const clickOnCateg =(id)=>{
        setCurrentStep("courses")
        sessionStorage.setItem("step","courses")
        setCategoryId(id)
        sessionStorage.setItem("catId",id)
    }
    useEffect(()=>{
        fetch(`${route}/education/categories`)
        .then(res=>res.json())
        .then(data=>setCategs(data.data))

    },[])
  return (
 <div className="edu-categ">
         <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Third slide"
        />
   
      </Carousel.Item>
    </Carousel>
{categs.map((cat=>{
    return(
        <div onClick={()=>clickOnCateg(cat._id)} className="category" key={cat._id}>
            {cat.image ? <img src={cat.image} /> : <img src={catImage} />}
            <span>{cat.title}</span>
        </div>
    )
}))}
 </div>
  )
}

export default EduCategs
