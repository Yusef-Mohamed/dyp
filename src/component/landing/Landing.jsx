import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  const conntainer = useRef();
  const vid = useRef();
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  useEffect(() => {
    fetch(`https://api.wealthmakers-fx.com/api/v1/landingPage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.data.map((e) => {
          if (e.isDefault) {
            setUrl(e.videoUrl);
            setLoading(false);
          }
        })
      );
  }, []);
  return (
    <div className={`landing ${loading ? "loading" : ""}`}>
      <div style={{ width: "100%", overflow: "hidden" }} ref={conntainer}>
        <video
          ref={vid}
          autoPlay
          className="maaaain"
          muted
          loop
          src={url}
          style={{ width: "100%" }}
        ></video>
      </div>
      <div
        className="holder"
        onMouseEnter={(e) => vid.current.pause()}
        onMouseLeave={(e) => {
          vid.current.play();
          document.querySelector(".maaaain").style.transformOrigin = `center`;
          document.querySelector(".maaaain").style.transform = "scale(1)";
        }}
        onMouseMove={(e) => {
          if ("ontouchstart" in window || navigator.maxTouchPoints) {
            document.querySelector(".maaaain").style.transformOrigin = `center`;
            document.querySelector(".maaaain").style.transform = "scale(1)";
          } else {
            let react = conntainer.current.getBoundingClientRect();
            const x = e.clientX - react.left;
            const y = e.clientY - react.top;
            document.querySelector(
              ".maaaain"
            ).style.transformOrigin = `${x}px ${y}px`;
            document.querySelector(".maaaain").style.transform = "scale(1.5)";
          }
        }}
      >
        <div
          className="container-landing"
          data-aos="fade-up"
          style={{ zIndex: "10" }}
          data-aos-duration="1000"
        >
          <h1 className="heading">اشعر بالتميز</h1>
          <p className="supheading">من الصفر الي الاحتراف</p>
          <Link to={"/login"}>ابدا الان </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
