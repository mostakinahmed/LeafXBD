import { React, useContext, useState } from "react";
import Navber from "./components/Home/Navber";
import { Home } from "./pages/Home";
import CatMenu from "./components/Home/CatMenu.jsx";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./pages/AllProduct.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { DataContext } from "./components/Context Api/UserContext.jsx";

function App() {
  const { userData, productData } = useContext(DataContext);



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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
