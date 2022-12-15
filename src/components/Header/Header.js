import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Header.css";

function Header() {
  const Logo = cdnURL + "assets/images/Itz_logo.png";
  const Logo2 = cdnURL + "assets/images/Konamai_logo.png";
  const Join_us = cdnURL + "assets/images/Join_us.png";

  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <>
      <header>
        <div className="container-fluid header-container">
          <div className="container rel">
            <a className="join-us" href="/careers">
              <img src={Join_us} alt="Konami" />
            </a>
            <div className="logo-container">
              <div className="left-logo-container">
                <div className="nav-bar" onClick={() => setIsOpen(!isOpen)}>
                  <svg
                    width="20px"
                    height="15px"
                    viewBox="0 0 30 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-320.000000, -38.000000)"
                        fill="#111"
                      >
                        <g transform="translate(320.000000, 38.000000)">
                          <path d="M27.8,16.4 C28.6836556,16.4 29.4,17.1163444 29.4,18 C29.4,18.8205373 28.7823357,19.4968115 27.9865938,19.5892356 L27.8,19.6 L2.2,19.6 C1.3163444,19.6 0.6,18.8836556 0.6,18 C0.6,17.1794627 1.2176643,16.5031885 2.0134062,16.4107644 L2.2,16.4 L27.8,16.4 Z M27.8,8.4 C28.6836556,8.4 29.4,9.1163444 29.4,10 C29.4,10.8205373 28.7823357,11.4968115 27.9865938,11.5892356 L27.8,11.6 L2.2,11.6 C1.3163444,11.6 0.6,10.8836556 0.6,10 C0.6,9.17946266 1.2176643,8.50318854 2.0134062,8.41076437 L2.2,8.4 L27.8,8.4 Z M27.8,0.4 C28.6836556,0.4 29.4,1.1163444 29.4,2 C29.4,2.82053734 28.7823357,3.49681146 27.9865938,3.58923563 L27.8,3.6 L2.2,3.6 C1.3163444,3.6 0.6,2.8836556 0.6,2 C0.6,1.17946266 1.2176643,0.503188543 2.0134062,0.41076437 L2.2,0.4 L27.8,0.4 Z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <a href="/" className="left-logo">
                  <img src={Logo} alt="travel_suitcase" />
                </a>
              </div>

              <div className="right-logo-container">
                <a href="/" className="right-logo">
                  <img src={Logo2} alt="Konami" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames("navContainer", isOpen ? "active" : "")}>
          <div className={classNames("container", "rel")}>
            <nav className="navigation" data-action="navigation">
              <span className="model-close" onClick={() => setIsOpen(!isOpen)}>
                X
              </span>
              <ul className="parent">
                <li>
                  <a
                    className={classNames(
                      "menu",
                      "home",
                      location.pathname.indexOf("home") != -1 && "active"
                    )}
                    href="/home"
                  >
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    className={classNames(
                      "menu",
                      "services",
                      location.pathname.indexOf("services") != -1 && "active"
                    )}
                    href="/services"
                  >
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    className={classNames(
                      "menu",
                      "careers",
                      location.pathname.indexOf("careers") != -1 && "active"
                    )}
                    href="/careers"
                  >
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    className={classNames(
                      "menu",
                      "contactus",
                      location.pathname.indexOf("contactus") != -1 && "active"
                    )}
                    href="/contactus"
                  >
                    &nbsp;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {showTopBtn && (
            <span className="up-arrow-circle" onClick={scrollToTop}>
              <i className="up-arrow up"></i>
            </span>
          )}
          {isModalOpen && <Modal handler={toggleModal} />}
        </div>
      </header>
    </>
  );
}

export default Header;
