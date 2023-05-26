import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCustomTitle from "../Shared/Hooks";

const AddToys = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photo = form.photoURL.value;
        const subCategoryName = form.subCategoryName.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const availableQuantity = parseFloat(form.availableQuantity.value);
        const detailDescription = form.detailDescription.value;
        const sellerName = user.displayName;
        const email = user.email;
        let subCategoryId;
        if (subCategoryName == "Avengers") {
            subCategoryId = 1;
        } else if (subCategoryName == "StarWars") {
            subCategoryId = 2;
        } else subCategoryId = 3;

        const product = {
            title,
            photo,
            subCategoryName,
            price,
            rating,
            availableQuantity,
            detailDescription,
            sellerName,
            email,
            subCategoryId,
        };

        fetch("https://epic-rumble-server.vercel.app/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    event.target.reset();
                    Swal.fire("Product Added", "", "success");
                }
            });
    };
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    useCustomTitle("Add Toys");
    return (
        <div className="min-h-[90vh] flex justify-center items-center flex-col my-10 lg:my-0">
            <form
                onSubmit={handleSubmit}
                className="max-w-6xl mx-auto rounded-2xl shadow-xl border p-5"
            >
                <h1 className="text-center lg:text-4xl text-2xl font-medium my-10">
                    Add a products
                </h1>
                <div className="lg:grid grid-cols-3 w-full gap-4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Products Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Products Name"
                            name="title"
                            required
                            className="input input-bordered input-info w-[300px] lg:w-[350px]  "
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="photoURL"
                            required
                            className="input input-bordered input-info w-[300px] lg:w-[350px]  "
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <select
                            name="subCategoryName"
                            required
                            className="select select-bordered select-info w-[300px] lg:w-[350px]  "
                        >
                            <option value="">Select a Subcategory</option>
                            <option value="Avengers">Avengers</option>
                            <option value="StarWars">Star Wars</option>
                            <option value="Transformers">Transformers</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            required
                            className="input input-bordered input-info w-[300px] lg:w-[350px]  "
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Rating"
                            name="rating"
                            required
                            className="input input-bordered input-info w-[300px] lg:w-[350px]  "
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
                            name="availableQuantity"
                            required
                            className="input input-bordered input-info w-[300px] lg:w-[350px]  "
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea
                        placeholder="Detail Description"
                        name="detailDescription"
                        required
                        className="textarea textarea-bordered textarea-info w-full "
                    ></textarea>
                </div>

                <div className="w-full text-center">
                    <input
                        className="bg-transparent text-info outline outline-info px-6 py-2 font-medium hover:text-white hover:bg-info hover:outline-none rounded-2xl my-10"
                        type="submit"
                        value="Save Products"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddToys;
