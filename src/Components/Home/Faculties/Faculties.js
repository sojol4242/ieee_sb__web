import "./faculties.css";
import React, { useEffect, useState } from "react";
import Faculty from "./Faculty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { client } from "../../../client";
import { Link } from "react-router-dom";

const Faculties = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const query = '*[_type=="faculties"]';
    client
      .fetch(query)
      .then((data) => {
        setFaculty(data);
      })
      .then((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div
      id="faculties"
      className="section__padding faculties__section flex flex-col justify-center items-center"
    >
      <div className="flex flex-row justify-center items-center text-2xl  mb-16">
        <div className="gradient__bar w-1/5"></div>
        <h1
          className="container__heading font-bold text-center px-6 uppercase"
          style={{
            color: "var(--color-subtext)",
          }}
        >
          honorable faculty Members
        </h1>
        <div className="gradient__bar w-1/5"></div>
      </div>

      <div className="faculties__container">
        {" "}
        {faculty
          .map((f_data) => <Faculty f_data={f_data} key={f_data._id} />)
          .slice(0, 4)}
      </div>

      <Link
        to="/see_more_faculties"
        className="text-center see__more__button shadow-sm"
      >
        See More <FontAwesomeIcon icon={faArrowCircleRight} />
      </Link>
    </div>
  );
};

export default Faculties;
