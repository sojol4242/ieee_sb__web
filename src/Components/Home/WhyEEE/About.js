import React, { useState } from "react";
import Stats from "../Stats/Stats";
import "./about.css";
import Facilities from "./Facilities";
const About = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = `The IEEE BSMRSTU Student Branch of Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj(BSMRSTU) is a non-profitable and non-political membership organization dedicated to promoting professionalism among engineering students and is a student chapter affiliated with the Institute of Electrical and Electronics Engineers (IEEE).
  The IEEE BSMRSTU Student Branch provides student members with a networking opportunity to meet and learn from fellow students, as well as faculty members and professionals in the field to share their interests, future professions and ideas. In addition to improving their soft and hard skills.
  Here all the members will work together to foster technological innovation and excellence for the benefit of humanity. Be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
  As the IEEE BSMRSTU Student Branch is newly formed, it pledges to operate in accordance with its constitution beginning today, November 15, 2022, with the goal of establishing a definite structure for its future activities.`;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="about__section section__padding mt-16" id="about">
      <div className="about__header">
        <div className="about__heading flex flex-col justify-start items-start sm:justify-center mb-3">
          <h1 className="gradient__text capitalize text-3xl font-bold">
            IEEE BSMRSTU SB
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
