import React from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import PhotoGallery from "./PhotoGallery";
import useCustomTitle from "../../Shared/Hooks";
import CustomersReviews from "./CustomersReviews";
import TopSellers from "./TopSellers";
import MiddleBanner from "./MiddleBanner";

const Home = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    useCustomTitle("Home");
    return (
        <div className="">
            <Slider></Slider>
            <PhotoGallery></PhotoGallery>
            <MiddleBanner></MiddleBanner>
            <Categories></Categories>
            <TopSellers></TopSellers>
            <CustomersReviews></CustomersReviews>
        </div>
    );
};

export default Home;
