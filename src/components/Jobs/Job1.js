import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Job1.css";
import JobsForm from "../../libs/JobsForm";
function Careers() {
  const Apply_job_heading = cdnURL + "assets/images/Apply_job_heading.png";

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
                  <div className="job-id">JOB20221109082601</div>
                  <div className="job-title">QA - Test Engineer</div>
                </div>
                <div className="job-section-right">
                  <a href="/careers" className="back-btn">
                    Back
                  </a>
                </div>
              </div>
              <div className="tech-skills">
                <div className="tech-skills-title">Technical Skills</div>
                <ul className="tech-skill-lists">
                  <li>
                    Understanding of requirements and behavior of the components
                  </li>
                  <li>
                    Hands-on experience in test automation using Selenium with
                    python scripting mandatory
                  </li>
                  <li>
                    Find, report and track errors discovered during the test
                    execution
                  </li>
                  <li>
                    Should be solution oriented and have problem solving
                    abilities
                  </li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Technical Skills</div>
                <ul className="work-exp-lists">
                  <li>1-2 years</li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Send your application</div>
                <div className="work-exp-sub-title">
                  Please fill the below required detail and submit it.
                </div>
                <JobsForm templateId="jobs_temp" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
