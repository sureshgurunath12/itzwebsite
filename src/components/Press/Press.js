import React from "react";
import "../../components/Press/Press.css";
import { PressArray } from "../../data/Press/Press";

function Press() {
  return (
    <div className="press">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="font-weight-light text-center title">PRESS</h1>
            <div className="title-sub-txt">A little bit of us in the news</div>
          </div>
        </div>
        <div className="row align-items-center">
          {PressArray.map((PressArray, index) => {
            return (
              <div
                key={PressArray.id}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 article-img divImg effect4"
              >
                <a className="grid" href={PressArray.url} target="_blank">
                  <div className="article-name">{PressArray.title}</div>
                  <div className="article-date">{PressArray.date}</div>
                  <img
                    src={PressArray.image}
                    className="img-responsive"
                    alt="Commune"
                    title="Commune"
                  />
                  <div className="caption">
                    <div className="caption-text">
                      <div className="read-article">{PressArray.readMore}</div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Press;
