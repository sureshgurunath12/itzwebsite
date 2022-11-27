import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
function HomeContent() {
  const MobBanners = [
    cdnURL + "assets/images/mobilebanner1.png",
    cdnURL + "assets/images/mobilebanner2.png",
    cdnURL + "assets/images/mobilebanner3.png",
    cdnURL + "assets/images/mobilebanner4.png",
  ];
  const DesktopBanners = [
    cdnURL + "assets/images/desktopbanner1.png",
    cdnURL + "assets/images/desktopbanner2.png",
    cdnURL + "assets/images/desktopbanner3.png",
    cdnURL + "assets/images/desktopbanner4.png",
  ];
  return (
    <>
      <div className="container-fluid hero-container">
        <Carousel
          interval={10000}
          autoPlay={true}
          controls={true}
          indicators={true}
        >
          {DesktopBanners.map((DesktopBanners, index) => {
            return (
              <Carousel.Item>
                <div key={DesktopBanners}>
                  <img src={DesktopBanners} alt="travel_suitcase" />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h1 className="font-weight-light title">About</h1>
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

export default HomeContent;
