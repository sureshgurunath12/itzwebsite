import React from "react";
import "./Home.css";

function HomeContent() {
  const hero = cdnURL + "assets/images/Create_innovate_inspire-min.png";
  const Think_big = cdnURL + "assets/images/Think_big-min.png";
  return (
    <div className="container-fluid bg-img">
      <div className="hero-container">
        <div className="container flex">
          <div className="hero-img d-none d-sm-block">
            <img src={hero} width={805} height={640} alt="travel_suitcase" />
          </div>
          <div className="hero-txt">
            <div className="hero-title">
              The one stop solution for all Casino Floor Operations.
              <br />
              <br />
            </div>
            <div className="hero-img d-block d-sm-none">
              <img src={hero} width={805} height={640} alt="travel_suitcase" />
            </div>
            <div className="hero-description">
              iTechnowiZ Solutions Private Limited is involved in developing
              products for the Casino Gaming industry and has been set up as an
              extension of Konami Gaming Inc, headquartered in Las Vegas,
              Nevada, USA. Konami Gaming Inc is involved in developing Casino
              Games and Systems software for management of Casinos. As an
              Offshore Engineering partner ITZ develop, support and mange
              Konami's Casio Mangement product-SYNKROS.
            </div>
          </div>
        </div>
      </div>
      <div className="hero-container">
        <div className="container flex">
          <div className="hero-txt">
            <div className="hero-description">
              SYNKROS is a industry's most reliable core infrastructure for
              dependable real-time data down to the game theme level; funnelled
              that data into accessible reports and analytics for actionable
              insights; and supported this with a robust marketing suite for
              operators to drive incremental revenue through customisable
              programmes. SYNKROS provides a boarder understanding of unique
              patron demographics, to reach each individual with relevant
              communications and offers, this is possible because casino
              management system empowers operators to capture and compile data
              through all connected areas.
            </div>
            <div className="hero-img d-block d-sm-none">
              <img
                src={Think_big}
                width={805}
                height={640}
                alt="travel_suitcase"
              />
            </div>
          </div>
          <div className="hero-img d-none d-sm-block">
            <img
              src={Think_big}
              width={805}
              height={640}
              alt="travel_suitcase"
            />
          </div>
        </div>
      </div>
      <div className="think-big-container">
        <div className="container ">
          <div className="think-big-img">
            {/* <img
              src={Think_big}
              width={1348}
              height={509}
              alt="travel_suitcase"
            /> */}
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
    </div>
  );
}

export default HomeContent;
