
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import About from "./Modals/About";
import ServiceModal from "./Modals/ServiceModal";
import TrainModal from "./Modals/TrainModal";
import SocialModal from "./Modals/SocialModal";
import JobModal from "./Modals/JobModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown} from '@fortawesome/free-brands-svg-icons'; // Import the Facebook icon
import { faChevronDown, faChevronUp, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const links = [
  {
    text: "Home",
    path: "/",
    modal: null,
  },
  {
    text: "About UBA",
    path: "#",
    modal: <About />,
    font: true,
  },
  // {
  //   text: "UBA Services",
  //   path: "#",
  //   modal: <ServiceModal />,
  //   font: true,
  // },
  {
    text: "UBA Training",
    path: "#",
    modal: <TrainModal />,
    font: true,
  },
  {
    text: "UBA Social",
    path: "#",
    modal: <SocialModal />,
    font: true,
  },
  // {
  //   text: "Jobs",
  //   path: "#",
  //   modal: <JobModal />,
  //   font: true,
  // },
  {
    text: "Locations & contact",
    path: "#",

  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [showAction, setShowAction] = useState(false);

  const toggleMenu = () => {
    
    setShowAction(!showAction);
  };

  return (
    <>
      {" "}
      {showAction && (
        <section
          id="id"
          className="absolute w-full bg-[#dadada] h-full top-0  text-5xl flex flex-col justify-content-center origin-top animate-fadeIn z-200 "
        >
          {" "}
          <button
            class="text-8xl self-end px-6 text-white"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="text-[#F4EEFF] flex flex-col items-center justify-center gap-5 space-x-4 relative  ">
          {links.map((link, index) => (
            <div
              key={index}

              // onMouseEnter={() => setHovered(link.text)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex gap-3 justify-center items-center`}
            >
              <NavLink to={link.path} className="text-xl font-bold">
                {link.text}
              </NavLink>
              {link.font &&  <FontAwesomeIcon icon={faChevronRight} className="text-sm" /> }

             
            </div>
          ))}
        </nav>
        </section>
      )}
      <header className=" bg-white flex relative justify-between items-center px-10 shadow-md h-20">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#00a401]">
          <Link>Umar Bun Abdul Aziz</Link>
        </h1>

        <button
          id="hamburger-button"
          className="sm:hidden cursor-pointer focus:outline-none text-4xl text-green-900"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <nav className="hidden sm:flex space-x-4 relative">
          {links.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(link.text)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex justify-center items-center`}
            >
              <NavLink to={link.path} className="text-lg text-[#00a401] hover:font-bold">
                {link.text}
              </NavLink>
              {link.font && hovered === link.text ? (
                <FontAwesomeIcon icon={faChevronUp} className="text-[#00a401]" />
              ) : (
                link.font && <FontAwesomeIcon icon={faChevronDown} className="text-[#00a401]" />
              )}

              {hovered === link.text && link.modal && link.modal}
            </div>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
