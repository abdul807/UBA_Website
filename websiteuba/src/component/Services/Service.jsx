import React from "react";

import "./service.css";
const Service = () => {
  return (
    <section id="service">
      <div className="bg-blue-900 text-center py-5  relative w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading font-bold sm:text-3xl text-center text-white p-4">
            Our services
          </h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 justify-center items-center m-10">
            <div className=" text-center text-white border-1 border-white py-15 px-20 hover:cursor-pointer hover:flip-horizontal-bottom">
              <h1>Cloud Solutions</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
