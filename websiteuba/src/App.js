import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AOS from "aos";

import "aos/dist/aos.css"; // Import the AOS CSS file
function App() {
  // Initialize AOS

  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Keep the animation on repeat scroll
      offset: 120, // Offset to start the animation earlier or later
    });
  }, []);

  return <HomePage />;

  // return (
  //   <div>
  //     <div className="heading text-center">
  //       <h1 className="text-3xl text-green-900">Test AOS Animation</h1>
  //     </div>

  //     {/* Test with one simple element */}
  //     <div
  //       className="box p-10 m-10 bg-blue-300 text-white"
  //       data-aos="fade-up"
  //     >
  //       This should fade up when you scroll to it.
  //     </div>
  //     <div
  //       className="box p-10 m-10 bg-blue-300 text-white"
  //       data-aos="fade-up"
  //     >
  //       This should fade up when you scroll to it.
  //     </div>
  //     <div
  //       className="box p-10 m-10 bg-blue-300 text-white slide-in-left"
  //       data-aos="fade-up"
  //     >
  //       This should fade up when you scroll to it.
  //     </div>
  //     <div
  //       className="box p-10 m-10 bg-blue-300 text-white"
  //       data-aos="fade-up"
  //     >
  //       This should fade up when you scroll to it.
  //     </div>
  //     <div
  //       className="box p-10 m-10 bg-blue-300 text-white"
  //       data-aos="fade-up"
  //     >
  //       This should fade up when you scroll to it.
  //     </div>
  //     <div
  //       className="box p-10 m-10 bg-blue-300 text-white s"
  //       data-aos="fade-up"
  //     >
  //       This should fade up when you scroll to it.
  //     </div>
  //   </div>
  // );
}

export default App;
