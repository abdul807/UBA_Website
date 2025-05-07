import React from "react";
import profile from "../../assets/pro1.jpg";

const Conversation = () => {
  return (
    <section id="conversation" className=" bg-blue-900">
      <div className="bg-[#424874] text-center py-5  relative w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading font-bold sm:text-3xl text-center text-white p-4">
            Let us have a conversation
          </h1>
          <div className="flex flex-col justify-center items-center sm:max-w-6xl sm:flex-row sm:flex-wrap gap-5 md:justify-start md:items-start m-10">
            <div className="max-w-[500px]">
              <img alt="profile" src={profile} className="w-80 h-90 object-cover" srcset="" />
              <p className="sm:text-left mt-2 text-white font-bold text-center">
                {" "}
                <span className="text-center sm:text-left mt-2 text-white font-bold inline-block border-b-2 border-white pb-1">
                  Sheik
                </span>
                Abdul Razak
              </p>
              <p className=" text-center sm:text-left mt-2 text-white font-bold">
                Chairman
              </p>
              <button className="text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3  bg-green-900 font-bold px-7 py-2 w-full sm:w-1/2">
                Contact Us
              </button>
            </div>
            <div className="max-w-[500px]">
              <img alt="profile" src={profile} className="w-80 h-90 object-cover" srcset="" />
              <p className="sm:text-left mt-2 text-white font-bold text-center">
                {" "}
                <span className="text-center sm:text-left mt-2 text-white font-bold inline-block border-b-2 border-white pb-1">
                  Sheik
                </span>
                Abdul Razak
              </p>
              <p className=" text-center sm:text-left mt-2 text-white font-bold">
                Chairman
              </p>{" "}
              <button className="text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3  bg-green-900 font-bold px-7 py-2 w-full sm:w-1/2">
                Contact Us
              </button>
            </div>
            <div className="max-w-[500px]">
              <img alt="profile" src={profile} className="w-80 h-90 object-cover" srcset="" />
              <p className="sm:text-left mt-2 text-white font-bold text-center">
                {" "}
                <span className="text-center sm:text-left mt-2 text-white font-bold inline-block border-b-2 border-white pb-1">
                  Sheik
                </span>
                Abdul Razak
              </p>
              <p className=" text-center sm:text-left mt-2 text-white font-bold">
                Chairman
              </p>{" "}
              <button className="text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3  bg-green-900 font-bold px-7 py-2 w-full sm:w-1/2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
