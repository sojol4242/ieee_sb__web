import React, { useState } from "react";
import Stats from "../Stats/Stats";
import "./about.css";
import Facilities from "./Facilities";
const About = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = `Welcome to the  Department of Electrical and Electronic Engineering at Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj. Our department was founded in 2012 and we have a lasting tradition of educational excellence, both in academic and research. The main focus of the EEE Dept. is on three major areas - power & energy, electronics and communication in the undergraduate curricula. The expertise of the faculty members of this department covers various fields ranges from power systems to nano technology. The research areas of teachers and students of this department include power, energy, electrical machines, solid state device, signals and systems, signal processing, image processing, device modeling, power electronics, control engineering, high voltage engineering, biomedical engineering, microwave engineering, optical fiber communication, mobile telecommunication, device fabrication, VLSI and nano technology. We would like this website to provide information in order to establish contact with us, whether it is establishing communication between teachers and students or collaboration between departments or institutes, both locally and internationally.`;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="about__section section__padding mt-16" id="about">
      <div className="about__header">
        <div className="about__heading flex flex-col justify-start items-start sm:justify-center mb-3">
          <h1 className="gradient__text capitalize text-3xl font-bold">
            BSMRSTU EEE
          </h1>
          <div className="gradient__bar w-1/5 my-3"></div>

          {/* <div className="gradient__bar w-1/5"></div> */}
        </div>
        <div className="about__text">
          {" "}
          <p>{isReadMore ? `${text.slice(0, 180)}...` : text}</p>
          <span onClick={toggleReadMore} className="read__more">
            {" "}
            {isReadMore ? "read more" : " show less"}
          </span>
        </div>
      </div>

      <div className="eee__features">
        <Facilities
          title="EEE Association"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          aperiam quia officia, repudiandae ex laborum."
        />
        <Facilities
          title="Rich Faculty Member"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          aperiam quia officia, repudiandae ex laborum."
        />
        <Facilities
          title="Laboratory"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          aperiam quia officia, repudiandae ex laborum."
        />

        <Facilities
          title="IEEE Student Branch"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          aperiam quia officia, repudiandae ex laborum."
        />
        <Facilities
          title="Research Club"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          aperiam quia officia, repudiandae ex laborum."
        />
        <Facilities
          title="Robogang"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          aperiam quia officia, repudiandae ex laborum."
        />
      </div>
      <Stats />
    </div>
  );
};

export default About;
