import React from "react";
import { Layout } from "./layout";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

import "./app.css";

function App() {
  return (
    <>
      <h1 >WEBSITE UNDER CONSTRUCTION</h1>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="about" element={<Pages.AboutPage />} />
          <Route path="contact" element={<Pages.ContactPage />} />
          <Route path="portfolio" element={<Pages.PortfolioPage />}></Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
