import React, { useContext, useState } from "react";
import "./active.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Activate = () => {
  const [code, setCode] = useState("");
  const { route, setRoute } = useContext(AppContext);
  const { loader, setLoader } = useContext(AppContext);
  const { messageError } = useContext(AppContext);
  const history = useNavigate();
  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const submitCode = () => {
    setLoader(true);
    fetch(`${route}/auth/verifyEmail`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verifyCode: code,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("about", data.data.about);
          sessionStorage.setItem("userName", data.data.name);
          sessionStorage.setItem("login", true);
          sessionStorage.setItem("active", data.data.emailVerified);
          sessionStorage.setItem("email", data.data.email);
          sessionStorage.setItem("phone", data.data.phone);
          sessionStorage.setItem("role", data.data.role);
          sessionStorage.setItem("id", data.data._id);

          history("/loginHome");
          setLoader(false);
        } else {
          messageError(data.message);
          setLoader(false);
        }
      });
  };

  const resendCode = () => {
    setLoader(true);
    fetch(`${route}/auth/sendVerifyCode`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.succes === "true") {
          setLoader(false);
          messageError("code sent");
        } else {
          setLoader(false);
          messageError(data.message);
        }
      });
  };
  return (
    <div className="activate">
      <div className="container">
        <div class="subscribe">
          <p>Activate Code</p>

          <input
            placeholder="CODE"
            class="subscribe-input"
            value={code}
            onChange={handleCode}
          />
          <br />
          <div onClick={submitCode} class="submit-btn">
            SUBMIT
          </div>
          <span className="resend" onClick={resendCode}>
            resend code
          </span>
        </div>
      </div>
    </div>
  );
};

export default Activate;
