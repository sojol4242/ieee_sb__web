/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import './hero.css';
const Hero = () => {
  return (
    <div className="hero__section section__padding" id="home">
      <Fade left>
        <div className="hero__content">
      
          <h1 className="gradient__text">
            Department of
            <span>
              {' '}
              <Typewriter
                options={{
                  strings: ['Electrical  and  Electronic Engineering'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae provident suscipit qui sapiente nesciunt ipsum expedita
            architecto quis. Vero architecto veniam nemo sunt soluta!
          </p>
          <div className="hero__content__input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Put your mail address"
            />
            <button type="submit">Let's Learn</button>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="hero__image">
          <img
            src="https://i.ibb.co/YQbDP5G/animation-500-kx1immaa.gif"
            alt="hero__image"
            title="AI"
            className="image-fluid"
          />
        </div>
      </Fade>
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
    </div>
  );
};

export default Hero;
