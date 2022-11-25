import React from "react";
import "./AboutUs.css";

function HomeContent() {
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 hero-container padding0">
            <br />
            <br />
            <h1 className="font-weight-light text-center title">ABOUT US</h1>
            <img width="200px" height="120px" src={flower} alt="AboutUs" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
