import React, {useEffect} from "react";
import CareersPage from "../components/Careers/Careers.js";

function Careers() {
  useEffect(() => {
    document.title = 'iTechnowiZ Solutions : Careers';
  }, []);

  return <CareersPage />;
}

export default Careers;
