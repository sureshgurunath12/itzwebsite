import React from "react";
import "../../components/Catalouge/Catalouge.css";
import { ProductLists, CategoryArray } from "../../data/Category";
import { useParams } from "react-router-dom";

function Collections() {
  const { collectionid, collectiontype } = useParams();

  const ProductFilterList = ProductLists.filter((ProdDet) => {
    if (collectionid && ProdDet["categoryId"] == collectionid) {
      return ProdDet;
    } else if (collectiontype && ProdDet["type"] == collectiontype) {
      return ProdDet;
    }
  });
  console.log(CategoryArray);
  console.log(collectionid);
  console.log(collectiontype);
  const Category = CategoryArray.filter((Cat) => {
    if (Cat["id"] == collectionid) {
      return Cat;
    } else if (Cat["type"] == collectiontype) {
      return Cat;
    }
  })[0];
  console.log(Category);
  return (
    <div className="catalouge collections">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="font-weight-light text-center title">
              {Category?.title}
            </h1>
            <div className="title-sub-txt">{Category?.desc}</div>
          </div>
        </div>
        <div className="row align-items-center">
          {ProductFilterList.map((ProductList, index) => {
            return (
              <div
                key={ProductList.id}
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 article-img divImg effect4"
              >
                <a
                  className="grid"
                  href={"/beta/productdetails/" + ProductList.id}
                >
                  <div className="prod-imgs">
                    <img
                      src={ProductList?.imageUrl?.default}
                      alt={ProductList.title}
                      title={ProductList.title}
                    />
                  </div>
                  <div className="prod-descriptions">
                    <div className="article-name">{ProductList.title}</div>
                    <div className="article-date">{ProductList.subTitle}</div>
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

export default Collections;
