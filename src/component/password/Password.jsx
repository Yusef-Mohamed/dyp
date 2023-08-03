import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import './password.css'

function Password() {
  const { setLoader, route, token } = useContext(AppContext);
  
  const [err, setErr] = useState("");
  const nav = useNavigate();
  const id = sessionStorage.getItem("id");
  const [userData, setUserData] = useState({});
 const [current,setCurrent] =useState("")
 const [password,setPassword] =useState("")
 const [confirm,setConfirm] =useState("")
  useEffect(() => {
    fetch(`${route}/users/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handelSubmit = function (e) {
    e.preventDefault();
    setLoader(true);

    const formData = new FormData();
    formData.append("currentPassword" ,current)
    formData.append("password" ,password)
    formData.append("passwordConfirm" ,confirm)
 
   
    fetch(`${route}/users/changeMyPassword`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentPassword : current ,
        password : password ,
        passwordConfirm : confirm
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
       
        if (data.data) {
            sessionStorage.clear()
          nav("/login");
          fetch(`${route}/auth/logout`,{
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
       
        }
    else {
            setErr(data.errors[0].msg);
          }
        setLoader(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="password">
      <h2>change password</h2>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className="input-group">
          <label>Current Password</label>
          <input
            placeholder={`password`}
            type="password"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>New Password</label>
          <input
            placeholder={`New `}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            placeholder={`confirm password`}
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
   
    
   
        {err && <p className="error">{err}</p>}

        <button type="submit" className="submit">
          Edit
        </button>
      </form>
    </div>
  );
}

export default Password;
