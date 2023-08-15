import React, { useContext, useEffect, useState } from "react";
import catImage from "../../assets/download.jpg";
import "./edu.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../assets/logs.png";
import one from "../../assets/panars/1-15.webp";
import two from "../../assets/panars/1-16.webp";
import three from "../../assets/panars/1-17.webp";
const EduCategs = () => {
  const [categs, setCategs] = useState([]);
  const { currentStep, setCurrentStep } = useContext(AppContext);
  const { categoryId, setCategoryId } = useContext(AppContext);
  const { route, setRoute } = useContext(AppContext);

  const clickOnCateg = (id) => {
    setCurrentStep("courses");
    sessionStorage.setItem("step", "courses");
    setCategoryId(id);
    sessionStorage.setItem("catId", id);
  };
  useEffect(() => {
    fetch(`${route}/education/categories`)
      .then((res) => res.json())
      .then((data) => setCategs(data.data));
  }, []);
  return (
    <>
      <Carousel style={{ marginTop: "40px" }}>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={two} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={three} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="edu-categ">
        <div className="row" style={{ justifyContent: "center" }}>
          {categs.map((cat) => {
            return (
              <div className="col-lg-3 col-md-4 col-6">
                <div
                  onClick={() => clickOnCateg(cat._id)}
                  className="category"
                  key={cat._id}
                >
                  {cat.image ? <img src={cat.image} /> : <img src={catImage} />}
                  <span>{cat.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EduCategs;
