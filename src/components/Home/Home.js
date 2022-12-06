import React from "react";
import "./Home.css";
import { isDesktop } from "react-device-detect";

function HomeContent() {
  const hero = cdnURL + "assets/images/Create_innovate_inspire.png";
  if (isDesktop) {
    return (
      <>
        <div className="container-fluid">
          <div className="hero-container">
            <div className="container flex">
              <div className="hero-img">
                <img
                  src={hero}
                  width={605}
                  height={600}
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
