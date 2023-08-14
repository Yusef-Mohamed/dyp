import React from "react";
import ImageWithPopup from "../../ImageWithPopup/ImageWithPopup";
import succ from "../../../assets/succ.png";
function SubStory() {
  return (
    <div className="content-container  align-items-center">
      <div data-aos="fade-left" data-aos-duration="2000">
        <h2 className="my-4 text-center heading">قصص النجاح</h2>
        <div className="border-bottom mx-auto "></div>
        <p className=" text-center" style={{ fontSize: "20px" }}>
          هكذا تصنع عائلتنا قصص النجاح
        </p>
      </div>
      <div className="row my-5">
        <div className="col-sm-4 p-0"> </div>
        <div className="col-sm-4 p-0">
          <div
            className="px-2"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <ImageWithPopup
              src={succ}
              class={"w-100 "}
              youtube={"https://www.youtube.com/shorts/0gfjSykfiEA"}
            />
          </div>
        </div>
        <div className="col-sm-4 p-0"></div>
      </div>
    </div>
  );
}

export default SubStory;
