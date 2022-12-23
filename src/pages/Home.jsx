import React, {useEffect} from "react";
import HomeContent from "../components/Home/Home.js";

const Home = () => {
  useEffect(() => {
    document.title = 'iTechnowiZ Solutions : Home';
  }, []);
  return <HomeContent />;
};

export default Home;
