import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div>
            <div className="sticky top-0 z-30">
                {" "}
                <Navbar></Navbar>
            </div>
            <div className="min-h-[90vh] max-w-full ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
