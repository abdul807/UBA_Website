import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-[#F4EEFF] p-4 shadow-md h-20">
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
        <NavLink className="text-sm hover:text-green-900">Home</NavLink>
        <NavLink className="text-sm hover:text-green-900">About UBA</NavLink>
        <NavLink className="text-sm hover:text-green-900">UBA Services</NavLink>
        <NavLink className="text-sm hover:text-green-900">UBA Training</NavLink>
        <NavLink className="text-sm hover:text-green-900">UBA Social</NavLink>
        <NavLink className="text-sm hover:text-green-900"> Jobs</NavLink>
        <NavLink className="text-sm hover:text-green-900">
          Locations & contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
