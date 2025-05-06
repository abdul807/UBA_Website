import React from "react";
import Offers from "../component/Offers/Offers";
import Navbar from "../component/Navbar";
import Image from "../component/Image/Image";
import MapComponent from "../component/Map/MapComponent";
import Partners from "../component/Partners/Partners";
import Train from "../component/Training/Train";

import Provider from "../component/Provider/Provider";
import Background from "../component/Background/Background";
import Service from "../component/Services/Service";

const HomePage = () => {
  return (
    <div className="min-h-screen sm:bg-white bg-gray-100 relative">
      <Navbar />
      <Image />
      <Offers />
      <MapComponent />
      <Partners />
      <Train />
      <Background />
      <Provider />
      <Service />
  
      {/* <div className="bg-red-200 p-4">Row 4 Content</div> */}
    </div>
  );
};

export default HomePage;
