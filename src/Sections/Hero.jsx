import React from "react";

function Hero({ scollToRef, handleClick, scrollPricing }) {
  return (
    <div>
      <div className="flex  flex-wrap justify-center px-5 sm:px-20">
        <div className="flex-1 sm:order-1 order-2 about-kiri  ">
          <img
            src={require("../images/undraw1.png")}
            alt="People with chart"
            className="cust-main-img"
          />
        </div>
        <div className="flex-1 text-center sm:text-left  sm:order-2 order-1 about-kanan w-100 mt-8 sm:mt-24 ">
          <div className="main-text-wrapper sm:my-0 my-2">
            <h3 className="font-bold text-base sm:text-xl text-blue-500 tracking-wide mb-0  sm:mb-6">
              Lorem StartUp
            </h3>
            <p className="text-2xl cust-line-height sm:mr-12  sm:text-6xl mb-7 sm:mb-12 main-heading-text font-extrabold text-black">
              Manage <span> Your </span>Storage!{" "}
            </p>
            <a onClick={scrollPricing} className="btn-primary my-2">
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
