import React from "react";
import './train.css'
import "aos/dist/aos.css";

const Train = () => {
  return (
    <section id="training  w-full"> 
      <div className="max-w-5xl bg-[#F4EEFF] flex flex-col sm:flex-col gap-10 mx-auto text-center -mt-20 p-5 sm:mt-35">
        <h1 className="capitalize text-xl mt-7 sm:text-5xl font-bold text-center sm:font-extrabold  text-[#424874] sm:mt-15 py-15 sm:px-4  relative w-full" data-aos="fade-down">
          Connecting Continents, Empowering Individuals And Businesses - How?
        </h1>

        <div className=" text-center p-5 -mt-20 sm:-mt-4 leading-7 bg-[#DCD6F7] shadow-xl  hover:scale-105  transition-transform duration-300 ease-in-out">
          <h1 className="uppercase font-bold text-[#424874]">Free Tech Training</h1>
          <p className="text-[#424874]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            inventore autem earum illo dolores rem non quaerat veniam atque!
            Incidunt neque quam quisquam adipisci exercitationem ullam quos
            fugit temporibus modi!
          </p>
          <button className="bg-[#424874] text-white px-5 mt-2 py-3 rounded-lg font-bold hover:bg-green-800 cursor-pointer">Kitchen Traning</button>
        </div>

        <div className="bg-[#DCD6F7] shadow-xl gap-2 text-center p-5 -mt-4 leading-7 bg-[#DCD6F7]  hover:scale-105  transition-transform duration-300 ease-in-out">
          <h1 className="uppercase font-bold text-[#424874]">Free Tech Training</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            inventore autem earum illo dolores rem non quaerat veniam atque!
            Incidunt neque quam quisquam adipisci exercitationem ullam quos
            fugit temporibus modi!
          </p>
          <button className="bg-[#424874] text-white px-5 mt-2 py-3 rounded-lg font-bold hover:bg-green-800 cursor-pointer">Kitchen Traning</button>
        </div>

        <div className="bg-[#DCD6F7] shadow-xl text-center p-5 -mt-4 leading-7 bg-[#DCD6F7]  hover:scale-105  transition-transform duration-300 ease-in-out">
          <h1 className="uppercase font-bold text-[#424874]">Free Tech Training</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            inventore autem earum illo dolores rem non quaerat veniam atque!
            Incidunt neque quam quisquam adipisci exercitationem ullam quos
            fugit temporibus modi!
          </p>
          <button className="bg-[#424874] text-white px-5 mt-2 py-3 rounded-lg font-bold cursor-pointer">Kitchen Traning</button>
        </div>
      </div>
    </section>
  );
};

export default Train;
