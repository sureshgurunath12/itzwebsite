import React from "react";
import "../Featured/Featured.css";
import Carousel from "react-multi-carousel";
import List1 from "../../../assets/images/home/featured/f-list1.png";
import List2 from "../../../assets/images/home/featured/f-list2.png";
import List3 from "../../../assets/images/home/featured/f-list3.png";
import List4 from "../../../assets/images/home/featured/f-list4.png";
import List5 from "../../../assets/images/home/featured/f-list5.png";

function Featured() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="featured-container">
      <div className="title">FEATURED IN</div>
      <div className="featured-list">
        <Carousel
          className="circleCarousel"
          responsive={responsive}
          infinite={false}
          showDots={true}
          autoPlay={false}
          shouldResetAutoplay={false}
          removeArrowOnDeviceType={[]}
        >
          <img src={List1} className="img-fluid" alt="" />
          <img src={List2} className="img-fluid" alt="" />
          <img src={List3} className="img-fluid" alt="" />
          <img src={List4} className="img-fluid" alt="" />
          <img src={List5} className="img-fluid" alt="" />
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
