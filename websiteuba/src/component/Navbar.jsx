import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import About from "./Modals/About";
import ServiceModal from './Modals/ServiceModal'

const links = [
  {
    text: "Home",
    href: "#",
    modal: "",
  },
  {
    text: "About UBA",
    href: "#",
    href: <About />,
  },
  {
    text: "UBA Services",
    href: "#",
    modal: <ServiceModal />
  },
];

const Navbar = () => {
  const [hovered, Sethovered] = useState(null);
  const MouseEnter = (index) => {
    Sethovered(index);
  };

  const Mouseleave = () => {
    Sethovered(null);
  };
  return (
    <header className="flex relative  justify-between items-center bg-[#F4EEFF] p-4 shadow-md h-20">
      <h1 className="sm:text-2xl text-xl font-extrabold text-[#424874]">
        Umar Bun Abdul Aziz
      </h1>

      <button
        id="hamburger-button"
        className="sm:hidden focus:outline-none text-4xl text-green-900 "
      >
        &#9776;
      </button>
      <nav className="hidden  sm:flex space-x-4">
        {links.map((link, index) => (
          <div className="relative" key={index}>
            <NavLink
              to={link.href}
              className="text-sm  hover:text-[#424874]"
              onMouseEnter={()=> MouseEnter(index)}
              onMouseLeave={Mouseleave}
            >
              {link.text}
            </NavLink>
            {link.modal? (hovered && link.modal): false}
          </div>
        ))}
        {/* <NavLink to="/" className="text-sm hover:text-[#424874]">
        
          Home
        </NavLink>
        <NavLink className="text-sm hover:text-[#424874]">About UBA</NavLink>
        <NavLink className="text-sm hover:text-[#424874]">UBA Services</NavLink>
        <NavLink className="text-sm hover:text-[#424874]">UBA Training</NavLink>
        <NavLink className="text-sm hover:text-[#424874]">UBA Social</NavLink>
        <NavLink className="text-sm hover:text-[#424874]"> Jobs</NavLink>
        <NavLink className="text-sm hover:text-[#424874]">
          Locations & contact
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navbar;
