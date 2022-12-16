import React from "react";
import "./Careers.css";

function Careers() {
  const Apply_job_heading = cdnURL + "assets/images/Apply_job_heading.png";
  const Careers_havefun = cdnURL + "assets/images/Careers_havefun.png";
  const View_all_jobs = cdnURL + "assets/images/View_all_jobs.png";

  return (
    <div className="container-fluid bg-img">
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
              <div className="have-fun">
                <img
                  className="have-fun-img d-none d-md-block"
                  src={Careers_havefun}
                />

                <div className="have-fun-txt">
                  iTechnowiZ Solutions Private Limited is involved in developing
                  products for the Casino Gaming industry
                  <img
                    className="have-fun-img d-block d-md-none"
                    src={Careers_havefun}
                  />
                  <div className="have-fun-viewall">
                    <a href="#">
                      <img src={View_all_jobs} />
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />

              <div className="careers-lists-section">
                <div className="career-apply">
                  <img
                    className="career-apply-img"
                    src={Apply_job_heading}
                    width={439}
                    height={181}
                  />
                </div>
                <ul className="careers-lists">
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
                      <div className="text-right">
                        <span className="apply-job">Apply Job</span>
                      </div>
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
    </div>
  );
}

export default Careers;
