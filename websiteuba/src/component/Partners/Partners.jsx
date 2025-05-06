import React from "react";
import image1 from "../../assets/fabeook.webp";
import image2 from "../../assets/rocketdab.png";
import image3 from "../../assets/rocketman.png";
import image4 from "../../assets/rocketride.png";

const Partners = () => {
  return (
    <section id="partners">
      <div className="bg-blue-900 text-center py-5 h-50 sm:h-80 relative w-full">
        <div className="heading uppercase text-2xl font-bold text-white">
          Our Partners
        </div>
        <div className="max-w-4xl mx-auto text-white ">
          <h1 className="sm:text-4xl sm:font-bold p-4">
            At UBA Islamic institute, our partnerships are the cornerstone of
            our mission brith talented individuals.
          </h1>
          <div className="hidden partners absolute z-100 sm:flex sm:flex-wrap gap-4 justify-center items-center bg-white sm:w-[60%] sm:mt-9 sm:h-60 w-60 h-30 shadow-lg p-4 text-black top-60 sm:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-30">
              <img src={image1}  className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img src={image2}  className="w-25" />
            </div>

            <div className="w-30 ">
              {" "}
              <img src={image3}  className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img src={image4}  className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img src={image1}  className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img src={image1}  className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img src={image1}  className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img src={image1}  className="w-25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
