import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";

import Swal from "sweetalert2";

const ProductsCard = ({ product }) => {
    const { title, photo, subCategoryName, price, rating, _id } = product;
    const { user } = useContext(AuthContext);
    const handleDetailsBtn = () => {
        if (!user) {
            Swal.fire("Please Login and Explore More", "", "info");
        }
    };
    return (
        <div>
            <div className="card border lg:w-[340px] lg:h-[512px] bg-base-100 shadow-xl">
                <figure>
                    <img className="h-[278px] w-full" src={photo} alt={title} />
                </figure>
                <div className="card-body">
                    {" "}
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    <div className="mt-2.5 mb-5 flex items-center">
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            {rating}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white  lg:absolute bottom-8 left-8">
                            ${price}
                        </span>
                        <Link
                            onClick={handleDetailsBtn}
                            to={`/toy/${_id}`}
                            className="flex lg:absolute bottom-8 right-8 items-center gap-2 py-2 text-lg font-medium px-3 bg-info w-fit  rounded-xl text-white hover:text-info hover:bg-transparent hover:outline outline-info"
                        >
                            <small>View Details</small>
                            <FaEye></FaEye>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
