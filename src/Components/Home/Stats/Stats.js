/* eslint-disable jsx-a11y/alt-text */
import { faHistory, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <span className="container__heading gradient__text text-center text-3xl font-bold capitalize pt-16">
        {" "}
        A place for learning, discovery, innovation, expression and discourse
      </span>
      <div className="stats__container">
        <div className="single__stat shadow-lg">
          <img
            className="icon"
            src="https://img.icons8.com/bubbles/50/000000/timer.png"
          />
          <div className="number">2012</div>
          <span className="number__title">Opened in</span>
        </div>
        <div className="single__stat shadow-lg">
          <img
            className="icon"
            src="https://img.icons8.com/fluency/48/000000/teacher.png"
          />
          <div className="number">
            {" "}
            <CountUp start={0} end={17} delay={0} duration={3}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <span className="number__title">Faculties</span>
        </div>
        <div className="single__stat shadow-lg">
          <img
            className="icon"
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-students-achievements-flaticons-flat-flat-icons-4.png"
          />
          <div className="number">
            <CountUp start={0} end={560} delay={0} duration={2}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <span className="number__title">Students</span>
        </div>
        <div className="single__stat shadow-lg">
          <img
            className="icon"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-machine-industry-flaticons-lineal-color-flat-icons.png"
          />
          <div className="number">
            {" "}
            <CountUp start={0} end={10} delay={0} duration={4}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <span className="number__title">Digital Laboratories</span>
        </div>
      </div>
    </>
  );
};

export default Stats;
