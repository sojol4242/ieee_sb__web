import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
              <a href="#faculties">Committee</a>
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
      </div>
      <a className="signin" href="https://docs.google.com/forms/d/e/1FAIpQLSdR77BlAldzMlzrbIVZ_ayjO2ND2UKf4x3TBgkGixo8_rVAwA/viewform?ts=6378e6c1" target="_blank" rel="noreferrer">Join IEEE</a> 
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
            {/* <div className="navbarMenuButton">
              <a href="#" className="signin">
                Sign In
              </a>
            </div> */}
          <a className="signin" href="https://docs.google.com/forms/d/e/1FAIpQLSdR77BlAldzMlzrbIVZ_ayjO2ND2UKf4x3TBgkGixo8_rVAwA/viewform?ts=6378e6c1" target="_blank" rel="noreferrer">Join IEEE</a> 
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
