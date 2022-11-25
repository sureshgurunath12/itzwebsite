import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ShopCategory.css";

function MultiCarouselSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const Category = [
    {
      id: "1",
      title: "art",
      image: cdnURL + "assets/images/home/category/4.png",
    },
    {
      id: "2",
      title: "armchairs",
      image: cdnURL + "assets/images/home/category/2.png",
    },
    {
      id: "3",
      title: "consoles",
      image: cdnURL + "assets/images/home/category/3.png",
    },
    {
      id: "4",
      title: "mirrors and frames",
      image: cdnURL + "assets/images/home/category/1.png",
    },
  ];

  return (
    <div className="categoryContainer">
      <div className="title">SHOP BY CATEGORY</div>
      <Carousel
        className="circleCarousel"
        responsive={responsive}
        infinite={false}
        showDots={true}
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {Category.map((Category, index) => {
          return (
            <div className="circle">
              <img src={Category.image} alt="First slide" />
              <div className="name">{Category.title}</div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MultiCarouselSection;
