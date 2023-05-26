import { FaPenAlt, FaStar, FaTrashAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete, handleEdit }) => {
    const {
        photo,
        title,
        subCategoryName,
        price,
        availableQuantity,
        _id,
        rating,
        detailDescription,
    } = toy;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const availableQuantity = parseFloat(form.availableQuantity.value);
        const rating = parseFloat(form.rating.value);
        const detailDescription = form.detailDescription.value;

        const updatedProduct = {
            price,
            availableQuantity,
            detailDescription,
            rating,
        };

        handleEdit(_id, updatedProduct);
    };
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <tr>
            <td className="bg-transparent border-b-gray-300">
                <div className="avatar">
                    <Link
                        to={`/toy/${_id}`}
                        className="mask mask-squircle w-12 h-12"
                    >
                        <img src={photo} alt={title} />
                    </Link>
                </div>
            </td>
            <td className="bg-transparent border-b-gray-300">
                {" "}
                <Link
                    to={`/toy/${_id}`}
                    className="font-bold  max-w-[150px] whitespace-pre-wrap"
                >
                    {title}
                </Link>
            </td>
            <td className="bg-transparent border-b-gray-300">
                {subCategoryName}
            </td>
            <td className="bg-transparent border-b-gray-300">
                <p>{availableQuantity}</p>
            </td>
            <td className="bg-transparent border-b-gray-300">{price}</td>
            <td className="bg-transparent border-b-gray-300">
                <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
            </td>
            <td className="truncate bg-transparent border-b-gray-300 lg:max-w-[200px] max-w-[100px]">
                {detailDescription}
            </td>
            <th className="bg-transparent border-b-gray-300">
                <span className="flex items-center bg-transparent gap-6">
                    <label htmlFor={`my-modal-${_id}`}>
                        <FaPenAlt className="bg-base-200 p-3 text-info hover:bg-info hover:text-white w-10 h-10 rounded-full"></FaPenAlt>
                    </label>
                    <FaTrashAlt
                        onClick={() => {
                            handleDelete(_id);
                        }}
                        className="bg-base-200 p-3 text-error hover:bg-error hover:text-white w-10 h-10 rounded-full"
                    ></FaTrashAlt>
                </span>
            </th>
            <span>
                <input
                    type="checkbox"
                    id={`my-modal-${_id}`}
                    className="modal-toggle"
                />

                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gradient-to-b from-base-200 to-[#FFF6F2]">
                        <label
                            htmlFor={`my-modal-${_id}`}
                            className="hover:bg-transparent outline-none hover:text-error hover:outline hover:outline-error px-[9px] py-1 rounded-full absolute right-2 top-2 font-medium text-white bg-error  rounded-2xl "
                        >
                            {" "}
                            ✕
                        </label>
                        <div className=" flex justify-center items-center flex-col w-full">
                            <form
                                onSubmit={handleSubmit}
                                className=" mx-auto rounded-2xl"
                            >
                                <h1 className="text-center lg:text-2xl lg:max-w-[350px] mx-auto w-[300px] text-lg font-medium my-3 whitespace-pre-wrap">
                                    Update : <br /> {title}{" "}
                                </h1>
                                <div className="lg:grid grid-cols-1 w-full  mx-auto">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Price
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Price"
                                            defaultValue={price}
                                            name="price"
                                            required
                                            className="input input-bordered input-info w-[290px] lg:w-[350px]  "
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Available Quantity
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Available Quantity"
                                            defaultValue={availableQuantity}
                                            name="availableQuantity"
                                            required
                                            className="input input-bordered input-info w-[290px] lg:w-[350px]  "
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Rating
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={rating}
                                        name="rating"
                                        required
                                        className="input input-bordered input-info w-[300px] lg:w-[350px]  "
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Detail Description
                                        </span>
                                    </label>
                                    <textarea
                                        placeholder="Detail Description"
                                        defaultValue={detailDescription}
                                        name="detailDescription"
                                        required
                                        className="textarea textarea-bordered textarea-info w-[300px] lg:w-[350px]  "
                                    ></textarea>
                                </div>

                                <div className="w-full flex flex-col justify-center  items-center text-center my-8 gap-3">
                                    <input
                                        onSubmit={handleSubmit}
                                        className="bg-transparent text-info outline outline-info w-fit px-6 py-2 font-medium hover:text-white hover:bg-info hover:outline-none rounded-2xl "
                                        type="submit"
                                        value="Save Changes"
                                    />
                                    {/* <label
                                        htmlFor={`my-modal-${_id}`}
                                        className="hover:bg-transparent outline-none hover:text-error hover:outline hover:outline-error px-6 py-2 font-medium text-white bg-error  rounded-2xl "
                                    >
                                        Cancel
                                    </label> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </span>
        </tr>
    );
};

export default MyToysRow;
