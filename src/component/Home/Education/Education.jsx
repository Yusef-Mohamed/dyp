import React from "react";
import ImageWithPopup from "../../ImageWithPopup/ImageWithPopup";

function Education() {
  return (
    <div className="content-container row align-items-center">
      <div
        className="col-sm p-0"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <ImageWithPopup
          src={
            "https://igeniusglobal.com/static/media/newIgeniusHomeOverview.207333d6451a3aa9df30.png"
          }
          class={"w-100"}
          youtube={"https://youtu.be/SvKDtzJ157M"}
        />
      </div>
      <div
        className="col-sm p-0 pl-sm-5"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className="my-4 text-center text-sm-left heading">
          Education & Tools
        </h2>
        <div className="border-bottom mx-auto mx-sm-3"></div>
        <p>
          <b>iGenius offers a variety of education and tools</b> for the
          financial markets. Our experts provide market research and host live
          training sessions.
        </p>
      </div>
    </div>
  );
}

export default Education;
