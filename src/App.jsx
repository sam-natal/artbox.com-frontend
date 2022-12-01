import React from "react";
import { Navbar, HomeVideo, FirstHeading } from "./components/Navbar";
import TopArtCarousel from "./components/TopArtCarousel";
import {Footer,EmailSubscribe} from "./components/Footer";
import BigHomeDv from "./components/BigHomeDv";
import ArtistWord from "./components/ArtistWord";
import ExploreCategory from "./components/ExploreCategory";
import { Outlet } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})
const App = () =>{
    return(
        <div class="main-container">
        <Navbar />
        <HomeVideo />
        <FirstHeading />
        <TopArtCarousel />
        <BigHomeDv />
        <ArtistWord />
        <ExploreCategory />
        <EmailSubscribe />
        <Footer />
        <Outlet />
      </div>
    );
}
export default App;