import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../../client";
import Faculty from "./Faculty";
import Loader from "../../Shared/Loader";
const More_Fac = () => {
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
    <>
      {faculty !== 0 ? (
        <div
          id="faculties"
          className="section__padding faculties__section flex flex-col justify-center items-center"
        >
          <div className="flex flex-row justify-center items-center text-2xl  mb-16">
            <div className="gradient__bar w-1/5"></div>
            <h1
              className="container__heading font-bold text-center px-6 uppercase"
              style={{
                color: "var(--color-text)",
              }}
            >
              honorable faculty Members
            </h1>
            <div className="gradient__bar w-1/5"></div>
          </div>

          <div className="faculties__container">
            {" "}
            {faculty.map((f_data) => (
              <Faculty f_data={f_data} key={f_data._id} />
            ))}
          </div>
          <Link to="/" className="common_btn">
            Go back home
          </Link>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default More_Fac;
