import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Home, About, Contact } from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/beta" element={<Home />} />
        <Route path="/beta/about" element={<About />} />
        <Route path="/beta/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
