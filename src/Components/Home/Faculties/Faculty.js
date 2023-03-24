/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Faculty = ({ c_data }) => {
 
  const { name, title,fb_id,email} =c_data.attributes
  const url =`http://localhost:1337${c_data.attributes.image.data.attributes.url}`
 
 
 

  return (
    <div className="faculty__card">
      <img
        src={`${url}`}
        alt="name"
        title="name"
      />
      <div className="faculty__info">
        <h3 className="faculty__name">{name}</h3>
        <p className="faculty__title">{title}</p>

        <div className="faculty__contact">
          <div className="flex flex-row justify-center items-center">
            <div className="gradient__bar w-1/5 "></div>
            <h1
              className="font-bold text-center contact__heading px-6 uppercase"
              style={{
                color: "#000)",
              }}
            >
              Contacts
            </h1>
            <div className="gradient__bar w-1/5"></div>
          </div>
          <div id="faculty__contact__links">
            <a mailto={`${email}`}>
              <FontAwesomeIcon icon={faAt} className="fac__icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faPhone} className="fac__icon" />
            </a>
            <a href={`${fb_id}`} content="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="fac__icon" />
            </a>
            <a href="bsmrstueee90@gmail.com">
              <FontAwesomeIcon icon={faGoogle} className="fac__icon" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Faculty;
