import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import Products from "./pages/products";
import ViewProduct from "./pages/viewproduct";
import Cart from "./pages/cart";
import Wish from "./pages/wishlist";
import Checkout from "./pages/checkout.js";
import Singup from "./pages/signup.js";
import Singin from "./pages/signin.js";
import Account from "./pages/useraccount.js";
import AdminSignIn from "./pages/admin-signin.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route index element={<App />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/viewproduct" element={<ViewProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/wishlist" element={<Wish />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/signup" element={<Singup />}></Route>
      <Route path="/signin" element={<Singin />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/adminsign" element={<AdminSignIn />}></Route>
    </Routes>
  </Router>
);
