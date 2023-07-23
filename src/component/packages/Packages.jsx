import React, { useState,useEffect, useContext } from 'react'
import './packages.css'
import { AppContext } from '../../App'

const Packages = () => {
    const [packs,setPacks]=useState([])
    const {route ,token}=useContext(AppContext)
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
          
            console.log(data.data)
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
                <div className="buy">Buy This Package</div>
            </div>
        )
    })}
   </div>
  )
}

export default Packages
