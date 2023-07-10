import React from "react";

function Details() {
  const counters = document.querySelectorAll(".countt");
  let details = document.querySelector(".details");
  window.onscroll = function () {
    // Skills Offset Top
    let skillsOffsetTop = details.offsetTop;
    // Skills outer high
    let skillsOuterHeight = details.offsetHeight;
    // Window Hight
    let widonwHight = this.innerHeight;
    // Calc
    // Window scroll Top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - widonwHight) {
      if (!counters[0].textContent) {
        counters.forEach((counter) => {
          let startValue = 0;
          let endValue = parseInt(counter.getAttribute("data-value"));
          let duration = Math.floor(5000 / endValue);
          let counterInt = setInterval(() => {
            startValue += 1;
            counter.textContent = startValue;
            if (startValue == endValue) {
              clearInterval(counterInt);
            }
          }, duration);
        });
      }
    }
  };
  return (
    <div className="py-5 bg-white details">
      <div className="content-container d-lg-flex py-5">
        <div
          className="mx-auto "
          style={{ width: "400px" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="https://media.istockphoto.com/id/1346351275/photo/planet-earth-globe-north-pole-arctic-ocean-and-greenland.jpg?s=612x612&w=0&k=20&c=TSbPyK3-9YdYYDZbjhNlnDz4YoBZmgAEfnXST4biEZM="
            alt=""
            className="w-100"
          />
        </div>
        <div className="row " data-aos="fade-left" data-aos-duration="1000">
          <div className="col-6 p-0">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Countries
            </h2>
            <h3
              style={{ fontSize: "30px" }}
              className="text-center countt"
              data-value={123}
            ></h3>
          </div>
          <div className="col-6 p-0">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Products
            </h2>
            <h3
              style={{ fontSize: "30px" }}
              className="text-center countt"
              data-value={22}
            ></h3>
          </div>
          <div className="col-6 p-0 mt-5">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Educational Videos
            </h2>
            <h3
              style={{ fontSize: "30px" }}
              className="text-center countt"
              data-value={2500}
            ></h3>
          </div>
          <div className="col-6 p-0 mt-5">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Weekly Live Sessions
            </h2>
            <h3
              data-value={85}
              style={{ fontSize: "30px" }}
              className="text-center countt"
            ></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
