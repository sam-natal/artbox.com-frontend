import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import Arts from "./pages/arts/arts.js";
import Artists from "./pages/artists.js";
import AnimalsArts from "./pages/arts/arts-animals.js";
import PeopleArts from "./pages/arts/arts-people.js";
import FlowersArts from "./pages/arts/arts-flowers.js";
import AbstractArts from "./pages/arts/arts-abstract.js";
import ViewArt from "./pages/viewArt.js";
import ViewArtist from "./pages/viewArtist.js";
import Cart from "./pages/cart";
import Wish from "./pages/wishlist";
import Checkout from "./pages/checkout.js";
import Signup from "./pages/signup.js";
import Signin from "./pages/signin.js";
import Account from "./pages/useraccount.js";
import Search from "./pages/search.js";
import { Order } from "./pages/order.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<App />}></Route>

        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/view_artist" element={<ViewArtist />}></Route>

        <Route path="/arts" element={<Arts />}></Route>
        <Route path="/abstract" element={<AbstractArts />}></Route>
        <Route path="/people" element={<PeopleArts />}></Route>
        <Route path="/animals" element={<AnimalsArts />}></Route>
        <Route path="/flowers" element={<FlowersArts />}></Route>
        <Route path="/search" element={<Search />}></Route>

        <Route path="/view_art" element={<ViewArt />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wish />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route
          path="/checkout"
          element={
            localStorage.getItem("auth_token") ? <Checkout /> : <Signin />
          }
        ></Route>
        <Route
          path="/login"
          element={
            localStorage.getItem("auth_token") ||
            localStorage.getItem("fb_id") ? (
              <Navigate to="/" />
            ) : (
              <Signin />
            )
          }
        ></Route>
        <Route
          path="/register"
          element={
            localStorage.getItem("auth_token") ? (
              <Navigate to="/" />
            ) : (
              <Signup />
            )
          }
        ></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
