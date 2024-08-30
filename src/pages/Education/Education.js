import React from "react";
import { MdSchool } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="container">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2019 - 2023"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">BSCS</h3>
              <h4 className="vertical-timeline-element-subtitle">
                FUUAST ISL, PK
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2015 - 2017"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<BiSolidSchool />}
            >
              <h3 className="vertical-timeline-element-title">Intermediate</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bahria College ISL, PK
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2013 - 2015"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<LuSchool />}
            >
              <h3 className="vertical-timeline-element-title">Matric</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bahria Model College ISL, PK
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
