import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ShopCollections.css";

function MultiCarouselSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Collection = [
    {
      id: "1",
      title: "Rosé",
      image: cdnURL + "assets/images/home/collection/2.png",
    },
    {
      id: "2",
      title: "Indian summer",
      image: cdnURL + "assets/images/home/collection/collection2.jpeg",
    },
    {
      id: "3",
      title: "Coming soon",
      image: cdnURL + "assets/images/home/collection/collection3.jpeg",
    },
  ];

  return (
    <div className="collectionsContainer">
      <div className="title">SHOP BY COLLECTION</div>

      <Carousel
        className="squareCarousel d-none d-sm-none d-md-none d-lg-block"
        responsive={responsive}
        infinite={false}
        showDots={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {Collection.map((Collection, index) => {
          return (
            <div className="square">
              <img src={Collection.image} alt="First slide" />
              <div className="name">{Collection.title}</div>
            </div>
          );
        })}
      </Carousel>

      <div className="mob-squareCarousel d-sm-block d-md-block d-lg-none">
        {Collection.map((Collection, index) => {
          return (
            <div className="square">
              <img src={Collection.image} alt="First slide" />
              <div className="name">{Collection.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MultiCarouselSection;
