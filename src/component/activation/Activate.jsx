import React, { useContext, useState } from 'react'
import './active.css'
import { AppContext } from '../../App'

const Activate = () => {
    const [code,setCode]=useState("")
    const {route,setRoute}=useContext(AppContext)
    const {loader,setLoader}=useContext(AppContext)
    const {messageError}=useContext(AppContext)
    const handleCode =(e)=>{
        setCode(e.target.value)
    }


    const submitCode =()=>{
    setLoader(true)
fetch(`${route}/auth/verifyEmail`,{
    method : "POST" ,
    body : JSON.stringify({
        verifyCode : code
    })
})
.then(res=>res.json())
.then(data=>{
console.log(data)
setLoader(false)

})


    }
  return (
   <div className="activate">
    <div className="container">

    <div class="subscribe">
    <p>Activate Code</p>
    <input placeholder="CODE" class="subscribe-input" value={code} onChange={handleCode}/>
    <br />
    <div onClick={submitCode} class="submit-btn">SUBMIT</div>
  </div>

 

    </div>
   </div>
  )
}

export default Activate
