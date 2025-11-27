import { React, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Navber from "./components/Home/Navber";
import CatMenu from "./components/Home/CatMenu.jsx";
import { Home } from "./pages/Home";
import AllProduct from "./pages/AllProduct.jsx";
import ProductDetails from "./components/Product Details/ProductDetails.jsx";
import { Offer } from "./pages/Offer.jsx";
import Footer from "./components/Footer.jsx";
import { BuyNow } from "./pages/BuyNow.jsx";
import { Cart } from "./pages/Cart.jsx";
import { CartProvider } from "./components/Context Api/CartContext.jsx";
import ProfileHome from "./pages/ProfileHome.jsx";
import TempHome from "./pages/TempHome.jsx";
import TechGadgetHome from "./pages/TechGadgetHome.jsx";
import SearchResult from "./pages/SearchResult";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import Profile from "./components/Profile/Profile";
import TrackOrder from "./components/TrackOrder";

function App() {
  
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isTempHome = location.pathname === "/";

  return (
    <CartProvider>
      {/* Show Navber + CatMenu except on TempHome */}
      {!isTempHome && (
        <div className="fixed top-0 w-full z-50">
          <Navber />
          <CatMenu />
        </div>
      )}
      {/* <div className="fixed top-0 w-full z-50">
        <Navber />
        <CatMenu />
      </div> */}

      <Routes>
        <Route path="/" element={<TempHome />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/product/:cat" element={<AllProduct />} />
        <Route path="/product/:cat/:id" element={<ProductDetails />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:cat/:id/buynow" element={<BuyNow />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/profile/:card" element={<ProfileHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home-new" element={<TechGadgetHome />} />
        <Route path="/search-result/:keyword" element={<SearchResult />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {!isTempHome && <Footer />}
    </CartProvider>
  );
}

export default App;
