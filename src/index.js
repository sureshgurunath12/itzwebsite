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
  Contact,
  Careers,
  Jobs,
  Services,
  Leaders,
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/jobs/:jobid" element={<Jobs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </main>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
