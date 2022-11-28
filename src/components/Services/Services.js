import React from "react";
import "./Services.css";
import { isDesktop } from "react-device-detect";

function Services() {
  let Banner = cdnURL + "assets/images/desktopbanner3.png";
  if (isDesktop) {
     Banner = cdnURL + "assets/images/desktopbanner3.png";
  } else {
     Banner = cdnURL + "assets/images/mobilebanner3.png";
  }

  const product = cdnURL + "assets/images/product.jpeg";
  const development = cdnURL + "assets/images/development.jpeg";
  const casinos = cdnURL + "assets/images/casinos.jpeg";
  return (
    <>
      <div className="container-fluid hero-container">
        <img src={Banner} alt="travel_suitcase" />
      </div>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h1 className="font-weight-light title">Services</h1>
          <div className="font-italic-txt">
            Highest quality and on-time delivery.
          </div>
          <div className="home-txt">
            As a trusted industry, the iTechnowiZ Solutions team is dedicated to fulfilling the best in quality through all areas of the organization.
          </div>
          <br />
          <br />
          <section className="leaderSection">
                <h1 className="subtitle">Services Offered</h1>
                <div className="leaderList">

                  <div className="leaderItemBox">
                    <div>
                      <a className="button tile-action" href="/gaming/leadership/steve-sutherland.html">
                        <img src={product} data-image-width="313" data-image-height="250" />
                      </a>
                      <div className="nameBox">
                        <h3>Konami Gaming Products</h3>
                        <p>iTechnowiZ Solutions Private Limited is involved in developing products for the Casino Gaming industry</p>
                      </div>
                     </div>
                  </div>

                  <div className="leaderItemBox">
                    <div> 
                      <a className="button tile-action" href="/gaming/leadership/steve-sutherland.html">
                        <img src={development} data-image-width="313" data-image-height="250" />
                      </a>
                      <div className="nameBox">
                        <h3>Development</h3>
                        <p>iTechnowiZ Solutions Private Limited is involved in developing products for the Casino Gaming industry</p>
                      </div>
                     </div>
                  </div>

                  <div className="leaderItemBox">
                    <div>
                      <a className="button tile-action" href="/gaming/leadership/steve-sutherland.html">
                        <img src={casinos} width="315" height="250" />
                      </a>
                      <div className="nameBox">
                        <h3>Operations of Casinos</h3>
                        <p>iTechnowiZ Solutions Private Limited is involved in developing products for the Casino Gaming industry</p>
                      </div>
                     </div>
                  </div>

                </div>
            </section>
          </div>
      </div>
    </>
  );
}

export default Services;
