import React from "react";
import "../../components/ContactUs/ContactUs.css";
import { RequestForm } from "../../libs/RequestForm";
import { isDesktop } from "react-device-detect";
function ContactUs({ handler }) {
  let Banner = cdnURL + "assets/images/desktopbanner3.png";
  if (isDesktop) {
    Banner = cdnURL + "assets/images/desktopbanner3.png";
  } else {
    Banner = cdnURL + "assets/images/mobilebanner3.png";
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h1 className="font-weight-light title">Contact</h1>
          <div className="contactUs-container padding0">
            <div className="fields">
              <div className="fields-txt">
                Please fill the below form and send us your queries.
              </div>
              <RequestForm
                isProductHidden={true}
                isPasswordHidden={true}
                templateId="template_2jrsnqe"
              />
            </div>
            <h1 className="font-weight-light title">Map</h1>
          </div>
          <div className="padding0">
            <div className="map-container">
              <iframe
                className="gmap_iframe"
                width="100%"
                frameBorder="0"
                allowFullScreen=""
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=iTechnowiz Solutions&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="contactUs-container ">
            <br />

            <div className="text-center">
              <div className="contact-us-txt">
                <div className="fields">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="get-in-touch-title">
                          Get In Touch With Us
                        </div>
                        <div>5C, Gamma Block, SSPDL -Alpha City IT Park </div>
                        <div>OMR Road, Navalur,</div>
                        <div> Chennai, 603103,</div>
                        <div> Tamilnadu, India</div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 contactNumber">
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
                        <div className="text-left">
                          <div className="get-in-touch-title">Call US</div>

                          <a
                            href="tel:+919940698229"
                            className="phone-number-link"
                            eventname="Phone"
                          >
                            +91 9940698229
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
        </div>
      </div>
    </>
  );
}

export default ContactUs;
