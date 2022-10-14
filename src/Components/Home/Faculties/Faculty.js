/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { urlFor } from "../../../client";
const Faculty = ({ f_data }) => {
  // const { faculties_name, email, imageUrl, linkedin, mobile_number, position } =
  //   f_data;

  return (
    <div className="faculty__card">
      <img
        src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="name"
        title="name"
      />
      <div className="faculty__info">
        <h3 className="faculty__name">Md Moniruzzaman Sojol</h3>
        <p className="faculty__title">Web Master</p>

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
