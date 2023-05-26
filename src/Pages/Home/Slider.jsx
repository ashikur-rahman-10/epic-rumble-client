import React from "react";
import slide1 from "../../assets/slide/slide1.jpg";
import slide2 from "../../assets/slide/slide2.jpg";
import slide3 from "../../assets/slide/slide3.jpg";
import slide4 from "../../assets/slide/slide4.jpg";
import { Carousel } from "flowbite-react";
const Slider = () => {
    return (
        <div className="">
            <div className="h-[28vh] lg:h-[91vh] cursor-auto">
                <div className="absolute z-10 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white h-[28vh] pl-6  lg:pl-32 lg:h-[91vh]">
                    <div className="lg:space-y-8 space-y-2">
                        <h3 className="lg:text-4xl text-xl font-medium">
                            Save upto 50% off{" "}
                        </h3>
                        <div>
                            <h3 className="lg:text-7xl text-2xl font-medium">
                                New Toy Collection{" "}
                            </h3>
                            <h3 className="lg:text-7xl text-2xl font-medium">
                                With Best price{" "}
                            </h3>
                        </div>

                        <button className="px-3 py-2 hover:bg-transparent hover:text-info hover:outline-info outline font-medium lg:text-lg text-xs border-none bg-info outline-none rounded-lg text-white">
                            Discover Now
                        </button>
                    </div>
                </div>
                <Carousel slide={true} leftControl="." rightControl=".">
                    <img
                        className="lg:h-[91vh] h-[28vh]"
                        src={slide1}
                        alt="..."
                    />
                    <img
                        className="lg:h-[91vh] h-[28vh]"
                        src={slide3}
                        alt="..."
                    />
                    <img
                        className="lg:h-[91vh] h-[28vh]"
                        src={slide4}
                        alt="..."
                    />
                    <img
                        className="lg:h-[91vh] h-[28vh]"
                        src={slide2}
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;
