import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Job1.css";
import JobsForm from "../../libs/JobsForm";
function Careers(props) {
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
                  <div className="job-id">{props?.JobId}</div>
                  <div className="job-title">{props?.JobTitle}</div>
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
                      Proven knowledge in mobile development, testing, documentation, and deployment. 
                  </li>
                  <li>
                    Experience with web development and cross-platform mobile development.
                  </li>
                  <li>
                    Proficient in building responsive web applications with React-Redux
                  </li>
                  <li>
                    Thorough understanding and usage of Reactive Programming.
                  </li>
                  <li>
                    Ability to understand business requirements and translate them into technical requirements
                  </li>
                  <li>
                    A knack for benchmarking and optimization
                  </li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Technical Skills</div>
                <ul className="work-exp-lists">
                  <li>3-5 years</li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Send your application</div>
                
                <JobsForm templateId="jobs_temp" JobId={JobId}  />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
