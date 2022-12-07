import React from 'react';

const RecentEvent = ({event}) => {
  const {imgURL,heading,id}=event
    return (
        <div className="card">
        <div className="frame">
          <img
            src={imgURL}
            alt={id}
            className="inset-0 object-cover object-center rounded"
          />
        </div>
        <div class="title">
          <h3>{heading}</h3>
          
        </div>
      </div>
    );
};

export default RecentEvent;