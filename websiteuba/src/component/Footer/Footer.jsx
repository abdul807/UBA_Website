import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the Facebook icon


const Footer = () => {
  return (
    <footer className="footer text-white" id="footer">
      <div className="bg-[#424874] flex flex-col text-center max-w-6xl text-white py-10">
        <div className="flex flex-col justify-center items-center gap-5   sm:flex-row sm:justify-around sm:items-start mb-20">
          <div className="logo font-extrabold text-3xl">UBA</div>
          <div className="home flex flex-col gap-2" id="home">
            <a href="#">Home</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110">About Us</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110">Services</a>
          </div>
          <div className="home flex flex-col gap-2" id="home">
            <a href="#">Company</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110">Imprint</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110">Privacy Policy</a>
          </div>
          <div className="home flex flex-col gap-2" id="home">
            <a href="#">Service Centers</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110"> Aboabo</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110" >Old Town</a>
          </div>
          <div className="home flex flex-col gap-2" id="home">
            <a href="#">About Uba</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110">Contact</a>
            <a href="#" className="text-sm text-[#A6B1E1] hover:scale-110">Insights</a>
          </div>
        </div>
        <div className="flex justify-between items-center mb-20">
          <p className="text-white text-sm relative left-10">
            © 2025 Your Company | All rights reserved
          </p>
          <div className="icons flex">
            <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faTwitter} className="mr-2 text-white" />
            </a>
            <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-white" />
            </a>
            <a href="#" className="text-white mx-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
