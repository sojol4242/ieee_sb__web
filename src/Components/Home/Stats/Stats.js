import { faHistory, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Stats = () => {
  return (
    <div className="stats__container">
     
        <div className="single__stat shadow-lg">
          <FontAwesomeIcon icon={faHistory} className="icon" /> 
          <div className="number">2012</div>
          <span className="number__title">Opened in</span>
        </div>
        <div className="single__stat flex flex-col justify-center items-center p-8  mx-2 rounded-md shadow-md ">
          <FontAwesomeIcon icon={faUserTie} className="icon" /> 
          <div className="number">17+</div>
          <span className="number__title">Faculties</span>
        </div>
        <div className="single__stat flex flex-col justify-center items-center p-8  mx-2 rounded-md shadow-md ">
           <img className="icon" src="https://img.icons8.com/ultraviolet/40/000000/selfish.png"/> 
          <div className="number">560+</div>
          <span className="number__title">Students</span>
        </div>
        <div className="single__stat flex flex-col justify-center items-center p-8  mx-auto rounded-md shadow-md ">
         <img className="icon" src="https://img.icons8.com/ios/50/000000/electrical-sensor.png"/> 
          <div className="number">9+</div>
          <span className="number__title">Digital Laboratories</span>
        </div>
       
    </div>
  );
};

export default Stats;
