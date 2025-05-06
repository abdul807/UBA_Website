import React from "react";
import proImage from "../../assets/lap.png";
import "aos/dist/aos.css";
const Provider = () => {
  return (
    <section id="provider">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-20 items-center justify-center m-4 p-5">
        <div className="info sm:w-1/2" data-aos="fade-right">
          <h1 className="capitalize leading-10 sm:text-3xl text-xl  mb-5 font-bold">
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
          <button className="bg-green-900 text-white px-5 mt-2 py-3 rounded-lg font-bold hover:bg-green-800 cursor-pointer">Learn More</button>
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
