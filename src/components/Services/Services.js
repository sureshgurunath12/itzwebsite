import React from "react";
import "./Services.css";
import { isDesktop } from "react-device-detect";

function Services() {
  const product = cdnURL + "assets/images/Konami_gaming_products.png";
  const development = cdnURL + "assets/images/Developments.png";
  const Operations_of_casino =
    cdnURL + "assets/images/Operations_of_casino.png";
  return (
    <div className="container-fluid services-container bg-img">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="prod-text">
              iTechnowiZ Solutions Private Limited is involved in developing
              products for the Casino Gaming industry
            </div>
            <img src={product} data-image-width="313" data-image-height="250" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-12">
            <img
              src={development}
              data-image-width="313"
              data-image-height="250"
            />
            <div className="prod-text1">
              iTechnowiZ Solutions Private Limited is involved in developing
              products for the Casino Gaming industry
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-12 text-right">
            <div className="prod-text">
              iTechnowiZ Solutions Private Limited is involved in developing
              products for the Casino Gaming industry
            </div>
            <img
              src={Operations_of_casino}
              data-image-width="313"
              data-image-height="250"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
