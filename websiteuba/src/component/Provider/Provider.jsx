import React from "react";
import proImage from "../../assets/lap.png";
import "aos/dist/aos.css";
const Provider = () => {
  return (
    <section id="provider">
      <div className="max-w-6xl bg-[#F4EEFF]  mx-auto flex flex-col sm:flex-row gap-20 items-center justify-center m-4 p-5">
        <div className="info sm:w-1/2" data-aos="fade-right">
          <h1 className="capitalize text-center leading-10 text-xl sm:text-3xl text-[#424874] text-xl  mb-5 font-extrabold">
            We Are Not A Classic Outsorucing Provider
          </h1>
          <p className="leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            aspernatur accusamus ipsa inventore iure perspiciatis minus
            voluptas. Debitis necessitatibus provident earum fugiat minima quos
            molestiae, nemo nam dolorem itaque vel laudantium amet, magni
            doloremque ut{" "}
            <span>
              praesentium odit voluptates suscipit mollitia. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Aliquam aspernatur
              accusamus ipsa inventore iure perspiciatis minus.{" "}
            </span>
          </p>
          <button className="bg-[#424874] text-white px-5 mt-2 py-3 rounded-lg font-bold cursor-pointer flex justify-center items-center mx-auto">Learn More</button>
          </div>
        <div className="image sm:w-1/2" data-aos="fade-left">
          <img
            src={proImage}
            alt="Provider"
            className="w-full h-120 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Provider;
