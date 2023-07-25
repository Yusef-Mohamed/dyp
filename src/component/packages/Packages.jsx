import React, { useState,useEffect, useContext } from 'react'
import './packages.css'
import { AppContext } from '../../App'

const Packages = () => {
    const [packs,setPacks]=useState([])
    const [copon,setCopon]=useState("")
    const {route ,token ,setLoader}=useContext(AppContext)


    const buyPack =(id)=>{
      
      fetch(`${route}/education/orders/checkout-session/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body : JSON.stringify({
          coupon : "Dwd"
        })
    
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
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
