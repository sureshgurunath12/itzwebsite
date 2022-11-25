import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  About,
  Contact,
  Catalouge,
  Collections,
  ProductDetails,
  Press,
  News,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/beta" element={<Home />} />
        <Route path="/beta/about" element={<About />} />
        <Route path="/beta/contact" element={<Contact />} />
        <Route path="/beta/category/all" element={<Catalouge />} />
        <Route path="/beta/category/:collectionid" element={<Collections />} />
        <Route
          path="/beta/collections/:collectiontype"
          element={<Collections />}
        />

        <Route path="/beta/productdetails/:id" element={<ProductDetails />} />
        <Route path="/beta/press" element={<Press />} />
        <Route path="/beta/blog" element={<Blog />} />
        {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
      </Routes>
    </main>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
