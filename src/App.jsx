import { React, useState } from "react";
import Navber from "./components/Home/Navber";
import { Home } from "./pages/Home";
import CatMenu from "./components/Home/CatMenu.jsx";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./pages/AllProduct.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Navber />
        <CatMenu />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:cat" element={<AllProduct />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
