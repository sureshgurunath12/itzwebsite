import React, { useEffect } from "react";
import "./HeroContainer.css";
import Carousel from "react-bootstrap/Carousel";
import { isMobile } from "react-device-detect";

function CarouselSection() {
  const MobBanners = [
    cdnURL + "assets/images/home/hero-images/m1.png",
    cdnURL + "assets/images/home/hero-images/m2.png",
    cdnURL + "assets/images/home/hero-images/m3.png",
    cdnURL + "assets/images/home/hero-images/m4.png",
  ];
  const DesktopBanners = [
    cdnURL + "assets/images/home/hero-images/1.png",
    cdnURL + "assets/images/home/hero-images/2.png",
    cdnURL + "assets/images/home/hero-images/1.png",
    cdnURL + "assets/images/home/hero-images/2.png",
  ];
  if (isMobile) {
    return (
      <div className="heroContainer">
        <Carousel
          interval={10000}
          autoPlay={true}
          controls={true}
          indicators={true}
        >
          {MobBanners.map((MobBanners, index) => {
            return (
              <Carousel.Item>
                <img
                  key={MobBanners.id}
                  className=""
                  src={MobBanners}
                  alt="First slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
  return (
    <div className="heroContainer">
      <Carousel
        interval={10000}
        autoPlay={true}
        controls={true}
        indicators={true}
      >
        {DesktopBanners.map((DesktopBanners, index) => {
          return (
            <Carousel.Item>
              <img
                key={DesktopBanners.id}
                className=""
                src={DesktopBanners}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSection;
