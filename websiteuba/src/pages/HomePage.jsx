import React from "react";
import Offers from "../component/Offers/Offers";
import Navbar from "../component/Navbar";
import Image from "../component/Image/Image";
import MapComponent from "../component/Map/MapComponent";
import Partners from "../component/Partners/Partners";
import Train from "../component/Training/Train";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Image />
      <Offers />
      <MapComponent />
      <Partners />
      <Train />
      {/* <div className="bg-red-200 p-4">Row 4 Content</div> */}
    </div>
  );
};

export default HomePage;
