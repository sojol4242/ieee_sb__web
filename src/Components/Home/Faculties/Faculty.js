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
      <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-1/302535433_1126417394746613_615873177390509472_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GeNJtaswVrAAX-WQ-LV&tn=966Dka6x7-GI4ERs&_nc_ht=scontent.fdac116-1.fna&oh=00_AT90cV_H9QP26IDfRu2DOi84Fb1usZfY9SX9hl1YzFfa5A&oe=6338402B" alt="name" title="name" />
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
