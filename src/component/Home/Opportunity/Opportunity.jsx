import React from "react";
import ImageWithPopup from "../../ImageWithPopup/ImageWithPopup";

function Opportunity() {
  return (
    <div className="content-container row align-items-center py-5">
      <div
        className="col-sm p-0 pr-sm-5"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="my-4 text-center text-sm-left heading">Opportunity</h2>
        <div className="border-bottom mx-auto mx-sm-3"></div>
        <p>
          <b>iGenius compensates distributors</b>for sharing our products rather
          than spend large amounts of money on advertising.
        </p>
      </div>
      <div className="col-sm p-0" data-aos="fade-left" data-aos-duration="1000">
        <ImageWithPopup
          src={
            "https://igeniusglobal.com/static/media/newIgeniusHomeOverview.207333d6451a3aa9df30.png"
          }
          class={"w-100"}
          youtube={"https://youtu.be/SvKDtzJ157M"}
        />
      </div>
    </div>
  );
}

export default Opportunity;
