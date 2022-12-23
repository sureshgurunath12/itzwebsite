import React,{useEffect} from "react";
import Services from "../components/Services/Services.js";

function ServicesPage() {
  useEffect(() => {
    document.title = 'iTechnowiZ Solutions : Services';
  }, []);
  return <Services />;
}

export default ServicesPage;
