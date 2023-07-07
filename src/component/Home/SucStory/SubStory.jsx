import React from "react";

function SubStory() {
  return (
    <div className="content-container  align-items-center">
      <div>
        <h2 className="my-4 text-center heading">Success Stories</h2>
        <div className="border-bottom mx-auto "></div>
        <p className=" text-center">
          <b>Impacting lives</b> all around the world! Hear what some of our
          members have to say.
        </p>
      </div>
      <div className="row my-5">
        <div className="col-sm-4 p-0">
          <img
            src="https://igeniusglobal.com/static/media/Larger Testimonial thumbnails-03.f700e2795c184d262ee9.png"
            alt=""
            className="w-100"
          />
        </div>
        <div className="col-sm-4 p-0">
          <img
            src="https://igeniusglobal.com/static/media/Larger Testimonial thumbnails-03.f700e2795c184d262ee9.png"
            alt=""
            className="w-100 mx-sm-3 my-3 my-sm-0"
          />
        </div>
        <div className="col-sm-4 p-0">
          <img
            src="https://igeniusglobal.com/static/media/Larger Testimonial thumbnails-03.f700e2795c184d262ee9.png"
            alt=""
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default SubStory;
