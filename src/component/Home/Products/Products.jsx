import React from "react";
import oneLogo from "../../../assets/products/logos/1.webp";
import analysisLogo from "../../../assets/products/logos/analysis.webp";
import liveLogo from "../../../assets/products/logos/live.webp";
import schoolLogo from "../../../assets/products/logos/school.webp";
import skLogo from "../../../assets/products/logos/sk.webp";
import telegramLogo from "../../../assets/products/logos/telegram.webp";
function Products() {
  return (
    <div className="py-5">
      <div className="content-container row align-items-center py-5">
        <div
          className="col-md-5 p-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
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
            gridTemplateColumns: "repeat(3, 1fr)",
            display: "grid",
            gap: "20px",
          }}
        >
          <img
            src={oneLogo}
            alt=""
            className="w-100"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
          <img src={skLogo} alt="" className="w-100" data-aos="fade-down" />
          <img
            src={schoolLogo}
            alt=""
            className="w-100"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
          <img
            src={analysisLogo}
            alt=""
            className="w-100"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
          <img
            src={liveLogo}
            alt=""
            className="w-100"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
          <img
            src={telegramLogo}
            alt=""
            className="w-100"
            data-aos="fade-down"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
