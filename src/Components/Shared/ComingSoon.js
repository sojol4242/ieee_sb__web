import React from "react";
import { Link } from "react-router-dom";

import "./comingsoon.css";
import "./navbar.css";

const ComingSoon = () => {
  return (
    <div className="coming_soon__section" id="home">
      <div className="coming_soon_bg"></div>
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="heading">This feature is coming soon</h1>

        <Link to="/" className="common_btn">
          Go back home
        </Link>
      </div>
      <div className="bg__animation">
        <div className="dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="dots1">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
