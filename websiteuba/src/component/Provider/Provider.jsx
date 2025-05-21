import React from "react";
import proImage from "../../assets/yourman.jpg";
import "aos/dist/aos.css";
const Provider = () => {
  return (
    <section id="provider">
      <div className="max-w-5xl bg-white  mx-auto flex flex-col sm:flex-row gap-20 items-center justify-center m-4 p-5">
        <div className="info sm:w-1/2" data-aos="fade-right">
          <h1 className="capitalize text-center leading-10 text-2xl sm:text-5xl text-[#00a401]   mb-5 font-extrabold">
            Testimonials
          </h1>
          <blockquote>
            <p className="sm:text-justify sm:leading-8 sm:text-lg">
              UBA has truly shaped me into a better human being—both in my
              Islamic faith and in worldly matters. During my time here, I had
              the opportunity to memorize the entire Qur'an, study numerous
              hadiths, and learn deeply about the life and teachings of the Holy
              Prophet Muhammad (peace be upon him). UBA has provided me with
              more than just knowledge; it has nurtured my character,
              discipline, and purpose. I wholeheartedly recommend this great
              institution to anyone seeking both academic excellence and
              spiritual growth. UBA – Children Today, Leaders Tomorrow.
            </p>
            <footer>
              <strong className="text-[#00a401]">Farid Alhassan</strong>
            </footer>
            <p>
              <em>UBA – Children Today, Leaders Tomorrow.</em>
            </p>
          </blockquote>
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
