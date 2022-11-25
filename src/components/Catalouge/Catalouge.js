import React from "react";
import "../../components/Catalouge/Catalouge.css";
import Carousel from "react-bootstrap/Carousel";
import { ProductLists, CategoryArray } from "../../data/Category";
function Category() {
  let num = 0;
  return (
    <div className="catalouge">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="font-weight-light text-center title">
              Finest Quality Handcrafted Furniture
            </h1>
            <div className="title-sub-txt">Khenshu- Collections</div>
          </div>
        </div>
        <div className="row align-items-center ">
          {CategoryArray.map((Category, index) => {
            num = 0;
            let ImageArray = ProductLists.reduce((imageArr, ProdDet, index) => {
              if (ProdDet["categoryId"] == Category.id && num < 1) {
                num++;
                imageArr.push(ProdDet?.imageUrl?.default);
              }
              return imageArr;
            }, []);
            // let ImageArrayMap = JSON.stringify([ImageArray])
            // let ImageDetArray = new Map(Object.entries(ImageArrayMap));
            // let jsonMap = JSON.stringify([...ImageArray.entries()])
            // let myMap = new Map(JSON.parse(jsonMap));
            let ImageDetArray = [];

            if (ImageArray)
              Object.keys(ImageArray).map((key) => {
                ImageArray && ImageArray[key]
                  ? ImageDetArray.push(ImageArray[key])
                  : null;
              });
            console.log(ImageArray);

            return (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 article-img divImg effect4">
                <a className="grid" href={"/beta/category/" + Category.id}>
                  {ImageDetArray.map((imageUrl, index) => {
                    return (
                      <div className="prod-imgs">
                        <img
                          src={imageUrl}
                          className="img-responsive"
                          alt="Commune"
                          title="Commune"
                        />
                      </div>
                    );
                  })}

                  <div className="article-name">
                    <span className="prod-title">{Category.title}</span>
                  </div>
                  <div className="article-date">
                    <span>{Category.desc}</span>
                    <a
                      href={"/beta/category/" + Category.id}
                      className="view-details-btn hide"
                      aria-label="View Details"
                    >
                      More Products
                    </a>
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

export default Category;
