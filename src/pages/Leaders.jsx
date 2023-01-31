import React, {useEffect} from "react";
import Leaders from "../components/Leaders/Leaders";
const LeadersPage = (props) => {
  useEffect(() => {
    document.title = 'iTechnowiZ Solutions : Contact Us';
  }, []);
  return <Leaders />;
};

export default LeadersPage;
