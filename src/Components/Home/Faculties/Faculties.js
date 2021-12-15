import './faculties.css';
import React from 'react';
import Faculty from './Faculty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
 
 


const Faculties = () => {
 
  return (
    <div id="faculties" className="section__padding faculties__section flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center text-2xl  mb-16">
        <div className="gradient__bar w-1/5"></div>
        <h1
          className="font-bold text-center px-6 uppercase"
          style={{
            color: 'var(--color-subtext)',
          }}
        >
          honorable faculty Members
          {/* <div className="d-flex flex-col justify-center items-center">
         </div> */}
        </h1>
        <div className="gradient__bar w-1/5"></div>
      </div>

      <div className="faculties__container">
        <Faculty/>
        <Faculty/>
        <Faculty/>
        <Faculty/>
        <Faculty/>
      </div>
              
      <button className="text-center see__more__button shadow-sm">See More <FontAwesomeIcon icon={faArrowCircleRight} /></button>
    </div>
  );
};

export default Faculties;
