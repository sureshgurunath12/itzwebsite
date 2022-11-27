import React from "react";
import "./Leadership.css";
const Banner = cdnURL + "assets/images/desktopbanner3.png";

function Leadership() {
  return (
    <>
      <div className="container-fluid hero-container">
        <img src={Banner} alt="travel_suitcase" />
      </div>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <h1 className="font-weight-light title">Leadership</h1>
          <div className="font-italic-txt">
            We come together under a shared commitment to deliver top products and services.
          </div>
          <div className="home-txt">
            As a trusted industry, the iTechnowiZ Solutions team is dedicated to fulfilling the best in quality through all areas of the organization.
          </div>
          <br />
          <br />
          <section className="leaderSection">
                <h2>Executive Team</h2>
                <div className="leaderList">

                  <div className="leaderItemBox">
                    <div>
                      <a className="button tile-action" href="/gaming/leadership/steve-sutherland.html">
                        <img src="" data-image-width="313" data-image-height="250" />
                      </a>
                      <div className="nameBox">
                        <h3>Mr. V.M.K.Gopal</h3>
                        <p>President & CEO </p>
                      </div>
                     </div>
                  </div>

                  <div className="leaderItemBox">
                    <div> 
                      <a className="button tile-action" href="/gaming/leadership/steve-sutherland.html">
                        <img src="" data-image-width="313" data-image-height="250" />
                      </a>
                      <div className="nameBox">
                        <h3>Mr. Kaliyappan </h3>
                        <p>Director - Technology  </p>
                      </div>
                     </div>
                  </div>

                  <div className="leaderItemBox">
                    <div>
                      <a className="button tile-action" href="/gaming/leadership/steve-sutherland.html">
                        <img src="" width="315" height="250" />
                      </a>
                      <div className="nameBox">
                        <h3>Mr. Siva</h3>
                        <p>Director - Quality Assurance</p>
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

export default Leadership;
