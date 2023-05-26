import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import photo1 from "../../assets/gallery/gallery1.jpg";
import photo2 from "../../assets/gallery/gallery2.jpg";
import photo3 from "../../assets/gallery/gallery5.jpg";
import photo4 from "../../assets/gallery/gallery4.jpg";
import photo5 from "../../assets/gallery/gallery6.jpg";
import photo6 from "../../assets/gallery/gallery7.jpg";
import photo7 from "../../assets/gallery/gallery8.jpg";
import photo8 from "../../assets/gallery/gallery9.jpg";
import photo9 from "../../assets/gallery/gallery10.jpg";
import photo10 from "../../assets/gallery/gallery11.jpg";
import photo11 from "../../assets/gallery/gallery12.jpg";
import photo12 from "../../assets/gallery/gallery2.jpg";

const PhotoGallery = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    // const photos = [photo1, photo2, photo3, photo4];
    return (
        <div className="lg:mt-28 max-w-6xl mx-auto">
            <h1 className="text-2xl lg:text-4xl text-center my-8">
                Our Collections Gallery
            </h1>
            <div className="grid lg:grid-cols-4 grid-cols-2 p-4 lg:p-0 gap-2">
                <div data-aos="fade-up">
                    <img src={photo1} alt="" />
                </div>
                <div data-aos="zoom-in">
                    <img src={photo2} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img src={photo3} alt="" />
                </div>
                <div data-aos="flip-up">
                    <img src={photo4} alt="" />
                </div>
                <div data-aos="flip-down">
                    <img src={photo5} alt="" />
                </div>
                <div data-aos="slide-up">
                    <img src={photo6} alt="" />
                </div>
                <div data-aos="slide-left">
                    <img src={photo7} alt="" />
                </div>
                <div data-aos="slide-down">
                    <img src={photo8} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img src={photo9} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img src={photo10} alt="" />
                </div>
                <div data-aos="slide-up">
                    <img src={photo11} alt="" />
                </div>
                <div data-aos="zoom-in">
                    <img src={photo12} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
