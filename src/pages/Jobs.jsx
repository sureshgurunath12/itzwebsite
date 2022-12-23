import React,{useEffect} from "react";
import Job1Page from "../components/Jobs/index.js";

function Jobs() {
  useEffect(() => {
    document.title = 'iTechnowiZ Solutions : Jobs';
  }, []);
  return <Job1Page />;
}

export default Jobs;
