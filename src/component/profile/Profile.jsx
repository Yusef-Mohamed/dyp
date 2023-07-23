import React, { useContext, useEffect, useState } from 'react'
import './profile.css'
import profile from "../../assets/profile.png"
import { AppContext } from '../../App'

const Profile = () => {
    const [packs,setPacks]=useState([])
    const {route}=useContext(AppContext)

    useEffect(()=>{
fetch(`${route}/education/packages/myPackages`,{
    headers:{
        Authorization : `Bearer ${sessionStorage.getItem("token")}`
    }
})
.then(res=>res.json())
.then(data=>setPacks(data.packages))
    },[])
  return (
<div className="profile">
    <div className="top">
        <div className="img">
          
            {sessionStorage.getItem("profile") ? <img src={sessionStorage.getItem("profile")} /> : <img src={profile} />}
        </div>
        <div className="info">
            <h3>{sessionStorage.getItem("userName")}</h3>
            <div> {sessionStorage.getItem("role")}</div>
            <div> {sessionStorage.getItem("email")}</div>
            <div> {sessionStorage.getItem("phone")}</div>
        </div>
    </div>
        <h3>My Packages</h3>
    <div className="packs">
{packs.map((pack)=>{
    return(
        <div className="pack" key={pack._id}>
            <img src={pack.image} alt="" />
            <div>{pack.title}</div>
        </div>
    )
})}
    </div>
</div>
  )
}

export default Profile
