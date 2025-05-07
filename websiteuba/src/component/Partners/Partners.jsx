import React from "react";
import image1 from "../../assets/fabeook.webp";
import image2 from "../../assets/rocketdab.png";
import image3 from "../../assets/rocketman.png";
import image4 from "../../assets/rocketride.png";

const Partners = () => {
  return (
    <section id="partners">
      <div className="bg-[#424874] text-center py-5 h-50 sm:h-80 relative w-full">
        <div className="heading uppercase text-2xl font-bold text-white">
          Our Partners
        </div>
        <div className="max-w-6xl mx-auto text-white ">
          <h1 className="sm:text-5xl sm:font-bold p-4 text-xl">
            At UBA Islamic institute, our partnerships are the cornerstone of
            our mission brith talented individuals.
          </h1>
          <div className="hidden partners absolute z-100 sm:flex sm:flex-wrap gap-4 justify-center items-center bg-white sm:w-[60%] sm:mt-20 sm:h-auto w-auto h-30 shadow-lg p-4 text-black top-60 sm:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-30">
              <img alt="sponser" src={image1} className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img alt="sponser" src={image2} className="w-25" />
            </div>

            <div className="w-30 ">
              {" "}
              <img alt="sponser" src={image3} className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img alt="sponser" src={image4} className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img alt="sponser" src={image1} className="w-25" />
            </div>
            <div className="w-30 ">
              {" "}
              <img alt="sponser" src={image1} className="w-25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
