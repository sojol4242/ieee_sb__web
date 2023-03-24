import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [toggleDropdown, setToggleDropdown] = useState(true);
  // console.log(toggleDropdown);
 

  // useEffect(() => {
  //   document.addEventListener("mousedown", () => {
  //     setToggleMenu(false);
  //   });
  // });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <header className="navbar">
      <div className="navbarLinks">
        <div className="navbarLogo" onClick={scrollTop}>
          <img
            src="https://i.ibb.co/nwg8C2n/BSMRSTU-STUDENT-BRANCH-3.png"
            alt="logo"
            title="IEEE Student Branch, BSMRSTU"
          />
        </div>
        <div className="navbarLinksContainer">
          <ul className="navbarMenuLists">
            <li className="navbarMenuList">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbarMenuList">
              <Link to="/about">About</Link>
            </li>
            <li className="navbarMenuList">
              <a href="#faculties">Executives Committee</a>
            </li>
            <li className="navbarMenuList">
              <a href="#events">Events</a>

              {/* <button          
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full h-100 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={() => {setToggleDropdown(!toggleDropdown)
              }}
              >
                Events
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  {  console.log(toggleDropdown?"visible":"hidden")}
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className={`${toggleDropdown?`visible`:`hidden`} font-normal bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="flex flex-col text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div> */}
            </li>
            <li className="navbarMenuList">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="navbarMenuList">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <a
        className="signin"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdR77BlAldzMlzrbIVZ_ayjO2ND2UKf4x3TBgkGixo8_rVAwA/viewform?ts=6378e6c1"
        target="_blank"
        rel="noreferrer"
      >
        Join IEEE
      </a>
      {/* <div className="navbarButton">
        <a href="#" className="signin">
          Sign In
        </a>
      </div> */}
      <div className="navbarMenu" onClose={() => setToggleMenu(false)}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* <RiMenu3Line color="#fff" size="27"/>
        <RiCloseLine color="#fff" size="27"/> */}
        {toggleMenu && (
          <div className="navbarMenuContainer scale-up-center">
            <div className="navbarMenuContainerLinks">
              <ul className="navbarMenuLists">
                <li className="navbarMenuList">
                  <Link to="/home">Home</Link>
                </li>
                <li className="navbarMenuList">
                  <Link to="/about">About</Link>
                </li>
                <li className="navbarMenuList">
                  <a href="#faculties">Executives Committee</a>
                </li>
                <li className="navbarMenuList">
                  <a href="#events">Events</a>
                </li>
                <li className="navbarMenuList">
                  <a href="#gallery">Gallery</a>
                </li>
                <li className="navbarMenuList">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <div className="navbarMenuButton">
              <a href="#" className="signin">
                Sign In
              </a>
            </div> */}
            <a
              className="signin"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdR77BlAldzMlzrbIVZ_ayjO2ND2UKf4x3TBgkGixo8_rVAwA/viewform?ts=6378e6c1"
              target="_blank"
              rel="noreferrer"
            >
              Join IEEE
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
