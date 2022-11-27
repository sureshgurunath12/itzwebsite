import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Home, About, Contact, Leadership, Careers } from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </main>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
