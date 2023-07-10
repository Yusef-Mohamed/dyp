import React from "react";
import ImageWithPopup from "../../ImageWithPopup/ImageWithPopup";

function EventsSec() {
  return (
    <div className="content-container  align-items-center">
      <div data-aos="fade-down" data-aos-duration="2000">
        <h2 className="my-4 text-center heading">Events</h2>
        <div className="border-bottom mx-auto "></div>
        <p className=" text-center">
          <b>See the world </b>with us! iGenius hosts and attends numerous
          events throughout the year all around the world.
        </p>
      </div>
      <div className="col-sm img-container py-3 px-0">
        <div
          style={{ gridColumn: "span 2" }}
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          {" "}
          <ImageWithPopup
            src={
              "https://igeniusglobal.com/static/media/IgnitePublicBanner.d8a9f705a6fed0e5d1fd.png"
            }
            class={"w-100 h-100 my-2 my-sm-0"}
            youtube={
              "https://youtu.be/tPSHBw_2huc?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ"
            }
          />
        </div>
        <div data-aos="fade-down-left" data-aos-duration="2000">
          <ImageWithPopup
            src={
              "https://igeniusglobal.com/static/media/egypt-homepage.4ba3b7c2caa0a915893a.png"
            }
            class={"w-100 h-100 my-2 my-sm-0"}
            youtube={
              "https://youtu.be/tPSHBw_2huc?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ"
            }
          />
        </div>
        <div
          style={{ gridRow: "span 2" }}
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <ImageWithPopup
            src={
              "https://igeniusglobal.com/static/media/womens-gala-homepage.fdeb91479a2f61463bf3.png"
            }
            class={"w-100 h-100 my-2 my-sm-0"}
            youtube={
              "https://youtu.be/tPSHBw_2huc?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ"
            }
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <ImageWithPopup
            src={
              "https://igeniusglobal.com/static/media/punta-cana-homepage.a0699ffaee62f8926710.png"
            }
            class={"w-100 h-100 my-2 my-sm-0"}
            youtube={
              "https://youtu.be/tPSHBw_2huc?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ"
            }
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <ImageWithPopup
            src={
              "https://igeniusglobal.com/static/media/jamaica-homepage.379a1caa122c9b392f53.png"
            }
            class={"w-100 h-100 my-2 my-sm-0"}
            youtube={
              "https://youtu.be/tPSHBw_2huc?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ"
            }
          />
        </div>
        <div
          style={{ gridColumn: "span 2" }}
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <ImageWithPopup
            src={
              "https://igeniusglobal.com/static/media/island-crete-homepage.a43d175bd44cf3a60e53.png"
            }
            class={"w-100 h-100 "}
            youtube={
              "https://youtu.be/tPSHBw_2huc?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default EventsSec;
