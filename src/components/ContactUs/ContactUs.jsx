import React from "react";

import "../../components/ContactUs/ContactUs.css";
import { ContactUsForm } from "../../libs/ContactUsForm";
import { isDesktop } from "react-device-detect";
function ContactUs({ handler }) {
  let Banner = cdnURL + "assets/images/desktopbanner3.png";
  if (isDesktop) {
    Banner = cdnURL + "assets/images/desktopbanner3.png";
  } else {
    Banner = cdnURL + "assets/images/mobilebanner3.png";
  }
  return (
    <div className="container-fluid bg-img">
      <div className="container">
        <div className="row">
          <div className="padding0">
            <div className="contactUs-container">
              <br />

              <div className="text-center">
                <div className="contact-us-txt">
                  <div className="fields">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                          <div className="get-in-touch-title">Find Us</div>
                          <div>5C, Gamma Block,</div>
                          <div>SSPDL - Alpha City IT Park</div>
                          <div>No 25, OMR Road, Navalur,</div>
                          <div> Chennai, 603103,</div>
                          <div> Tamilnadu, India</div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 contactNumber">
                          <div className="text-left">
                            <div className="get-in-touch-title">Call US</div>

                            <a
                              href="tel:+919940698229"
                              className="phone-number-link"
                              eventname="Phone"
                            >
                              +91 9940698229
                            </a>
                            <br />
                            <br />
                          </div>
                          <div className="text-left">
                            <div className="get-in-touch-title">Email US</div>
                            <a
                              href="mailto:hr@itechnowizsolutions.com"
                              className="email-link"
                              eventname="Email"
                            >
                              hr@itechnowizsolutions.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="map-container">
              <iframe
                className="gmap_iframe"
                width="100%"
                height="439px"
                frameBorder="0"
                allowFullScreen=""
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=iTechnowiz Solutions&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="contactUs-container1 padding0">
          <br />
          <br />
          <div className="fields">
            <ContactUsForm templateId="contactus_tempid"/>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
