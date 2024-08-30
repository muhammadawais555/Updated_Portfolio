import React from "react";
// import aa from "./aa.ico";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./menu.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVoicePresentation,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <>
      <div className="SIDEBAR">
        {/* <a href="#home" className="nav__logo">
          <img src={aa} alt="MyPicture" />
        </a> */}
        <Zoom>
          <div className="replace">
            <h1>MA</h1>
          </div>
        </Zoom>
        <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {" "}
                  <FcHome size={23} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {" "}
                  <FcReadingEbook size={23} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {" "}
                  <FcBiotech size={23} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {" "}
                  <FcVoicePresentation size={23} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work-exp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact size={23} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {" "}
                  <FcAbout size={23} />
                </Link>
              </div>
            </div>
          </div>{" "}
        </Fade>
        <div className="nav__footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
