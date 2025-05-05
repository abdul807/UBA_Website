import React from "react";
import image from "../../assets/picutere.jpg";

const Image = () => {
  // Replace with your image URL
  return (
    <section className="">
      <div className="sm:wfull h-[900px] relative">
        <img
          src={image}
          alt="Amalitech Training"
          className="w-full h-[500px] sm:h-[720px] object-cover"
        />
      </div>

      <div className="absolute flex flex-col  w-[400px] top-20  sm:top-50 text-left p-15 sm:w-1/2">
        <div className="heading ">
          <h1 className="sm:leading-15 text-white uppercase text-center sm:text-left font-extrabold sm:text-5xl">
            Shaping The Future Of Tech Through Global Collaboration
          </h1>
        </div>
        <div className="text-white sm:text-justify leading-7 mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quos
          officia accusamus delectus necessitatibus minima tenetur fuga, natus
        </div>
        <div className="sm:justify-start flex justify-center mt-4 space-x-4 text-white mt-10">
          <button className="capitalize bg-green-900 px-3 py-1 rounded-lg shadow-lg">
            contact us
          </button>
          <button className="capitalize border-1 border-white px-3 py-1 rounded-lg shadow-lg">
            watch video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Image;
