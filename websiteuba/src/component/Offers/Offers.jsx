import React from "react";

import "aos/dist/aos.css";

import "./Offers.css"; // Import your CSS file for styling

const Offers = () => {



  return (
    <section className="-mt-90 sm:-mt-30 mb-10 ">
      <div className="heading text-center">
        <h1 className="sm:font-extrabold font-bold  text-xl sm:text-2xl text-3xl text-green-900" data-aos="fade" data-aos-duration="200">
          We Believe In The Power Of Global Collaboration
        </h1>
      </div>
      <div className="sm:max-w-4xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-20 sm:p-4 items-center m-4 flex flex-col gap-10 text-center align-center justify-center offers">
        <p className="sm:text-justify leading-7 " data-aos="slide-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta
          molestias deserunt doloribus voluptatibus laboriosam voluptatem omnis
          ut aspernatur adipisci. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur rerum commodi ut animi ullam eum distinctio
          modi culpa hic incidunt sit veritatis in, quo, quam dignissimos a
          recusandae, sint ratione.
        </p>
        <p className="sm:text-justify leading-7" data-aos="slide-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta
          molestias deserunt doloribus voluptatibus laboriosam voluptatem omnis
          ut aspernatur adipisci. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur rerum commodi ut animi ullam eum distinctio
          modi culpa hic incidunt sit veritatis in, quo, quam dignissimos a
          recusandae, sint ratione.
        </p>
      </div>
    </section>
  );
};

export default Offers;
