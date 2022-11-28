import React from "react";
import "./Leadership.css";
import { isDesktop } from "react-device-detect";

function Leadership() {
  let Banner = cdnURL + "assets/images/desktopbanner3.png";
  if (isDesktop) {
    Banner = cdnURL + "assets/images/desktopbanner3.png";
  } else {
    Banner = cdnURL + "assets/images/mobilebanner3.png";
  }
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
            We come together under a shared commitment to deliver top products
            and services.
          </div>
          <div className="home-txt">
            As a trusted industry, the iTechnowiZ Solutions team is dedicated to
            fulfilling the best in quality through all areas of the
            organization.
          </div>
          <br />
          <br />
          <section className="leaderSection">
            <h1 className="subtitle">Executive Team</h1>
            <div className="leaderList">
              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. V.M.K.Gopal</h3>
                  <p>President & CEO </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Kaliyappan </h3>
                  <p>Director - Technology </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Siva</h3>
                  <p>Director - Quality Assurance</p>
                </div>
              </div>
            </div>
          </section>
          <section className="leaderSection">
            <h1 className="subtitle">Senior Management</h1>
            <div className="leaderList">
              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. V.M.K.Gopal</h3>
                  <p>President & CEO </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Kaliyappan </h3>
                  <p>Director - Technology </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Siva</h3>
                  <p>Director - Quality Assurance</p>
                </div>
              </div>
            </div>
          </section>
          <section className="leaderSection">
            <h1 className="subtitle">Web Team</h1>
            <div className="leaderList">
              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. V.M.K.Gopal</h3>
                  <p>President & CEO </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Kaliyappan </h3>
                  <p>Director - Technology </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Siva</h3>
                  <p>Director - Quality Assurance</p>
                </div>
              </div>
            </div>
          </section>
          <section className="leaderSection">
            <h1 className="subtitle">Mobile App Team</h1>
            <div className="leaderList">
              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. V.M.K.Gopal</h3>
                  <p>President & CEO </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Kaliyappan </h3>
                  <p>Director - Technology </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Siva</h3>
                  <p>Director - Quality Assurance</p>
                </div>
              </div>
            </div>
          </section>
          <section className="leaderSection">
            <h1 className="subtitle">DBA Team</h1>
            <div className="leaderList">
              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. V.M.K.Gopal</h3>
                  <p>President & CEO </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Kaliyappan </h3>
                  <p>Director - Technology </p>
                </div>
              </div>

              <div className="leaderItemBox">
                <a
                  className="button tile-action"
                  href="/gaming/leadership/steve-sutherland.html"
                >
                  <img src={Banner} width="313" height="250" />
                </a>
                <div className="nameBox">
                  <h3>Mr. Siva</h3>
                  <p>Director - Quality Assurance</p>
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
