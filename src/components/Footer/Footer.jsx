import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="container-fluid">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center copyRight">
          &copy; 2022 iTechnowiZ Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
