import React from "react";

const MiddleBanner = () => {
    return (
        <div className="bg-[#FFF6F2] my-10">
            <div className="max-w-6xl mx-auto flex flex-row-reverse lg:pt-16 items-center p-4 py-8">
                <div className="lg:w-1/2 w-[40%] flex justify-end">
                    <img
                        className="lg:h-[500px] lg:w-[500px] rounded-xl"
                        src="https://epic-rumble.web.app/assets/gallery12-801d231d.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:w-1/2 w-[60%] lg:space-y-10 space-y-2">
                    <h1 className="lg:text-5xl text-xl text-[#FF9900]">
                        Home made Feel
                    </h1>
                    <h3 className="lg:text-2xl">
                        Get home made feel with best quality
                    </h3>
                    <p className="text-[#715C54] lg:text-base text-xs">
                        FREE SHIPPING ON ALL ORDERS OF $999 OR MORE TO ALL
                        LOCATIONS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;
