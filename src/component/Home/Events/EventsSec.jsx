import React from "react";

function EventsSec() {
  return (
    <div className="content-container  align-items-center">
      <div>
        <h2 className="my-4 text-center heading">Events</h2>
        <div className="border-bottom mx-auto "></div>
        <p className=" text-center">
          <b>See the world </b>with us! iGenius hosts and attends numerous
          events throughout the year all around the world.
        </p>
      </div>
      <div className="col-sm img-container py-3 px-0">
        <img
          src="https://igeniusglobal.com/static/media/IgnitePublicBanner.d8a9f705a6fed0e5d1fd.png"
          alt=""
          className="w-100 h-100 my-2 my-sm-0"
          style={{ gridColumn: "span 2" }}
        />
        <img
          src="https://igeniusglobal.com/static/media/egypt-homepage.4ba3b7c2caa0a915893a.png"
          alt=""
          className="w-100 h-100 mb-2 mb-sm-0"
        />
        <img
          src="https://igeniusglobal.com/static/media/womens-gala-homepage.fdeb91479a2f61463bf3.png"
          alt=""
          className="w-100 h-100 mb-2 mb-sm-0"
          style={{ gridRow: "span 2" }}
        />
        <img
          src="https://igeniusglobal.com/static/media/punta-cana-homepage.a0699ffaee62f8926710.png"
          alt=""
          className="w-100 h-100 mb-2 mb-sm-0"
        />
        <img
          src="https://igeniusglobal.com/static/media/jamaica-homepage.379a1caa122c9b392f53.png"
          alt=""
          className="w-100 h-100 mb-2 mb-sm-0 "
        />
        <img
          src="https://igeniusglobal.com/static/media/island-crete-homepage.a43d175bd44cf3a60e53.png"
          alt=""
          className="w-100 h-100 "
          style={{ gridColumn: "span 2" }}
        />
      </div>
    </div>
  );
}

export default EventsSec;
