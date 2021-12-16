/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero__section" id="home">
      <div className="hero_bg"></div>
      
     <div className="bg__animation">
     <div className="dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <div className="dots1">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
     </div>
      <Fade left>
        <div className="hero__content">
          <h1 className="gradient__text">
            Department of
            <span>
              {" "}
              <Typewriter
                options={{
                  strings: ["Electrical  and  Electronic Engineering"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p>
            “What we now want is closer contact and better understanding between
            individuals and communities all over the earth, and the elimination
            of egoism and pride which is always prone to plunge the world into
            primeval barbarism and strife. Peace can only come as a natural
            consequence of universal enlightenment.” ― <i>Nikola Tesla</i>
          </p>
          <div className="hero__content__input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Put your mail address"
            />
            <button type="submit">Go</button>
          </div>

        </div>
        
      </Fade>

      {/* <Fade right>
        <div className="hero__image">
          <img
            src="https://i.ibb.co/YQbDP5G/animation-500-kx1immaa.gif"
            alt="hero__image"
            title="AI"
            className="image-fluid"
          />
        </div>
      </Fade> */}
    </div>
  );
};

export default Hero;
