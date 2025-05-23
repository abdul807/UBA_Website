import React from "react";

import "aos/dist/aos.css";

import "./Offers.css"; // Import your CSS file for styling

const Offers = () => {

  // text-[#00a401] - deep green
  // text-[#a7c263] -light green 

  return (
    <section className="-mt-90 sm:-mt-30 mb-10   ">
      <div className="max-w-5xl   flex flex-col sm:flex-col gap-10 mx-auto text-center sm:-mt-10  p-5 ">
      <div className="  heading text-center">
        <h1 className="sm:font-extrabold font-bold  text-2xl sm:text-5xl  text-[#00a401]" data-aos="fade" data-aos-duration="200">
          We Believe In The Power Of Global Collaboration
        </h1>
      </div>
      <div className="sm:max-w-5xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-15 sm:p-4 items-center m-4 flex flex-col gap-10 text-center align-center justify-center offers">
        <p className="sm:text-justify sm:leading-10 sm:text-xl " data-aos="slide-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta
          molestias deserunt doloribus voluptatibus laboriosam voluptatem omnis
          ut aspernatur adipisci. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur rerum commodi ut animi ullam eum distinctio
          modi culpa hic incidunt sit veritatis in, quo, quam dignissimos a
          recusandae, sint ratione.
        </p>
        <p className="sm:text-justify sm:leading-10 sm:text-xl" data-aos="slide-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta
          molestias deserunt doloribus voluptatibus laboriosam voluptatem omnis
          ut aspernatur adipisci. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur rerum commodi ut animi ullam eum distinctio
          modi culpa hic incidunt sit veritatis in, quo, quam dignissimos a
          recusandae, sint ratione.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Offers;
