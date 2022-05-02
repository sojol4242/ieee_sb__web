import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [showLinks, setShowLinks] = useState(false);
  // const handleHamburger = () => {
  //   setShowLinks(!showLinks);
  //   console.log(!showLinks);
  // };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <header className="navbar">
      <div className="navbarLinks">
        <div className="navbarLogo" onClick={scrollTop}>
          <img
            src="https://i.ibb.co/ZS6F9Bx/unnamed.jpg"
            alt="logo"
            title="Department of Electrical and Electronic Engineering, BSMRSTU"
          />
        </div>
        <div className="navbarLinksContainer">
          <ul className="navbarMenuLists">
            <li className="navbarMenuList">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbarMenuList">
              <a href="#about">About</a>
            </li>
            <li className="navbarMenuList">
              <a href="#faculties">Faculties</a>
            </li>
            <li className="navbarMenuList">
              <Link to="/library">Library</Link>
            </li>
            <li className="navbarMenuList">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <button className="signin">Sign in</button>
      {/* <div className="navbarButton">
        <a href="#" className="signin">
          Sign In
        </a>
       
      </div> */}
      <div className="navbarMenu">
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
                  <a href="#">Home</a>
                </li>
                <li className="navbarMenuList">
                  <a href="#about">About</a>
                </li>

                <li className="navbarMenuList">
                  <Link to="/library">Library</Link>
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
            <button className="signin">Sigin</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
