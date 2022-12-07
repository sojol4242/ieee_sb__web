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
        src="https://i.ibb.co/B3YzWvC/317466674-1184292782292407-4794890684377537361-n.jpg"
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
            <a href="bsmrstueee90@gmail.coms">
              <FontAwesomeIcon icon={faAt} className="fac__icon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faPhone} className="fac__icon" />
            </a>
            <a href="https://www.linkedin.com/in/moniruzzaman-sojol/">
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
