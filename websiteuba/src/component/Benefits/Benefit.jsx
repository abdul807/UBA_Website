import React from "react";
import risk from "../../assets/risks.png";
import "aos/dist/aos.css";

const Benefit = () => {
  return (
    <section id="benefits" className="m-10">
      <div className="max-w-6xl mx-auto ">
        <div className="heading flex flex-col mb-4 justify-center items-center text-center">
          <h1 className="font-extrabold text-5xl mb-4">
            Benefits of working with us
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, id!
          </p>
        </div>

        <div className="grid sm:grid-cols-2  gap-10 place-center justify-center sm:m-4 sm:p-5" >
          <div className="benefit flex justify-center items-center gap-2" data-aos="slide-left">
            <div className="icon w-10 h-10">
              <img src={risk} alt="" srcset="" />
            </div>
            <div className="message">
              <h1 className="font-bold text-lg">Low Rish</h1>
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                doloremque!
              </p>
            </div>
          </div>
          <div className="benefit flex justify-center items-center gap-2" data-aos="slide-left">
            <div className="icon w-10 h-10">
              <img src={risk} alt="" srcset="" />
            </div>
            <div className="message">
              <h1 className="font-bold text-lg">Low Rish</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                doloremque!
              </p>
            </div>
          </div>
          <div className="benefit flex justify-center items-center gap-2" data-aos="slide-left">
            <div className="icon w-10 h-10">
              <img src={risk} alt="" srcset="" />
            </div>
            <div className="message">
              <h1 className="font-bold text-lg">Low Rish</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                doloremque!
              </p>
            </div>
          </div>
          <div className="benefit flex justify-center items-center gap-2" data-aos="slide-left">
            <div className="icon w-10 h-10">
              <img src={risk} alt="" srcset="" />
            </div>
            <div className="message">
              <h1 className="font-bold text-lg">Low Rish</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                doloremque!
              </p>
            </div>
          </div>
          <div className="benefit flex justify-center items-center gap-2" data-aos="slide-left">
            <div className="icon w-10 h-10">
              <img src={risk} alt="" srcset="" />
            </div>
            <div className="message">
              <h1 className="font-bold text-lg">Low Rish</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                doloremque!
              </p>
            </div>
          </div>
          <div className="benefit flex justify-center items-center gap-2" data-aos="slide-left">
            <div className="icon w-10 h-10">
              <img src={risk} alt="" srcset="" />
            </div>
            <div className="message">
              <h1 className="font-bold text-lg">Low Rish</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                doloremque!
              </p>
            </div>
          </div>
        </div>
        <button className="text-white text-center self-center bg-[#424874] rounded-lg font-bold px-7 py-4 flex justify-center items-center mx-auto mt-4">Learn More</button>

      </div>
    </section>
  );
};

export default Benefit;
