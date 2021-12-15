import React from 'react';
import Facilities from './Facilities';
import './whyeee.css';
const WhyEEE = () => {
  return (
    <div className="gpt3__whatgpt3 section__padding" id="why">
      {/* <div className="gpt3__whatgpt3-feature">
       <Facilities/>
      </div> */}
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
         BSMRSTU EEE
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Facilities />
        <Facilities />
        <Facilities />
        <Facilities />
        
      </div>
    </div>
  );
};

export default WhyEEE;
