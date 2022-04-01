import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Faculty = () => {
  return (
    <div className="faculty__card">
      <img
        src="https://www.bsmrstu.edu.bd/dev/departments/eee/uploaded_image/faculty/5bcd6e0eab591-japatosh.jpg"
        alt="name"
        title="name"
      />
      <div className="faculty__info">
        <h3 className="faculty__name">Japatosh Mondal</h3>
        <p className="faculty__title">Assistant Professor</p>

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
            <a href="#">
              <FontAwesomeIcon icon={faAt} className="fac__icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faPhone} className="fac__icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} className="fac__icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} className="fac__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
