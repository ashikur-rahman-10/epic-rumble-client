import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const TopSellers = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch("https://epic-rumble-server.vercel.app/sellers")
            .then((res) => res.json())
            .then((data) => setSellers(data));
    }, []);

    return (
        <div className=" min-h-[90vh] p-4 mx-auto flex justify-center bg-[#FFF6F2] items-center mt-12">
            <div className="max-w-6xl lg:space-y-16 space-y-10">
                <div>
                    <h1 className="lg:text-4xl text-2xl font-medium text-center ">
                        Meet Our Top Sellers
                    </h1>
                    <p className="lg:w-[75%] p-4 text-center mx-auto">
                        These top sellers have earned their reputation through
                        their dedication to customer satisfaction, quality
                        products, and exceptional service. Shop with confidence
                        knowing that you are choosing from the best in the
                        industry.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-2">
                    {sellers.map((seller) => (
                        <div
                            key={seller._id}
                            className="shadow-xl border bg-white rounded-xl flex flex-col justify-center items-center  text-center lg:p-5 p-3 lg:w-56 lg:h-56"
                        >
                            <div className="mx-auto w-fit">
                                <img
                                    className="lg:w-32 w-28 lg:h-32 h-28 mask mask-hexagon"
                                    src={seller.photoURL}
                                    alt=""
                                />
                            </div>
                            <h1 className="mt-3 text-lg font-medium">
                                {seller.name}
                            </h1>
                            <small>{seller.address}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopSellers;
