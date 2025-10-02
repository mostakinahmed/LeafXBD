import { React, useContext, useState } from "react";
import Navber from "./components/Home/Navber";
import { Home } from "./pages/Home";
import CatMenu from "./components/Home/CatMenu.jsx";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./pages/AllProduct.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./components//Product Details/ProductDetails.jsx";
import { Offer } from "./pages/Offer.jsx";

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
        <Route path="/product/:cat/:id" element={<ProductDetails />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
