import React from "react";
import "./Blog.css";
import Carousel from "react-bootstrap/Carousel";
import DImg1 from "../../../src/assets/images/home/hero-images/slider1.png";
import DImg2 from "../../../src/assets/images/home/hero-images/slider1.png";
import DImg3 from "../../../src/assets/images/home/hero-images/slider1.png";

import press1 from "../../assets/images/press/press1.png";
import press2 from "../../assets/images/press/press2.png";
import press3 from "../../assets/images/press/press3.png";

function Blog() {
  const DesktopBanners = [DImg1, DImg2, DImg3];
  const comingSoon = cdnURL + "assets/images/blog/comming-soon.png";
  return (
    <>
      <div className="blogs heroContainer">
        <img src={comingSoon} className="img-fluid" alt="First slide" />
        <div className="blog hide">
          <Carousel
            interval={10000}
            autoPlay={true}
            controls={true}
            indicators={true}
          >
            {DesktopBanners.map((DesktopBanners, index) => {
              return (
                <Carousel.Item>
                  <div class="blog-editorial">
                    <div class="editorial__content">
                      <div className="editorial__content_inner">
                        <p class="editorial__subheading caps">Featured post</p>
                        <h2 class="editorial__title">
                          <a
                            href="/blogs/blogs/an-ode-to-preserving-summer"
                            title="<h1>An Ode to Preserving Summer</h1>"
                            tabindex="0"
                          >
                            <h1>An Ode to Preserving Summer</h1>
                          </a>
                        </h2>
                        <h3 class="editorial__meta">
                          <time datetime="July 29, 2021">
                            July 29, 2021 &nbsp;{" "}
                          </time>
                          <span>By Ikai Asai </span>
                        </h3>
                        <div class="editorial__excerpt">
                          <p>
                            A bazaar painted by myriad shades of yellow. A crate
                            of fresh mangoes sent over by the&nbsp;neighbour. An
                            ordinary&nbsp;daal&nbsp;transformed by slices of
                            tart fruit. Sticky corners of a mouth. Long...
                          </p>
                        </div>
                        <p class="article__link">
                          <a
                            href="/blogs/blogs/an-ode-to-preserving-summer"
                            tabindex="0"
                          >
                            Read more →
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="editorial__image">
                      <img
                        key={DesktopBanners.id}
                        className=""
                        src={DesktopBanners}
                        alt="First slide"
                      />
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="blog hide">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-weight-light text-center title">
                BLOG POSTS
              </h1>
              <div className="title-sub-txt">
                A little bit of us in the news
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 article-img divImg effect4">
              <a className="grid" href="#">
                <img
                  src={press1}
                  className="img-responsive"
                  alt="Commune"
                  title="Commune"
                />
                <div className="blog-title">
                  The Perfect Setting: 7 Classic Dining Table Decoration Ideas
                </div>
                <div className="blog-date">December 15, 2021 By Ikai Asai</div>
                <div className="blog-desc">
                  There's something so magical in the way the monsoon greets you
                  - cool breeze gently brushing your skin, the rustling and
                  swaying of leaves, sweet scent of petrichor emanating from...
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 article-img divImg effect4">
              <a className="grid" href="#">
                <img
                  src={press2}
                  className="img-responsive"
                  alt="Commune"
                  title="Commune"
                />
                <div className="blog-title">
                  The Perfect Setting: 7 Classic Dining Table Decoration Ideas
                </div>
                <div className="blog-date">December 15, 2021 By Ikai Asai</div>
                <div className="blog-desc">
                  There's something so magical in the way the monsoon greets you
                  - cool breeze gently brushing your skin, the rustling and
                  swaying of leaves, sweet scent of petrichor emanating from...
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 article-img divImg effect4">
              <a className="grid" href="#">
                <img
                  src={press3}
                  className="img-responsive"
                  alt="Commune"
                  title="Commune"
                />
                <div className="blog-title">
                  The Perfect Setting: 7 Classic Dining Table Decoration Ideas
                </div>
                <div className="blog-date">December 15, 2021 By Ikai Asai</div>
                <div className="blog-desc">
                  There's something so magical in the way the monsoon greets you
                  - cool breeze gently brushing your skin, the rustling and
                  swaying of leaves, sweet scent of petrichor emanating from...
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
