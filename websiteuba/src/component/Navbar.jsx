import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md h-20">
      <div className="visible text-2xl font-bold text-green-600">
        Umar Bun Abdul Aziz
      </div>
      {/* <div className="md:hidden text-2xl font-bold text-green-600">Uba</div> */}

      <button
        id="hamburger-button"
        class="sm:hidden focus:outline-none text-4xl"
      >
        &#9776;
      </button>
      <nav className="hidden sm:flex space-x-4">
        <NavLink className="text-sm">Home</NavLink>
        <NavLink className="text-sm">About Amalitech</NavLink>
        <NavLink className="text-sm">Amalitech Services</NavLink>
        <NavLink className="text-sm">Amalitech Training</NavLink>
        <NavLink className="text-sm">Amalitech Social</NavLink>
        <NavLink className="text-sm"> Jobs</NavLink>
        <NavLink className="text-sm">Locations & contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
