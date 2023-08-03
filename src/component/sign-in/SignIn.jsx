import React, { useContext } from 'react'
import './sign.css'
import { useState } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
    const history =useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [country,setCountry]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const {route,setRoute}=useContext(AppContext)
    const {loader,setLoader}=useContext(AppContext)
    const {messageError}=useContext(AppContext)
const handleName =(e)=>{
    setName(e.target.value)
}
const handleCountry =(e)=>{
    setCountry(e.target.value)
}
const handleConfirmPassword =(e)=>{
    setConfirmPassword(e.target.value)
}
const handleEmail =(e)=>{
    setEmail(e.target.value)
}
const handlePassword =(e)=>{
    setPassword(e.target.value)
}

const handleSign = async(e)=>{
    e.preventDefault()
    setLoader(true)

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('password', password);
    formData.append('passwordConfirm', confirmPassword);

    try {
        const response = await fetch(`${route}/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name : name ,
            email :email ,
            country : country ,
            password : password ,
            passwordConfirm : confirmPassword
          })
        })
        .then(res=>res.json())
        if (response.data) {
            setLoader(false)
         history("/activate")
         sessionStorage.setItem("token",response.token)
         console.log(response)
        } else {
            setLoader(false)
            console.log(response)
            messageError("Try Again with Another Data")
        }
      } catch (error) {
      
        setLoader(false)
      
      }


}
  return (
  <div className="sign">
    <div className="container">
    <form class="form" onSubmit={handleSign}>
    <span class="signup">Sign Up</span>
    <input type="text" placeholder="Name" value={name} onChange={handleName} class="form--input" /> 
    <input type="email" value={email} onChange={handleEmail} placeholder="Email address" class="form--input" /> 
    <input type="text" value={country} onChange={handleCountry} placeholder="Egypt" class="form--input" /> 
    <input type="password" value={password} onChange={handlePassword} placeholder="Password" class="form--input" />
    <input type="text" value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirm Password" class="form--input" /> 
 

    <button class="form--submit" type='submit'>
        Sign up
    </button>
</form>
    </div>
  </div>
  )
}

export default SignIn
