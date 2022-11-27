import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Header.css";

function Header() {
  const Logo = cdnURL + "assets/images/logo.png";
  const Logo2 = cdnURL + "assets/images/logo2.png";
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
        <div className="container">
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
              <span>Subsidiary of Konami Gaming</span>
            </div>
          </div>
          <div className={classNames("navContainer", isOpen ? "active" : "")}>
            <nav className="navigation" data-action="navigation">
              <span className="model-close" onClick={() => setIsOpen(!isOpen)}>
                X
              </span>
              <ul className="parent">
                <li>
                  <a className="active" href="/">
                    <span>Home</span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    id="category"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/collections/all"
                  >
                    <span>Category</span>
                  </a>
                </li>
                <li>
                  <a
                    id="collections"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/collections"
                  >
                    <span>collections</span>
                  </a>
                </li>

                <li>
                  <a
                    className={
                      location.pathname.indexOf("contact") != -1 && "active"
                    }
                    href="/contact"
                  >
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    className={
                      location.pathname.indexOf("about") != -1 && "active"
                    }
                    href="/beta/about"
                  >
                    <span>About Us</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="contactContainer">
              <div className="contact">
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 0 30 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="new-designs"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="PDP---Desktop---B"
                      transform="translate(-144.000000, -7008.000000)"
                      fill="#656565"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-16"
                        transform="translate(120.000000, 6942.000000)"
                      >
                        <g
                          id="big-online-chat-btn-copy-2"
                          transform="translate(0.000000, 44.000000)"
                        >
                          <path
                            d="M31.7360757,22 L31.4841188,22.0093754 C30.2669348,22.0885671 29.2148848,22.3344829 28.2907223,22.7817356 C27.3169235,23.2531811 26.5025071,23.9398971 25.8352472,24.8411144 C22.8673677,28.8503176 23.6907088,33.422971 26.9301854,39.8243499 C27.7843498,41.5120665 28.8862604,43.1154854 30.27375,44.6979393 L30.807519,45.2905004 C32.3199934,47.101581 33.9340931,48.5943839 35.6939151,49.790951 C41.6159713,53.8157831 46.0215809,55.2184901 50.3613134,52.8364524 C51.3430644,52.2975071 52.1339029,51.5834675 52.7338008,50.6799095 C53.3068075,49.815788 53.6939885,48.7981967 53.9359134,47.5911445 C54.1739265,46.4077817 53.7468969,45.3819017 52.6893913,44.7138132 L50.3873109,43.2281865 L48.1973063,41.8051534 C47.7747799,41.5336666 47.3424447,41.2964519 46.9093699,41.0995992 L46.7406601,41.0288465 C46.6982444,41.0125891 46.6555109,40.9982394 46.5700441,40.9695399 L45.5557292,40.6544075 L44.6631527,41.2354383 C44.4997087,41.3418337 44.3434621,41.4691499 44.1871673,41.6200088 L42.476865,43.2534052 L41.682774,43.9835954 L41.7130967,44.0010691 C39.8533629,42.9445853 38.348561,41.7879799 37.114797,40.4738557 L36.6936349,40.0072757 L36.3017875,39.5497475 C35.2768984,38.3065989 34.4107104,36.8759407 33.6648617,35.1876374 L33.4305985,34.6372747 L34.3665152,33.8676231 C34.83097,33.4918335 35.3670913,33.0661005 36.0724932,32.5103766 C36.2412633,32.3777175 36.3885555,32.2401824 36.5161857,32.0931086 L37.2363297,31.2632557 L37.0532088,30.1739562 C37.0158118,29.9810011 37.0158118,29.9810011 36.9638501,29.79937 C36.8237017,29.3419953 36.643184,28.8806646 36.4271851,28.4248416 L34.3896067,24.1744091 C34.2998147,23.9840038 34.2130356,23.7987385 34.1226312,23.6046079 C33.6764857,22.6467072 32.9085214,22 31.7360757,22 Z M32.054118,24.5933965 L32.5012574,25.5433167 L34.3653109,29.4277625 C34.5337473,29.7832143 34.6731402,30.1393019 34.7795001,30.4864078 L34.79849,30.5630302 L34.7304736,30.629779 C34.7133099,30.6448544 34.6928483,30.6619346 34.6685124,30.6810637 C33.6976294,31.4459367 32.7503643,32.1963436 31.8348555,32.9684497 C31.6355404,33.136558 31.3019391,33.4180103 31.1391678,33.8620865 C30.9021121,34.5092439 31.1555247,35.1300922 31.2773638,35.428395 C32.1789166,37.635589 33.2630629,39.4904922 34.581777,41.0786199 L34.9978051,41.5623219 C36.3456733,43.1113174 37.9813785,44.4579904 39.9832119,45.6646261 L40.594824,46.022478 C40.8756045,46.1819226 41.4599854,46.5140061 42.1352469,46.3645765 C42.5989057,46.2628372 42.9227728,45.9700187 43.1161036,45.7953132 C43.7089954,45.2599101 44.2937309,44.7095993 44.8809015,44.1480548 L45.7648076,43.297772 C45.8315917,43.2333106 45.8753165,43.2007222 45.8994928,43.1849844 L45.9731389,43.2138371 C46.3045061,43.364459 46.6406608,43.5489409 46.9721876,43.7619576 L50.5924631,46.1134723 C50.8876886,46.3036035 51.1836823,46.4929694 51.4791973,46.6801273 C51.7024266,46.8211544 51.7336716,46.889186 51.7101562,47.044395 L51.6944704,47.1300059 C51.5084004,48.0583771 51.2276199,48.7959871 50.8360113,49.3865521 C50.446557,49.9731428 49.9349445,50.4349439 49.271811,50.7989799 C45.3764704,52.9370952 40.8664286,50.5160174 36.9684549,47.866821 C35.5667068,46.9137215 34.25902,45.7425104 32.9868339,44.2988153 L32.4813129,43.7106111 C30.9749602,42.0823051 29.8249491,40.4653654 28.9654528,38.7671137 L28.5946188,38.0207301 C26.6429231,34.0120903 25.1806164,29.5875391 27.6648781,26.2316379 C28.1142546,25.6246993 28.6413464,25.1802256 29.2765534,24.8727027 C29.823889,24.6078171 30.4687115,24.4374751 31.2387571,24.3553699 L31.7360757,24.3172696 C31.8835273,24.3172696 31.9462421,24.3617805 32.054118,24.5933965 Z"
                            id="Path"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                &nbsp;+91 9940698229
              </div>
              <div className="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g fill="#656565">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M28.8 4.8C30.567 4.8 32 6.233 32 8v16c0 1.767-1.433 3.2-3.2 3.2H3.2C1.433 27.2 0 25.767 0 24V8c0-1.767 1.433-3.2 3.2-3.2h25.6zm.8 3.73L15.782 19.592 2.4 8.618V24c0 .393.283.72.656.787l.144.013h25.6c.393 0 .72-.283.787-.656L29.6 24V8.53zM27.422 7.2H4.456l11.342 9.302L27.422 7.2z"
                                  transform="translate(-590 -7020) translate(0 1229) translate(0 3700) translate(120 2027) translate(404 44) translate(66 20)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                &nbsp;hr@itechnowizsolutions.com
              </div>
            </div>
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
