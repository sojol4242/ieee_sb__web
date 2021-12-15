import './footer.css';
import React from 'react';
 
const Footer = () => {
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
          <a href="#" className="gradient__text font-bold text-2xl">Dept. of EEE</a>
          <p className="mt-5">
            Bangabandhu Sheikh Mujibur Rahman <br />
            Science And Technology University, Gopalganj-8100.
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Important Links</h4>
          <p>Bsmrstu Robotics</p>
          <p>Ohmrc</p>
          <p>IEEE BSMRSTU</p>
          <p>EEE Association</p>
        </div>
        <div className="footer-links_div">
          <h4>Useful Links</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>IEEE Offials</p>
          <p>BUET EEE</p>
        
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>BSMRSTU EEE</p>
          <p>085-132567</p>
          <p>info@eeebsmrstu.net</p>
        </div>
      </div>
<hr />
      <div className="footer-copyright">
        <p>&copy;&nbsp;<a href="#" className="font-bold">bsmrstu.eee.</a>&nbsp;&nbsp; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
