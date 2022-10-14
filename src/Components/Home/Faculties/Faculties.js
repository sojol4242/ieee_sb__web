// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./faculties.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
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
        <div className="gradient__bar w-2/5"></div>
        <h1
          className="container__heading font-bold text-center px-6 uppercase"
          style={{
            color: "var(--color-subtext)",
          }}
        >
          Executive Committee
        </h1>
        <div className="gradient__bar w-2/5"></div>
      </div>

      <div className="container faculties__container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
          
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
        </Swiper>

        {/* {" "}
        {faculty
          .map((f_data) => <Faculty f_data={f_data} key={f_data._id} />)
          .slice(0, 4)} */}
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
