import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { MagnifyingGlass } from "react-loader-spinner";
import useCustomTitle from "../../Shared/Hooks";

const MyToys = () => {
    const [loading, setLoading] = useState(true);
    const [filtered, setFiltered] = useState([]);
    const [sortType, setSortType] = useState("");
    const { user } = useContext(AuthContext);
    const [url, setUrl] = useState(
        `https://epic-rumble-server.vercel.app/products/${user.email}`
    );
    const [toys, setToys] = useState([]);

    useCustomTitle("My Toys");

    const handleSortChange = (event) => {
        const order = event.target.value;
        setSortType(order);
        if (order === "descending") {
            setUrl(
                `https://epic-rumble-server.vercel.app/products/${user.email}?filterBy=-1`
            );
        } else {
            setUrl(
                `https://epic-rumble-server.vercel.app/products/${user.email}?filterBy=1`
            );
        }

        setLoading(true); // Set loading state to true before fetching data
    };

    useEffect(() => {
        setLoading(true); // Set loading state to true before fetching data

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setFiltered(data);
                setToys(data); // Update the toys state with fetched data
                setLoading(false);
            });
    }, [sortType]);

    if (loading) {
        return (
            <div className="min-h-[90vh] w-full flex justify-center items-center">
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                />
            </div>
        );
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://epic-rumble-server.vercel.app/products/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remainingToys = toys.filter(
                                (toy) => toy._id !== id
                            );
                            setToys(remainingToys);
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    const handleEdit = (id, updatedProduct) => {
        // ... handle the updated product data

        fetch(`https://epic-rumble-server.vercel.app/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const remainingToys = toys.filter((toy) => toy._id !== id);
                    const updatedtoys = toys.find((toy) => toy._id === id);

                    updatedtoys.rating = updatedProduct.rating;
                    updatedtoys.price = updatedProduct.price;
                    updatedtoys.availableQuantity =
                        updatedProduct.availableQuantity;
                    updatedtoys.detailDescription =
                        updatedProduct.detailDescription;

                    const newToys = [updatedtoys, ...remainingToys];
                    Swal.fire("Update Successful!", "", "success");

                    setToys(newToys);
                }
            });
    };
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="max-w-6xl mx-auto px-4">
            <h1 className="py-10 text-center text-2xl font-medium lg:text-4xl">
                Collections of : <br className="lg:hidden" /> {user.displayName}
            </h1>
            <div className="mb-5 flex items-center gap-2">
                <label className="label">
                    <span className="label-text">Sort by:</span>
                </label>
                <select
                    onChange={handleSortChange}
                    name="order"
                    defaultValue={sortType}
                    // Disable when sortType is not 1 or -1
                    className="p-1 text-xs select-info rounded-md text-black  h-fit w-fit"
                >
                    <option value="">Select</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div className="overflow-x-auto w-full lg:w-fit mx-auto pb-20">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="bg-slate-700 text-white">Image</th>
                            <th className="bg-slate-700 text-white">Name</th>
                            <th className="bg-slate-700 text-white">
                                Sub Category
                            </th>
                            <th className="bg-slate-700 text-white">
                                In stock
                            </th>
                            <th className="bg-slate-700 text-white">Price</th>
                            <th className="bg-slate-700 text-white">Ratings</th>
                            <th className="bg-slate-700 text-white">
                                Descriptions
                            </th>
                            <th className="bg-slate-700 text-white">action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {toys.map((toy) => (
                            <MyToysRow
                                key={toy._id}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                toy={toy}
                            ></MyToysRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
