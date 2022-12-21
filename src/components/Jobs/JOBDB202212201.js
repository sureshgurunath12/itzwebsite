import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Job1.css";
import JobsForm from "../../libs/JobsForm";
import { propTypes } from "react-bootstrap/esm/Image";
function Careers(props) {
  const Apply_job_heading = cdnURL + "assets/images/Apply_job_heading.png";
  const JobId = props?.JobId;
  return (
    <div className="container-fluid bg-img">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section className="job-container">
              <img
                className="apply-job-img d-none"
                src={Apply_job_heading}
                width={439}
                height={181}
              />
              <div className="job-section">
                <div className="job-section-left">
                  <div className="job-id">{props?.JobId}</div>
                  <div className="job-title">{props?.JobTitle}</div>
                </div>
                <div className="job-section-right">
                  {/* <a href="/careers" className="back-btn">
                    Back
                  </a> */}
                </div>
              </div>
              <div className="tech-skills">
                <div className="tech-skills-title">Technical Skills</div>
                <ul className="tech-skill-lists">
                  <li>
                  Good PL/SQL Experience in enterprise class product development.
                  </li>
                  <li>
                  Performance Analysis and tuning experience
                  </li>
                  <li>
                  Oracle Advanced Queuing
                  </li>
                  <li>
                  Golden Gate Microservices experience preferred.
                  </li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Technical Skills</div>
                <ul className="work-exp-lists">
                  <li>6-8 years</li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Send your application</div>
                <JobsForm templateId="jobs_temp" JobId={JobId} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
