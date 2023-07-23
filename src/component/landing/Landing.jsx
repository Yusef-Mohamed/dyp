import React, { useCallback, useEffect, useRef, useState } from "react";
import "./landing.css";
const Landing = () => {
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
      <div>
        <video
          ref={vid}
          autoPlay
          muted
          loop
          src={url}
          style={{ maxWidth: "100%", height: "100%" }}
        ></video>
      </div>
      <div
        className="holder"
        onMouseEnter={(e) => vid.current.pause()}
        onMouseLeave={(e) => vid.current.play()}
      >
        <div
          className="container"
          data-aos="fade-up"
          style={{ zIndex: "10" }}
          data-aos-duration="1000"
        >
          <h1 className="heading">Live smarter </h1>
          <p className="supheading">Enhance your lifestyle.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
