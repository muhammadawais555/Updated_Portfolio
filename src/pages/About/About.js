import React from "react";
import { useTheme } from "../../context/ThemeContext";
import aa from "../../components/Menus/aa.ico";
import "./about.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/resume.pdf";
import "../Home/home.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
// import ScrollDown from "../../components/Scroll/ScrollDown";
import Fade from "react-reveal/Fade";

const About = () => {
  const [theme, setTheme] = useTheme();
  const handletheme = () => {
    setTheme((prevstate) => (prevstate === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="about" id="about">
        <div className="theme-btn" onClick={handletheme}>
          {theme === "light" ? (
            <BsFillMoonFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <Fade right>
          <div className="home-content">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Power BI Engineer!", "Jr Data Analyst!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=03365544467"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={resume}
                download="Muhammad_Awais_CV.pdf"
              >
                My Resume
              </a>
            </div>
          </div>
        </Fade>

        <div className="row pic-text">
          <div className="col-md-4  col-xl-4 col-lg-4 col-xs-12 about-img">
            <img src={aa} alt="mypic" />
          </div>
          <div className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hello there! 👋 As a Junior Power BI Data Analyst, 
              I'm on an exciting journey of transforming data into 
              actionable insights. My days are filled with data exploration,
              modeling, and visualization, using tools like Power BI, SQL, 
              and DAX to drive data-driven decisions. I'm passionate 
              about turning complex datasets into meaningful, 
              user-friendly reports and dashboards. Eager to learn, 
              grow, and contribute my analytical skills, I thrive on 
              continuous learning and problem-solving. Let's connect 
              and uncover valuable insights together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
