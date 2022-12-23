import React, {useEffect} from "react";
import ContactUs from "../components/ContactUs/ContactUs";
const ContactUsPage = (props) => {
  useEffect(() => {
    document.title = 'iTechnowiZ Solutions : Contact Us';
  }, []);
  return <ContactUs />;
};

export default ContactUsPage;
