import React from "react";
import Carousel from "../components/Home/HeroContainer/HeroContainer";
import ShopCategory from "../components/Home/ShopCategory/ShopCategory";
import ShopCollections from "../components/Home/ShopCollections/ShopCollections";
import Featured from "../components/Home/Featured/Featured";
import Instagram from "../components/Home/Instagram/Instagram";
import VideoContent from "../components/Home/Video/Video";
import VirtualConsultant from "../components/Home/VirtualConsultant/VirtualConsultant";

const Home = () => {
  return (
    <>
      <Carousel />
      <ShopCategory />
      <ShopCollections />
      <Featured />
      <VirtualConsultant />
      <Instagram />
      <VideoContent />
    </>
  );
};

export default Home;
