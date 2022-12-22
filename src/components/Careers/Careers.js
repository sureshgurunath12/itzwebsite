import React from "react";
import "./Careers.css";

function Careers() {
  const Apply_job_heading = cdnURL + "assets/images/Apply_job_heading-min.png";
  const Careers_havefun = cdnURL + "assets/images/Careers_havefun-min.png";
  const View_all_jobs = cdnURL + "assets/images/View_all_jobs-min.png";

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
                   iTechnowiZ Solutions is pioneering the industry with the right mix of talents. Our work culture furthers innovation that provides world-class design and experience in the gaming enterprise management systems.                  <img
                    className="have-fun-img d-block d-md-none"
                    src={Careers_havefun}
                  />
                  <div className="have-fun-viewall">
                    <a href="#applyjobs">
                      <img src={View_all_jobs} />
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />

              <div className="careers-lists-section" id="applyjobs">
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
                      href="/careers/jobs/JOBQA20221220"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">QA - Test Automation Engineer</div>
                        <div className="block color-black-five">
                          Must have 4-8 years of experience in Automation
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="apply-job">Apply Job</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBUI202212201"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">UI - UI/UX Developer - I</div>
                        <div className="block color-black-five">
                          Must have 3-5 years of experience in Web development.
                        </div>
                      </div>
                      <span className="apply-job">Apply Job</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBUI202212202"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">UI - UI/UX Developer - II</div>
                        <div className="block color-black-five">
                          Must have 5-8 years of experience in Web development.
                        </div>
                      </div>
                      <span className="apply-job">Apply Job</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBJAVA202212201"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">Java - Java Developer - I</div>
                        <div className="block color-black-five">
                          Must have 3-6 years of experience in Java development
                        </div>
                      </div>
                      <span className="apply-job">Apply Job</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBJAVA202212202"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">Java - Java Developer - II</div>
                        <div className="block color-black-five">
                          Must have 6-10 years of experience in Java development
                        </div>
                      </div>
                      <span className="apply-job">Apply Job</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBPS202212201"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">Java - Java Product Support - I</div>
                        <div className="block color-black-five">
                          Must have 4-8 years of experience in Java Programming
                        </div>
                      </div>
                      <span className="apply-job">Apply Job</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBPS202212202"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">Java - Java Product Support - II</div>
                        <div className="block color-black-five">
                          Must have 8-12 years of experience in Java Programming
                        </div>
                      </div>
                      <span className="apply-job">Apply Job</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs/JOBDB202212201"
                      className="opening-links"
                    >
                      <div>
                        <div className="lead">Database - Database Developer</div>
                        <div className="block color-black-five">
                          Must have 6-8 years of experience in PL/SQL
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
