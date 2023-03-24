import React, { useState } from "react";
import "./events.css";
import RecentEvent from "./RecentEvent";

const RecentEvents = () => {
  const events = [
    {
      id: 6123,
      heading: "New Committee 23",
      imgURL: `https://i.ibb.co/NVxmXfP/334502153-154775870728290-5676431891027294307-n.jpg`,
    },
    {
      id: 1263,
      heading: "Membership Requirement",

      imgURL: `https://i.ibb.co/y61gq8t/membership-requiremnt-3.png`,
    },
    {
      id: 123,
      heading: "COMMUNICATE WITH PROFESSORS",

      imgURL: `https://i.ibb.co/8bwpK4v/event-poster-7.png`,
    },
    {
      id: 6123,
      heading: "New Committee 22",
      imgURL: `https://i.ibb.co/VjjtYbF/278610074-295451906100366-5374315259759649151-n.jpg`,
    },
  ];
  const [event, setEvent] = useState(events);

  return (
    <section
      id="events"
      className="container section__padding overflow-hidden text-gray-700"
    >
      <div className="flex flex-row justify-center items-center text-2xl ">
        <div className="gradient__bar w-1/6"></div>
        <h1
          className="container__heading font-bold text-center px-6 uppercase"
          style={{
            color: "var(--color-subtext)",
          }}
        >
          Recent Events
        </h1>
        <div className="gradient__bar w-1/6"></div>
      </div>
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="cards">
          {events.map((e) => (
            <RecentEvent event={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
