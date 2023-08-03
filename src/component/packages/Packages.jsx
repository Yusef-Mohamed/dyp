import React, { useState,useEffect, useContext } from 'react'
import './packages.css'
import { AppContext } from '../../App'
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../assets/logs.png";
const Packages = () => {
    const [packs,setPacks]=useState([])
    const [copon,setCopon]=useState("")
    const {route ,token ,setLoader}=useContext(AppContext)


    const buyPack =(id)=>{
      setLoader(true)
      fetch(`${route}/education/orders/checkout-session/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body : JSON.stringify({
          coupon : copon
        })
    
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.status=='success'){
          window.location.href=data.session.url
          setLoader(false)
        }
     

        console.log(data)
      })
    }
    useEffect(()=>{
        fetch(`${route}/education/packages`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.json())
          .then((data) => {
          
       
            setPacks(data.data)
           
           
          });

          
    
    },[])
  return (
   <div className="packages">
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
    {packs.map((pack)=>{
        return(
            <div className="pack card" key={pack._id}>
                <h3>{pack.title}</h3>
                <div className="desc">{pack.description}</div>
                <div className="foot">
                    <div className="price">price : {pack.price} $</div>
                    <div className="exp">exp time : {pack.expirationTime} day</div>
                </div>
                <div className="buy" onClick={()=>buyPack(pack._id)}>Buy This Package</div>
            </div>
        )
    })}
   </div>
  )
}

export default Packages
