import React from "react";
import notFound from "../../assets/404NotFound.jpg";

const NotFound = () => {
    const handleBack = () => {
        window.location.href = "/";
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center flex-col">
            <div className="lg:w-1/2 w-full mx-auto">
                <img src={notFound} alt="" />
            </div>
            <button
                onClick={handleBack}
                className="px-3 py-2 outline outline-info rounded-3xl text-info hover:bg-info hover:text-white border-none"
            >
                Back to Home
            </button>
        </div>
    );
};

export default NotFound;
