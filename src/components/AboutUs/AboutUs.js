import React from "react";
import "../../components/AboutUs/AboutUs.css";

import DividerTxt1 from "../../assets/images/about/dividerTxt1.png";
import DividerTxt2 from "../../assets/images/about/dividerTxt2.png";
import DividerTxt3 from "../../assets/images/about/dividerTxt3.png";
function About() {
  const aboutUs = cdnURL + "/assets/images/about/aboutUs.png";
  const founder = cdnURL + "/assets/images/about/founder.png";
  const sustainable = cdnURL + "/assets/images/about/sustainable.png";
  const custom = cdnURL + "/assets/images/about/custom.png";
  const flower = cdnURL + "/assets/images/about/flower.png";
  const sustainable_craft =
    cdnURL + "/assets/images/about/sustainable_craft.png";
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 hero-container padding0">
            <br />
            <br />
            <h1 className="font-weight-light text-center title">ABOUT US</h1>

            <img className="banner img-hide-md" src={aboutUs} alt="AboutUs" />

            <img className="divider-img1" src={DividerTxt1} alt="About Us" />
            <div className="about-txt text-center">
              Our monotonous lives in concrete jungles has us influenced and
              surrounded by quick temporary fixes that follow the masses.
              Khenshu is a brand that believes in unique heirloom pieces that
              can be used as conversation starters. We make luxury handcrafted
              furniture, inspired by the cool sea a drizzle. Each of our pieces
              are carefully crafted to tell a story or create a forgotten
              experience.
              <br />
              <br />
              Designed and crafted to fit into modern minimalistic spaces or
              grand contemporary settings each piece celebrates a unique
              personality that we find lost in our busy way of life. We strive
              to bring back to you a sustainable way of life where uniqueness is
              celebrated and we stop to admire what the earth has to offer. We
              believe that everything surrounding us has an aura or energy of
              its own that can have an influence on us. Hence, we create spaces
              that have a life of their own and create a revitalized feeling of
              home that is personal to you when you walk in.
              <br />
              <br />
              <img className="divider-img2" src={DividerTxt2} alt="AboutUs" />
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-6 hero-container padding0 img-hide-lg">
            <img className="banner" src={aboutUs} alt="AboutUs" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 hidden-lg padding0 img-hide-lg">
            <img className="banner" src={founder} alt="Founder" />
          </div>
          <div className="col-lg-6 vertical-center">
            <div className="about-txt text-center">
              <h1 className="font-weight-light text-center title">FOUNDER</h1>
              <img
                className="banner img-hide-md "
                src={founder}
                alt="Founder"
              />
              <div className="founder-txt">
                AISHWARYA REDDY <br /> FOUNDER AND CREATIVE HEAD AT KHENSHU
              </div>
              <br /> As a global citizen with an educational background in
              industrial Design Engineering and Masters in International
              Business Aishwarya recognized the search for homegrown Indian
              brands, supporting local artisans and creating products Made in
              India, Hench, giving birth to Khenshu!
              <br />
              <br />
              <img className="divider-img3" src={DividerTxt3} alt="AboutUs" />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 hero-container">
            <br />
            <br />
            <h1 className="font-weight-light text-center title">
              SUSTAINABLE CRAFT
            </h1>
            <img
              className="banner img-hide-md"
              src={sustainable}
              alt="AboutUs"
            />
            <img
              width="420px"
              height="120px"
              className="img-fluid"
              src={sustainable_craft}
              alt="About Us"
            />

            <div className="about-txt text-center">
              Celebrating the nuanced workmanship of skilled Indian artisans and
              craftsmanship, the brand aspires to bring back the meticulous
              architecture and decorative arts of bygone eras with a fresh
              approach, designed and crafted to fit into modern minimalistic
              spaces or grand contemporary settings each piece celebrates a
              unique personality that we find lost in our busy way of life.
              <br />
              <br />
              We work with sustainable and locally sourced materials along with
              the best modern practices and techniques to create modern heirloom
              pieces. <br />
              <br />
              Khenshu believes in empowering and upskilling the local craft
              community and preserving art. <br />
              <br />
              All our products are worked on with an intention of increasing in
              value over time and seeing generations to come, hence, we like to
              call them Modern Day Heirlooms. With an intention to speak to
              generations through our work, we also make sure that the purpose
              of saving the planet isn't lost. <br />
              The majority of our wooden furniture uses old-building or
              reclaimed teak wood, giving it a rich significance of history. Our
              paintings are made on fine spun cotton fabric using all-natural
              organic dyes made from crushed natural stones, giving them
              purpose.
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-6 hero-container padding0 img-hide-lg">
            <img className="banner" src={sustainable} alt="AboutUs" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 hidden-lg padding0 img-hide-lg">
            <img className="banner" src={custom} alt="Founder" />
          </div>
          <div className="col-lg-6 vertical-center">
            <div className="about-txt text-center">
              <h1 className="font-weight-light text-center title">
                CUSTOM COMMISSIONS
              </h1>
              <img className="banner img-hide-md" src={custom} alt="Founder" />
              <br /> We at Khenshu strive hard to make your vision a reality. Be
              it a complete interior set-up or commissioned art, Khenshu works
              with you every step of the way to produce what you have
              envisioned. Whether you are an architect, an interior designer
              with a design in your mind or you simply want to make a few
              changes to our existing design according to your preference, you
              are welcome to work with our design team to get your vision to
              life.
              <br />
              <br />
              <img width="200px" height="120px" src={flower} alt="AboutUs" />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
