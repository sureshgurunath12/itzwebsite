import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://khenshu.s3.ap-south-1.amazonaws.com/home/hero-images/slider1.png"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">News</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
