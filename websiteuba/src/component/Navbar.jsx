// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import About from "./Modals/About";
// import ServiceModal from './Modals/ServiceModal'

// const Navbar = () => {
//   const [hovered, Sethovered] = useState(null);
//   const [showActions, setShowActions] = useState(false)

//   const toggleActions = (index) => {
//     setShowActions((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index], // Toggle the visibility of the actions for the specific row
//     }));
//     // setTimeout(() => {
//     //   setShowActions((prevState) => ({
//     //     ...prevState,
//     //     [id]: false, // Hide the actions after a delay
//     //   }));
//     // }, 3000); // Adjust the delay as needed (2000ms = 2 seconds)
//   };

//   const Mouseleave = () => {
//     Sethovered(null);
//   };
//   return (
//     <header className="flex relative  justify-between items-center bg-[#F4EEFF] p-4 shadow-md h-20">
//       <h1 className="sm:text-2xl text-xl font-extrabold text-[#424874]">
//         Umar Bun Abdul Aziz
//       </h1>

//       <button
//         id="hamburger-button"
//         className="sm:hidden focus:outline-none text-4xl text-green-900 "
//       >
//         &#9776;
//       </button>
//       <nav className="hidden  sm:flex space-x-4">
//         <NavLink to="/" className="text-sm hover:text-[#424874]"
//         onMouseLeave={Mouseleave}>

//           Home
//         </NavLink>
//         <NavLink className="text-sm hover:text-[#424874]">About UBA</NavLink>
//         <NavLink className="text-sm hover:text-[#424874]">UBA Services</NavLink>
//         <NavLink className="text-sm hover:text-[#424874]">UBA Training</NavLink>
//         <NavLink className="text-sm hover:text-[#424874]">UBA Social</NavLink>
//         <NavLink className="text-sm hover:text-[#424874]"> Jobs</NavLink>
//         <NavLink className="text-sm hover:text-[#424874]">
//           Locations & contact
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import About from "./Modals/About";
import ServiceModal from "./Modals/ServiceModal";
import image1 from "../assets/picutere.jpg";
import TrainModal from "./Modals/TrainModal";
import SocialModal from "./Modals/SocialModal";
import JobModal from "./Modals/JobModal";
import ContactModal from "./Modals/ContactModal";
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
  {
    text: "UBA Services",
    path: "#",
    modal: <ServiceModal />,
    font: true,
  },
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
  {
    text: "Jobs",
    path: "#",
    modal: <JobModal />,
    font: true,
  },
  {
    text: "Locations & contact",
    path: "#",
    modal: <ContactModal />,
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
          className="absolute w-full h-full top-0 bg-[#424874] text-5xl p-4 flex flex-col justify-content-center origin-top animate-fadeIn z-200 "
        >
          {" "}
          <button
            class="text-8xl self-end px-6 text-white"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="text-white flex flex-col gap-5 space-x-4 relative ">
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
      <header className="flex relative justify-between items-center bg-[#F4EEFF] p-4 shadow-md h-20">
        <h1 className="sm:text-2xl text-xl font-extrabold text-[#424874]">
          Umar Bun Abdul Aziz
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
              <NavLink to={link.path} className="text-sm hover:text-[#424874]">
                {link.text}
              </NavLink>
              {link.font && hovered === link.text ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                link.font && <FontAwesomeIcon icon={faChevronDown} />
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
