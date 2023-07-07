import React from "react";

function Products() {
  return (
    <div
      className="py-5"
      style={{
        background:
          "linear-gradient(rgb(242, 242, 242) 50%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="content-container row align-items-center py-5">
        <div className="col-md-5 p-0">
          <h2 className="my-4 text-center text-sm-left heading">Products</h2>
          <div className="border-bottom mx-auto mx-sm-3"></div>
          <p>
            <b>Access tools</b> that can help you reduce debt, repair and build
            your credit, manage your budgets, save money, improve your financial
            habits, and learn about the financial markets.
          </p>
        </div>
        <div
          className="col-md-7 p-0"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            display: "grid",
            gap: "20px",
          }}
        >
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
          <img
            src="https://igeniusglobal.com/static/media/newUniversityC.4ba4f543d7839f570e17.png"
            alt=""
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
