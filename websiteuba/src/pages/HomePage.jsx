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
import Benefit from "../component/Benefits/Benefit";
import Conversation from "../component/Conversation/Conversation";
import Footer from "../component/Footer/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F4EEFF]  relative">
      <Navbar />
      <Image />
      <Offers />
      <MapComponent />
      <Partners />
      <Train />
      <Background />
      <Provider />
      <Service />
      <Benefit />
      <Conversation />
      <Footer />
  
      {/* <div className="bg-red-200 p-4">Row 4 Content</div> */}
    </div>
  );
};

export default HomePage;
