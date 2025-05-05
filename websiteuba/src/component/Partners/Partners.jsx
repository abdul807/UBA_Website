import React from "react";

const Partners = () => {
  return (
    <section id="partners">
      <div className="bg-blue-900 text-center py-5 h-80 relative w-full">
        <div className="heading uppercase text-2xl font-bold text-white">
          Our Partners
        </div>
        <div className="max-w-4xl mx-auto text-white ">
          <h1 className="sm:text-4xl sm:font-bold p-4">
            {" "}
            At AmaliTech, our partnerships are the cornerstone of our mission to
            connect IT talent with global markets.
          </h1>
          <div className="absolute z-100 ml-0 h-30   flex sm:flex-wrap sm:gap-2 bg-white sm:w-[60%] sm:mt-9  sm:h-60 justify-center items-center w-60 sm:-ml-15 ml-23 top-50 shadow-lg p-4 text-black">
            <div className="border-1 border-red-900">hello world</div>
            <div className="border-1 border-red-900">hello world</div>
            <div className="border-1 border-red-900">hello world</div>
            <div className="border-1 border-red-900">hello world</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
