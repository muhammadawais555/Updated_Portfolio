import React from "react";
import "./Projects.css";
import Cal from "../../assets/images/Cal.png";
import Bik from "../../assets/images/Bik.png";
import cust from "../../assets/images/cust.png";
import fyp from "../../assets/images/fyp.png";
import wea from "../../assets/images/wea.png";
import sho from "../../assets/images/sho.png";

const Projects = () => {
  return (
    <>
      <div className="project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="p-3 text-center justify-content">
          👉 Created dashboards and reports by integrating data 
          from various sources such as SQL Server, Azure, and other platforms.
          Leveraged diverse transformations, measures, and calculated 
          columns to derive actionable insights. Implemented data 
          modeling techniques to visualize complex datasets, ensuring 
          accurate and user-friendly outputs. Utilized Power Query, DAX, 
          and M transformations to shape data and create compelling, 
          interactive dashboards that drive data-driven decisions.
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Source - CSV</span>
                <img src={fyp} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Power BI</span>
                <span className="card-detial-badge">Data Modeling</span>
                <span className="card-detial-badge">Data Cleaning</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Inventory Analysis Using BI</h5>
                </div>
                <a className="ad-btn" href="https://github.com/muhammadawais555/Molegen">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Source - SQL Server</span>
                <img src={cust} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Data Modeling</span>
                <span className="card-detial-badge">SQL</span>
                <span className="card-detial-badge">DAX</span>
                <span className="card-detial-badge">Power Query</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Customers Churn Analysis</h5>
                </div>
                <a className="ad-btn" href="https://github.com/muhammadawais555/Customer-churn-analysis">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Source - Kaggle</span>
                <img src={Cal} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Power BI</span>
                <span className="card-detial-badge">Data Transformation</span>
                <span className="card-detial-badge">DAX</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Riders Safety Analysis in US</h5>
                </div>
                <a className="ad-btn" href="https://github.com/muhammadawais555/Conveyance-safety-Analysis">
                  View
                </a>
              </div>
            </div>
          </div>      
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Source - SQL Server</span>
                <img src={Bik} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Power BI</span>
                <span className="card-detial-badge">DAX</span>
                <span className="card-detial-badge">SQL</span>
                <span className="card-detial-badge">Data Transformation</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Bike riding Sales Analysis</h5>
                </div>
                <a className="ad-btn" href="https://github.com/muhammadawais555/Bike-riding-Sales-Analysis">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Source - CSV / Excel</span>
                <img src={wea} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Power BI</span>
                <span className="card-detial-badge">DAX</span>
                <span className="card-detial-badge">Power Query</span>
                <span className="card-detial-badge">M Language</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Amazon Prime Analysis</h5>
                </div>
                <a className="ad-btn" href="https://github.com/muhammadawais555/Amazon_Prime">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Source - Excel</span>
                <img src={sho} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto">
                <span className="card-detial-badge">Power BI</span>
                <span className="card-detial-badge">Data visualization</span>
                <span className="card-detial-badge">Power Query</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Performance Tracker</h5>
                </div>
                <a className="ad-btn" href="https://github.com/muhammadawais555/Watch-Performance-Tracker">
                  View 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
