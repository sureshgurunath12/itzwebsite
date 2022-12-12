import React from "react";
import "./Home.css";
import { isDesktop } from "react-device-detect";

function HomeContent() {
  const hero = cdnURL + "assets/images/Create_innovate_inspire.png";
  const Think_big = cdnURL + "assets/images/Think_big.png";
  const Leadership_heading = cdnURL + "assets/images/Leadership_heading.png";

  if (isDesktop) {
    return (
      <>
        <div className="container-fluid">
          <div className="hero-container">
            <div className="container flex">
              <div className="hero-img">
                <img
                  src={hero}
                  width={805}
                  height={670}
                  alt="travel_suitcase"
                />
              </div>
              <div className="hero-txt">
                <div className="hero-title">
                  The one stop solution for all Casino Floor Operations.
                  <br />
                  <br />
                </div>
                <div className="hero-description">
                  iTechnowiZ Solutions Private Limited is involved in developing
                  products for the Casino Gaming industry and has been set up as
                  an extension of Konami Gaming Inc headquartered in Las Vegas,
                  Nevada, USA which is a group company of Konami Holdings
                  Corporation, Japan. Konami Gaming Inc is involved in
                  developing Casino games and Systems software for management of
                  Casinos.
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="think-big-container">
            <div className="container">
              <div className="think-big-img">
                <img
                  src={Think_big}
                  width={1348}
                  height={509}
                  alt="travel_suitcase"
                />
              </div>
              <div className="think-big-txt">
                <ul>
                  <li>Developing products for gaming industry</li>
                  <li>Enterprise management system for operating casinos</li>
                  <li>iTZ's in-depth understanding of the gaming industry</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="leadership-container">
            <div className="container">
              <div className="leadership-img">
                <img
                  src={Leadership_heading}
                  width={352}
                  height={90}
                  alt="travel_suitcase"
                />
              </div>
              <div className="leadership">
                <div className="leadership1">
                  <div className="picture"></div>
                  <div className="name">V.M.K. Gopal</div>
                  <div className="posting">President & CEO</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </div>
                </div>
                <div className="leadership2">
                  <div className="picture"></div>
                  <div className="name">Kaliappan</div>
                  <div className="posting">Director Technology</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </div>
                </div>
                <div className="leadership3">
                  <div className="picture"></div>
                  <div className="name">Siva</div>
                  <div className="posting">Director Quality Assurance</div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </>
    );
  } else {
    return (
      <>
        <div className="container-fluid hero-container">
          <img src={hero} alt="travel_suitcase" />
        </div>
      </>
    );
  }
}

export default HomeContent;
