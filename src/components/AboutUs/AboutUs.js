import React from "react";
import "./AboutUs.css";
const Banner = cdnURL + "assets/images/desktopbanner2.png";

function AboutUs() {
  return (
    <>
      <div className="container-fluid hero-container">
        <img src={Banner} alt="travel_suitcase" />
      </div>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h1 className="font-weight-light title">About Us</h1>
          <div className="font-italic-txt">
            The one stop solution for all Casino Floor Operations.
          </div>
          <div className="home-txt">
            iTechnowiZ Solutions Private Limited is involved in developing
            products for the Casino Gaming industry and has been set up as an
            extension of Konami Gaming Inc headquartered in Las Vegas, Nevada,
            USA which is a group company of Konami Holdings Corporation, Japan.
            Konami Gaming Inc is involved in developing Casino games and Systems
            software for management of Casinos. <br />
            <br />
            iTechnowiZ Solutions Private Limited is involved in developing
            products for the Casino Gaming industry and has been set up as an
            extension of Konami Gaming Inc headquartered in Las Vegas, Nevada,
            USA which is a group company of Konami Holdings Corporation, Japan.
            Konami Gaming Inc is involved in developing Casino games and Systems
            software for management of Casinos. iTechnowiZ Solutions Private
            Limited is involved in developing products for the Casino Gaming
            industry and has been set up as an extension of Konami Gaming Inc
            headquartered in Las Vegas, Nevada, USA which is a group company of
            Konami Holdings Corporation, Japan. Konami Gaming Inc is involved in
            developing Casino games and Systems software for management of
            Casinos.
            <br />
            <br />
            iTechnowiZ Solutions Private Limited is involved in developing
            products for the Casino Gaming industry and has been set up as an
            extension of Konami Gaming Inc headquartered in Las Vegas, Nevada,
            USA which is a group company of Konami Holdings Corporation, Japan.
            Konami Gaming Inc is involved in developing Casino games and Systems
            software for management of Casinos.
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
