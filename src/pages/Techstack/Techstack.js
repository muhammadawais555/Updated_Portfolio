import React from "react";
import "./techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import Fade from "react-reveal/Fade";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Development stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including Programming languages , frameworks , databases ,
          front-end and back-end tools and APIs
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <div className="header p-3">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Expertise
          </h2>
          <hr />
          <section>
            <div className="about___data">
              <div className="about___skils grid">
                <div className="row skills___data">
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">HTML</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">90%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">CSS</h3>{" "}
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">90%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Javascript</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development3"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">70%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">SSRS</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">90%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Red Hat Linux</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development3"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">70%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">SSIS</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development4"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">60%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Hadoop | Apache Spark</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development4"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">60%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">MongoDB</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development2"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">80%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Cloudera | Apache Impala</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development3"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">70%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Java | Scala</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development3"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">70%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">SQL | SSMS</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">60%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Power BI</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">75%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Data visualization</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">80%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Data Cleaning</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development3"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">70%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                  <Fade left transitionDuration={90}>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 skills___titles">
                      <h3 className="skills___name">Data Transformation</h3>
                      <div className="row expect">
                        <div className="col-10 skills___bar">
                          <span className="skills___percentage development4"></span>
                        </div>
                        <div className="col-2">
                          <span className="skills___number">60%</span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Techstack;
