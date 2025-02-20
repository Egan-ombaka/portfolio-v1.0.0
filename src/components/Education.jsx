import React from "react";
import "../css/Work.css";
import { FaArrowRight } from "react-icons/fa";

const Education = () => {
  return (
    <div className="work-section">
      <div className="work-container">
        <h6 className="work-xp">Education</h6>
        <div className="mac-e">
          <div className="xp-image">
            <img
              className="work-logo"
              src="images/zetech.jpeg"
              alt="Mac E logo"
            />
          </div>
          <div className="xp-inf">
            <div className="xp-info">
              <div>
                <h6 className="company-info">
                  Zetech University
                  <span>
                    {" "}
                    <FaArrowRight />
                  </span>
                </h6>
                <h6 className="company-info">Bs Software Engineering</h6>
              </div>

              <h6 className="work-period">May 2024 - Present.</h6>
            </div>

            <div className="overflow-info">
              <p>
                Worked as a Front-End Web Developer "Partly did Back-End Stuff
                ", convertiing website design into React Code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
