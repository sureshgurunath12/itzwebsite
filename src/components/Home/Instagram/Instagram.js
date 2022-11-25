import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Instagram.css";
function MultiCarouselSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const Instagram = [
    {
      id: "1",
      title: "mirrors and frames",
      image: cdnURL + "assets/images/home/instagram/1.png",
    },
    {
      id: "2",
      title: "armchairs",
      image: cdnURL + "assets/images/home/instagram/2.png",
    },
    {
      id: "3",
      title: "consoles",
      image: cdnURL + "assets/images/home/instagram/3.png",
    },
    {
      id: "4",
      title: "art",
      image: cdnURL + "assets/images/home/instagram/4.png",
    },
    {
      id: "5",
      title: "armchairs",
      image: cdnURL + "assets/images/home/instagram/5.png",
    },
    {
      id: "6",
      title: "consoles",
      image: cdnURL + "assets/images/home/instagram/6.png",
    },
    {
      id: "7",
      title: "art",
      image: cdnURL + "assets/images/home/instagram/7.png",
    },
  ];
  return (
    <div className="instagramContainer">
      <div className="title">@INSTAGRAM</div>
      <Carousel
        className="circleCarousel"
        responsive={responsive}
        infinite={false}
        showDots={true}
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {Instagram.map((Instagram, index) => {
          return (
            <div className="img">
              <a href="https://www.instagram.com/khenshu_india/">
                <img src={Instagram.image} alt="First slide" />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MultiCarouselSection;
