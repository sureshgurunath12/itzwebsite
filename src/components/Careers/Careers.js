import React from "react";
import "./Careers.css";

function Careers() {
  const Apply_job_heading = cdnURL + "assets/images/Apply_job_heading.png";
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <section className="careers-section">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={Apply_job_heading} width={439} height={181} />
            <div className="careers-list">
              <ul>
                <li>
                  <a
                    href="/careers/jobs/JOB20221109082601"
                    className="opening-links"
                  >
                    <div>
                      <div className="lead">QA - Test Engineer</div>
                      <div className="block color-black-five">
                        Must have 1-2 years of experience
                      </div>
                    </div>
                    <span className="apply-job">Apply Job</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/jobs/JOB20221109082601"
                    className="opening-links"
                  >
                    <div>
                      <div className="lead">QA - Test Engineer</div>
                      <div className="block color-black-five">
                        Must have 1-2 years of experience
                      </div>
                    </div>
                    <span className="apply-job">Apply Job</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/jobs/JOB20221109082601"
                    className="opening-links"
                  >
                    <div>
                      <div className="lead">QA - Test Engineer</div>
                      <div className="block color-black-five">
                        Must have 1-2 years of experience
                      </div>
                    </div>
                    <span className="apply-job">Apply Job</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/jobs/JOB20221109082601"
                    className="opening-links"
                  >
                    <div>
                      <div className="lead">QA - Test Engineer</div>
                      <div className="block color-black-five">
                        Must have 1-2 years of experience
                      </div>
                    </div>
                    <span className="apply-job">Apply Job</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Careers;
