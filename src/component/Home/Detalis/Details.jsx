import React from "react";

function Details() {
  return (
    <div
      className="py-5"
      style={{
        background:
          "linear-gradient(rgb(242, 242, 242) 50%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="content-container d-flex py-5">
        <div className="mr-5" style={{ width: "400px" }}>
          ddd
        </div>
        <div className="row ">
          <div className="col-6 p-0">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Countries
            </h2>
            <h3 style={{ fontSize: "30px" }} className="text-center">
              123
            </h3>
          </div>
          <div className="col-6 p-0">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Products
            </h2>
            <h3 style={{ fontSize: "30px" }} className="text-center">
              22+
            </h3>
          </div>
          <div className="col-6 p-0 mt-5">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Educational Videos
            </h2>
            <h3 style={{ fontSize: "30px" }} className="text-center">
              2500+
            </h3>
          </div>
          <div className="col-6 p-0 mt-5">
            <h2
              style={{ fontSize: "25px", fontWeight: "400" }}
              className="text-center"
            >
              Weekly Live Sessions
            </h2>
            <h3 style={{ fontSize: "30px" }} className="text-center">
              85+
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
