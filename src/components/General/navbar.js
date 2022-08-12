import React from "react";
import { NavLink } from "react-router-dom";

// [1] All React components must act like pure functions(does not change inputs) with respect to their props.

// [2] We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

const Navbar = () => {

    return (
      <header className="text-white body-font bg-indigo-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <span className="ml-3 text-xl">Restaurant</span>
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <span className="mr-5">
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </span>
            <span className="mr-5">
              <NavLink to="/" activeclassname="active" className="link">
                About
              </NavLink>
            </span>
          </nav>

          <NavLink to="/admin/login" activeclassname="active" className="link">
            <button className="inline-flex items-center bg-white text-indigo-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              LogIn
            </button>
          </NavLink>
        </div>
      </header>
    );
};

export default Navbar;
