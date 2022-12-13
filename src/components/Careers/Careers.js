import React from "react";
import "./Careers.css";
import { RequestForm } from "../../libs/RequestForm";
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
                <img className="have-fun-img" src={Careers_havefun} />

                <div className="have-fun-txt">
                  iTechnowiZ Solutions Private Limited is involved in developing
                  products for the Casino Gaming industry
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
              <img src={Apply_job_heading} width={439} height={181} />
              <div>
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
                <RequestForm
                  isProductHidden={true}
                  isPasswordHidden={true}
                  templateId="template_2jrsnqe"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
