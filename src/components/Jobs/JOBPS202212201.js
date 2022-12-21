import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Job1.css";
import JobsForm from "../../libs/JobsForm";
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
                    Java programming knowledge (OO, JVM, reflection, I/O, data structures), Java Swing Programming
                  </li>
                  <li>
                    Socket programming, Thread programming, TCP/IP stack knowledge
                  </li>
                  <li>
                    Advance SQL query procedure building, JDBC, Oracle, or other RDBMS, SQLPlus
                  </li>
                  <li>
                     Advance knowledge of XML and HTML 5, Linux basics
                  </li>
                  <li>
                     Advance knowledge of XML and HTML 5, Linux basics
                  </li>
                  <li>
                    Performance and monitoring knowledge, Design pattern experience, API design, ORM experience, SOA knowledge
                  </li>
                  <li>
                  Understanding of automation and deployment, Installation / Upgrade experience, Oracle SQL data analysis/troubleshooting.
                  </li>
                  <li>
                  Customer facing position - Ability to speak effectively before groups of customers or employees of organization.
                  </li>
                  <li>
                  Strong oral and written communication skills. A high degree of analytical thinking and problem-solving.
                  </li>
                  <li>
                  A high degree of analytical thinking and problem-solving.
                  </li>
                </ul>
              </div>
              <div className="work-exp">
                <div className="work-exp-title">Technical Skills</div>
                <ul className="work-exp-lists">
                  <li>4-8 years</li>
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
