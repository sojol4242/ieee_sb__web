import React, { useState } from "react";
import "./events.css";
import RecentEvent from "./RecentEvent";
  


 

const RecentEvents = () => {
  const events = [
    {
      id: 123,
      heading: 'COMMUNICATE WITH PROFESSORS',
      
      imgURL: `https://i.ibb.co/8bwpK4v/event-poster-7.png`,
    },
    {
      id: 6123,
      heading: 'Higher Study In Abroad',  
      imgURL: `https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHklMjBhYnJvYWQlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 1263,
      heading: 'Membership Requirement',
      
      imgURL: `https://i.ibb.co/y61gq8t/membership-requiremnt-3.png`,
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
        {events.map(e=><RecentEvent event={e}/>)}
        </div>
     
        
      </div>
    </section>
  );
};

export default RecentEvents;
