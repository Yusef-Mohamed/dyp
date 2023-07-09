import React from "react";
import ImageWithPopup from "../ImageWithPopup/ImageWithPopup";

function Cares() {
  return (
    <div className="content-container row align-items-center py-5">
      <div className="col-sm p-0">
        <ImageWithPopup
          src={
            "https://igeniusglobal.com/static/media/newIgeniusHomeOverview.207333d6451a3aa9df30.png"
          }
          class={"w-100"}
          youtube={"https://youtu.be/SvKDtzJ157M"}
        />
      </div>
      <div className="col-sm p-0 pl-sm-5">
        <img
          src="https://igeniusglobal.com/static/media/igenius-cares-logo.84fad53572b33833c06b.png"
          alt=""
          className="w-50"
        />
        <div className="border-bottom mx-auto mx-sm-3"></div>
        <p>
          <b>iGenius Cares is on a mission to fight hunger,</b>and is teaming up
          with Kids Against Hunger.
        </p>
      </div>
    </div>
  );
}

export default Cares;
