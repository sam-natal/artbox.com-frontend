import React from "react";
import { Navbar, HomeVideo, FirstHeading } from "./components/Navbar";
import TopArtCarousel from "./components/TopArtCarousel";
import {Footer,EmailSubscribe} from "./components/Footer";
import BigHomeDv from "./components/BigHomeDv";
import ArtistWord from "./components/ArtistWord";
import ExploreCategory from "./components/ExploreCategory";
import { Outlet } from "react-router-dom";


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