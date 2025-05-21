import React from "react";
import proImage from "../../assets/yourman.jpg";
import "aos/dist/aos.css";
const Provider = () => {
  return (
    <section id="provider">
      <div className="max-w-5xl bg-white  mx-auto flex flex-col sm:flex-row gap-20 items-center justify-center m-4 p-5">
        <div className="info sm:w-1/2" data-aos="fade-right">
          <h1 className="capitalize text-center leading-10 text-2xl sm:text-5xl text-[#00a401]   mb-5 font-extrabold">
            We Are Not A Classic Outsorucing Provider
          </h1>
          <p className="sm:text-justify sm:leading-8 sm:text-lg">
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
        <button className="border-1 border-[#00a401] text-[#00a401] text-lg px-5 mt-5 py-3 rounded-lg font-bold cursor-pointer flex justify-center items-center mx-auto">Learn More</button>
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
