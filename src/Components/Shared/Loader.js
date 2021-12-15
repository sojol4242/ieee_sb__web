import React from 'react';
import './preLoader.css';
const Loader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default Loader;
