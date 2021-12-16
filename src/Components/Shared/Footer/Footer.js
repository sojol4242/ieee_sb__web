import "./footer.css";
import React from "react";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer section__padding">
      {/* <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div> */}

      {/* <div className="footer-btn">
        <p>Request Early Access</p>
      </div> */}

      <div className="footer-links">
        <div className="footer-links_logo">
          <a
            href="#"
            onClick={{ scrollUp }}
            className="gradient__text font-bold text-2xl"
          >
            Dept. of EEE
          </a>
          <p className="mt-5">
            Bangabandhu Sheikh Mujibur Rahman <br />
            Science And Technology University, Gopalganj-8100.
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Important Links</h4>
          <a
            href="https://www.facebook.com/robogangbsmrstu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bsmrstu Robotics
          </a>
          <a
            href="https://www.facebook.com/ohmresearch.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ohmrc
          </a>
          <a
            href="https://www.facebook.com/groups/495013997212344"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE BSMRSTU
          </a>
          <a
            href="https://www.facebook.com/IEEEBSMRSTUSB"
            target="_blank"
            rel="noopener noreferrer"
          >
            EEE Association
          </a>
        </div>
        <div className="footer-links_div">
          <h4>Useful Links</h4>
           
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE Officials
          </a>
          <a
            href="https://eee.buet.ac.bd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUET EEE
          </a>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          
          <a
            href="tel:02-6682257"
            target="_blank"
            rel="noopener noreferrer"
          >
            02-6682257
          </a>
          <a
            href="https://www.facebook.com/Department-of-EEE-Bsmrstu-1427559693989778"
            target="_blank"
            rel="noopener noreferrer"
          >
            BSMRSTU EEE
          </a>
          <a href="#">info@eeebsmrstu.net</a>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>
          &copy;&nbsp;
          <a href="#" className="font-bold">
            bsmrstu.eee.
          </a>
          &nbsp;&nbsp; All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
