import React from 'react';
import './whyeee.css';
// eslint-disable-next-line react/prop-types
const Facilities = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <h1>Heading</h1>
        <div className="my-3"/>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Facilities;
