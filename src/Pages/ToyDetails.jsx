import { Badge, Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaArrowRight } from "react-icons/fa";
import ProductsCard from "../Shared/ProductsCard";

const ToyDetails = () => {
    const [fromSeller, setFromSeller] = useState([]);
    const [fromCategory, setFromCategory] = useState([]);
    const toy = useLoaderData();
    const {
        title,
        photo,
        subCategoryName,
        price,
        rating,
        availableQuantity,
        detailDescription,
        sellerName,
        subCategoryId,
        email,
        _id,
    } = toy;

    useEffect(() => {
        fetch(`https://epic-rumble-server.vercel.app/products/${email}`)
            .then((res) => res.json())
            .then((data) => {
                const exceptThisProducts = data.filter((p) => p._id !== _id);
                if (exceptThisProducts.length > 3) {
                    setFromSeller(exceptThisProducts.slice(0, 3));
                } else {
                    setFromSeller(exceptThisProducts);
                }
            });
        fetch(
            `https://epic-rumble-server.vercel.app/subcategory/${subCategoryId}`
        )
            .then((res) => res.json())
            .then((data) => {
                const exceptThisProducts = data.filter((p) => p._id !== _id);
                if (exceptThisProducts.length > 4) {
                    setFromCategory(exceptThisProducts.slice(0, 4));
                } else {
                    setFromCategory(exceptThisProducts);
                }
            });
    }, []);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-[63%] h-fit">
                    <div className="w-full lg:h-full h-fit lg:flex rounded-xl shadow-xl border">
                        <div className="lg:w-[40%] h-fit flex items-center">
                            <img
                                className="rounded-s-xl  rounded-e-xl lg:rounded-e-none lg:h-[365px] h-fit"
                                src={photo}
                                alt=""
                            />
                        </div>
                        <div className="py-8 px-8 lg:w-[60%]">
                            <h1 className="text-2xl">{title}</h1>
                            <p className="text-[#737373] mt-2">
                                <span className="font-medium text-black">
                                    Subcategory:{" "}
                                </span>
                                {subCategoryName}
                            </p>
                            <p className="text-[#737373] mt-5">
                                <span className="font-medium text-black">
                                    Seller Name:{" "}
                                </span>
                                {sellerName}
                            </p>
                            <p className="text-[#737373] mt-1">
                                <span className="font-medium text-black">
                                    Seller Email:{" "}
                                </span>
                                {email}
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                                {" "}
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={rating}
                                    readOnly
                                />
                                <Badge color="success">{rating}</Badge>
                            </div>
                            <p className="mt-3 font-semibold text-3xl">
                                ${price}
                            </p>
                            <button className="mt-4 font-medium hover:outline outline-info hover:bg-transparent hover:text-info flex gap-2 items-center rounded-2xl bg-info text-white px-4 py-2">
                                Buy now <FaArrowRight></FaArrowRight>
                            </button>
                        </div>
                    </div>
                    <p className="pt-8 my-3 px-2 text-[#737373]">
                        <span className="font-medium text-black">
                            Available Quantity :{" "}
                        </span>{" "}
                        {availableQuantity}
                    </p>
                    <p className="pb-8 px-2 text-[#737373]">
                        <span className="font-medium text-black">
                            Products Descriptions:{" "}
                        </span>{" "}
                        <br />
                        {detailDescription}
                    </p>

                    <div className="my-10">
                        <h1 className="text-3xl font-medium text-center">
                            Same Categories
                        </h1>
                        <div className="grid lg:grid-cols-2 mt-10 gap-5">
                            {fromCategory.map((c) => (
                                <ProductsCard
                                    key={c._id}
                                    product={c}
                                ></ProductsCard>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] w-full mx-auto">
                    <div className="w-full flex flex-col justify-center  lg:border lg:shadow-lg py-8 px-4 rounded-xl ">
                        <div className=" mx-auto">
                            <h1 className="text-2xl font-medium text-center mb-7">
                                From Same Seller
                            </h1>
                            <div>
                                <div className="space-y-6">
                                    {fromSeller.map((p) => (
                                        <ProductsCard
                                            key={p._id}
                                            product={p}
                                        ></ProductsCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
