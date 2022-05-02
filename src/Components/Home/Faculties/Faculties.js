import "./faculties.css";
import React, { useEffect, useState } from "react";
import Faculty from "./Faculty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import required modules
// import { Autoplay, Pagination, EffectCoverflow } from "swiper/core";

import faculty_data from "./faculty_data.json";

const Faculties = () => {
  const data = faculty_data;
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    setFaculty(data);
    console.log(data);
  }, [faculty]);
  // console.log(faculty);
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
        {faculty.map((f_data) => (
          <Faculty f_data={f_data} />
        ))}
      </div>

      <button className="text-center see__more__button shadow-sm">
        See More <FontAwesomeIcon icon={faArrowCircleRight} />
      </button>
    </div>
  );
};

export default Faculties;
