import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../assets/logs.png";
import './hflogin.css'
import { AppContext } from '../../App';
const HomeForKogin = () => {
  const {route}=useContext(AppContext)
  const [posts,setPosts]=useState([])
  const [ads,setAds]=useState([])

  useEffect(()=>{
    let token =sessionStorage.getItem("token")
fetch(`${route}/analytic/posts/public`,{
  headers:{
    "Authorization" : `Bearer ${token}`
  }
})
.then(res=>res.json())
.then(data=>setPosts(data.data))
fetch(`${route}/advertisements`,{
  headers:{
    "Authorization" : `Bearer ${token}`
  }
})
.then(res=>res.json())
.then(data=>setAds(data.data))
  },[])
  return (
  <div className="home-for-login">
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
    <div className="second">
      <div className="left">
        {posts.map((post)=>{
          return(
            <div className="post" key={post._id}>
              <div className="cont">{post.content}</div>
              {post.image ? <img src={post.image} /> : null}
            </div>
          )
        })}
      </div>
      <div className="right">
        <h2>Ads</h2>
      {ads.map((ad)=>{
        return(
          <a href={ad.link} className="ad" key={ad._id}>
            <img src={ad.image} alt="" />
          </a>
        )
      })}
      </div>
    </div>
  </div>
  )
}

export default HomeForKogin
