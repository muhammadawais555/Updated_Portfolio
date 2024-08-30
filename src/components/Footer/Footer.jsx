import React from "react";
import "./Footer.css";
import Wave from "../../assets/images/wave.png";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import Fade from "react-reveal";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_picture">
        <img src={Wave} alt="" />
      </div>
      <div className="f-content">
        <Fade left>
          <span>mawais2010009@gmail.com</span>
        </Fade>
        <Fade right>
          <div className="f-icons">
            <a href="https://www.instagram.com/m_awaiskhan55/">
              <BsInstagram color="white" size={"3rem"} />
            </a>
            <a href="https://github.com/muhammadawais555">
              <BsGithub color="white" size={"3rem"} />
            </a>
            <a href="https://www.linkedin.com/in/mawais55/">
              <BsLinkedin color="white" size={"3rem"} />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
