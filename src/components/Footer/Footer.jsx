import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="container-fluid">
      <div className="footer-container container">
        <div className="row">
          <div className="col-md-12">
            <div className="align-center">
              <ul>
                <li>
                  <a href="/home">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center copy-right">
            &copy; 2022 iTechnowiZ Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
