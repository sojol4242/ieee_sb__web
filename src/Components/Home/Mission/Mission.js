import React from 'react';
import './mission.css';
import MissionRight from './MissionRight';
const Mission = () => {
  const fakeData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
    },
  ];
  console.log(fakeData);

  return (
    <div className="section__margin mission">
        
      <div className="section__padding mission__container">
     
        <div className="mission__left">
          <h4 className="gradient__text text-2xl uppercase font-bold">
            Our Mission and Vision
          </h4>
          <div className="gradient__bar mt-5 w-2/5"></div>
          {/* <hr /> */}
          <p className="mt-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea
            ducimus velit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsam alias repellat libero? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Consequuntur placeat voluptate
            praesentium recusandae atque voluptatibus?{' '}
          </p>
        </div>
        <div className="mission__right">
          <MissionRight />
          <MissionRight />
          <MissionRight />
          <MissionRight />
        </div>
      </div>
    </div>
  );
};

export default Mission;
