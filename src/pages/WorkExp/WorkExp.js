import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work-exp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Sep 2023 - Present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<TbBrandJavascript />}
            >
              <h3 className="vertical-timeline-element-title">ETL Operations Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Blutech Consulting Pvt Ltd
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Feb 2024 - Apr 2024"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<AiFillGoogleCircle />}
            >
              <h3 className="vertical-timeline-element-title">
              Power BI Data Analyst
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Udemy . Apprenticeship
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Oct 2023 - Dec 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<AiFillGoogleCircle />}
            >
              <h3 className="vertical-timeline-element-title">
              Data Anlytics and BI Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Ignite - National Technology Fund · Seasonal
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Sep 2022 - Dec 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Jr Mern Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Eziline Software House Pvt Ltd, PK
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
