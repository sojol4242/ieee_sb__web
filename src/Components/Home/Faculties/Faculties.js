// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
            <div className="faculty__card">
              <img
                src="https://i.ibb.co/4t71hDn/310261273-3536537953240393-3127021177935913774-n.jpg"
                alt="name"
                title="CHAIR"
              />
              <div className="faculty__info">
                <h3 className="faculty__name">Sajid Rahman</h3>
                <p className="faculty__title">Chair</p>

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
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="fac__icon"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGoogle} className="fac__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="faculty__card">
              <img
                src="https://i.ibb.co/t3F73Vq/312498365-3294285717554615-6090703067025206807-n.jpg"
                alt="name"
                title="name"
              />
              <div className="faculty__info">
                <h3 className="faculty__name">Joy Somaddar</h3>
                <p className="faculty__title">General Secretary</p>

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
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="fac__icon"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGoogle} className="fac__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="faculty__card">
              <img
                src="https://i.ibb.co/7QXMfnt/312798110-2375851779234301-6310067613507842447-n.jpg"
                alt="name"
                title="name"
              />
              <div className="faculty__info">
                <h3 className="faculty__name">Mrittika Rahman</h3>
                <p className="faculty__title">Treasurer</p>

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
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="fac__icon"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGoogle} className="fac__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
        </Swiper>
      </div>

      <Link
        to="/see_more_committee"
        className="text-center see__more__button shadow-sm"
      >
        See More <FontAwesomeIcon icon={faArrowCircleRight} />
      </Link>
    </div>
  );
};

export default Faculties;
