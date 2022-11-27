import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Content from "./Content/Content";
import { isDesktop } from "react-device-detect";

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
  if (isDesktop) {
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
        <Content />
      </>
    );
  }

  return (
    <>
      <div className="container-fluid hero-container">
        <Carousel
          interval={10000}
          autoPlay={true}
          controls={true}
          indicators={true}
        >
          {MobBanners.map((MobBanners, index) => {
            return (
              <Carousel.Item>
                <div key={MobBanners}>
                  <img src={MobBanners} alt="travel_suitcase" />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <Content />
    </>
  );
}

export default HomeContent;
