import React from "react";
import "./Careers.css";
const Banner = cdnURL + "assets/images/desktopbanner4.png";

function Careers() {
  return (
    <>
      <div className="container-fluid hero-container">
        <img src={Banner} alt="travel_suitcase" />
      </div>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h1 className="font-weight-light title">Careers</h1>
          <div className="font-italic-txt">
            Recent openings
          </div>
          <div className="home-txt">
          We are Game Changers as principals and consultants, our expertise is showcased in the successful development and operation of our properties.
          </div>
          <br />
          <br />

          
          <section className="careersSection">
            <div className="careersList">
              <div class="bg-white" data-runfn="css animation init" data-object="before:height">
                <a href="/careers/jobs/JOB20221109082601" class="transition ease fast anchor-color-switch block onoff">
                  <span class="flex wrap justify-between align-items-center pad10">
                      <span class="flex--8 xs--12">
                          <span class="lead h7 font-medium block margb10 color-black-theme">
                              <i class="ion-ios-paper-outline"></i> QA - Test Engineer  
                          </span>
                          <span class="block color-black-five">
                              Must have 1-2 years of experience 
                          </span>
                      </span>
                      <span class="text-right">
                          <span class="inlineblock bg-five radius oh">
                              <span class="block small txt-short radius bg-none-theme">
                                  <span class="relative color-white">Apply Job</span>
                              </span>
                          </span>
                      </span>
                  </span>
                </a>
              </div>
              <div class="bg-white" data-runfn="css animation init" data-object="before:height">
                <a href="/careers/jobs/JOB20221109082601" class="transition ease fast anchor-color-switch block onoff">
                  <span class="flex wrap justify-between align-items-center pad10">
                      <span class="flex--8 xs--12">
                          <span class="lead h7 font-medium block margb10 color-black-theme">
                              <i class="ion-ios-paper-outline"></i> QA - Test Engineer  
                          </span>
                          <span class="block color-black-five">
                              Must have 1-2 years of experience 
                          </span>
                      </span>
                      <span class="text-right">
                          <span class="inlineblock bg-five radius oh">
                              <span class="block small txt-short radius bg-none-theme">
                                  <span class="relative color-white">Apply Job</span>
                              </span>
                          </span>
                      </span>
                  </span>
                </a>
              </div>
              <div class="bg-white" data-runfn="css animation init" data-object="before:height">
                <a href="/careers/jobs/JOB20221109082601" class="transition ease fast anchor-color-switch block onoff">
                  <span class="flex wrap justify-between align-items-center pad10">
                      <span class="flex--8 xs--12">
                          <span class="lead h7 font-medium block margb10 color-black-theme">
                              <i class="ion-ios-paper-outline"></i> QA - Test Engineer  
                          </span>
                          <span class="block color-black-five">
                              Must have 1-2 years of experience 
                          </span>
                      </span>
                      <span class="text-right">
                          <span class="inlineblock bg-five radius oh">
                              <span class="block small txt-short radius bg-none-theme">
                                  <span class="relative color-white">Apply Job</span>
                              </span>
                          </span>
                      </span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Careers;
