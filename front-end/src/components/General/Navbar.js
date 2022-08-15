import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";


// [1] All React components must act like pure functions(does not change inputs) with respect to their props.

// [2] We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

import Logo from "./Logo";

const Navbar = () => {
  const showMobileMenu = () => {
    const mobileMenu = document.getElementById("mob-nav-toggle");
    const mobNav = document.getElementById("mob-nav");
    const closeMobNav = document.getElementById("close-mob-nav");

    mobileMenu.classList.add("hidden");
    mobNav.classList.remove("hidden");
    closeMobNav.classList.remove("hidden");
  };

  const hideMobileMenu = () => {
    const mobileMenu = document.getElementById("mob-nav-toggle");
    const mobNav = document.getElementById("mob-nav");
    const closeMobNav = document.getElementById("close-mob-nav");
    mobileMenu.classList.remove("hidden");
    mobNav.classList.add("hidden");
    closeMobNav.classList.add("hidden");
  };

  return (
    <div className="z-50">
      <nav className="bg-white w-full">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="">
            <div className="flex items-center justify-between h-20 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Logo />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Link to="/">
                    <span
                      href="/"
                      className="px-3 py-3 rounded-lg focus:outline-none  text-white bg-blue-500 "
                    >
                      Home
                    </span>
                  </Link>
                  <Link to="/">
                    <span
                      href="/"
                      className="ml-4 px-3 py-3 rounded-lg focus:outline-none   text-gray-800 hover:text-white hover:bg-blue-500 focus:text-white focus:bg-blue-500 "
                    >
                      About
                    </span>
                  </Link>
                  <div className="group ml-4 relative inline-block text-left">
                    <Avatar
                      alt="avatar"
                      url="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-avatar-avatars-dreamstale-lineal-dreamstale.png"
                      size="medium"
                      classes="shadow-inner rounded-full bg-gray-400 p-1"
                    />

                    <div className="hidden group-hover:block origin-top-left absolute right-0 z-50 w-32 border rounded-lg shadow-lg">
                      <div className="rounded-lg bg-white shadow-xs">
                        <div className="py-1">
                          <Link to="/">
                            <span
                              href="#"
                              className="block px-4 py-2 text-sm cursor-pointer leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            >
                              My profile
                            </span>
                          </Link>
                          <Link to="/">
                            <span
                              href="#"
                              onClick={() => {
                                console.log("log out");
                              }}
                              className="block px-4 py-2 cursor-pointer text-sm leading-5 text-red-700 hover:bg-red-100 hover:text-red-900 focus:outline-none focus:bg-red-100 focus:text-red-900"
                            >
                              Logout
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  id="mob-nav-toggle"
                  onClick={showMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="inline-flex"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <button
                  id="close-mob-nav"
                  onClick={hideMobileMenu}
                  className="hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="inline-flex"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="mob-nav" className="hidden border-b border-gray-700 md:hidden">
          <div className="px-2 py-3 sm:px-3">
            <Link to="/">
              <span
                href="#"
                className="block px-3 py-3 rounded-lg   text-gray-600 hover:bg-gray-900 hover:text-white  focus:outline-none"
              >
                Home
              </span>
            </Link>
            <Link to="/">
              <span
                href="#"
                className="mt-1 rounded-lg block px-3 py-3  text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none"
              >
                About
              </span>
            </Link>
            <Link to="/">
              <span
                href="#"
                className="mt-1 rounded-lg block px-3 py-3  text-gray-600 hover:bg-gray-900 hover:text-white focus:outline-none"
              >
                Edit profile
              </span>
            </Link>
          </div>
          <div className="border-t">
            <div className="px-2 sm:px-3">
              <Link to="/">
                <span className="mt-1 block px-3 py-4 text-red-500 focus:outline-none">
                  <i className="fa fa-power-off mr-1"></i> Logout
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
