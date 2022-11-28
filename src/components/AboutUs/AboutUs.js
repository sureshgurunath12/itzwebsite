import React from "react";
import "./AboutUs.css";
import { isDesktop } from "react-device-detect";



function AboutUs() {
  let Banner = cdnURL + "assets/images/desktopbanner2.png";
  if (isDesktop) {
     Banner = cdnURL + "assets/images/desktopbanner2.png";
  } else {
     Banner = cdnURL + "assets/images/mobilebanner2.png";
  }
  return (
    <>
      <div className="container-fluid hero-container">
        <img src={Banner} alt="banner" />
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
