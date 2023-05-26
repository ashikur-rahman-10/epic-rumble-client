import React, { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import useCustomTitle from "../../Shared/Hooks";
import { MagnifyingGlass } from "react-loader-spinner";

const AllToys = () => {
    const [loading, setLoading] = useState(true);
    const [toys, setToys] = useState([]);
    const [allToys, setAlltoys] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredToys, setFilteredToys] = useState([]);
    const [resultsPerPage, setResultsPerPage] = useState(20);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetch(
            `https://epic-rumble-server.vercel.app/products?limit=${resultsPerPage}`
        )
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
                setFilteredToys(data);
                setLoading(false);
            });
    }, [resultsPerPage]);

    useEffect(() => {
        fetch(`https://epic-rumble-server.vercel.app/products`)
            .then((res) => res.json())
            .then((data) => {
                setTotalResults(data.length);
                setAlltoys(data);
            });
    }, []);
    useCustomTitle("All Toys");
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

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = allToys.filter(
            (toy) => toy.title && toy.title.toLowerCase().includes(query)
        );
        setFilteredToys(filtered);
    };

    const handleLoadMore = () => {
        setResultsPerPage(resultsPerPage + 10);
    };

    return (
        <div className="">
            <div className="max-w-6xl mx-auto pb-10">
                <h1 className="py-10 text-center text-2xl font-medium lg:text-4xl">
                    Collections of: Epic Rumble
                </h1>

                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search by toy name..."
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                </div>

                <div className="overflow-x-auto w-full max-w-6xl mx-auto mb-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-slate-700 text-white">
                                    Images
                                </th>
                                <th className="bg-slate-700 text-white">
                                    Toy Name
                                </th>
                                <th className="bg-slate-700 text-white">
                                    Sub Category
                                </th>
                                <th className="bg-slate-700 text-white">
                                    Seller
                                </th>
                                <th className="bg-slate-700 text-white">
                                    In stock
                                </th>
                                <th className="bg-slate-700 text-white">
                                    Price
                                </th>
                                <th className="bg-slate-700 text-white">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchQuery
                                ? filteredToys.map((toy) => (
                                      <ToysRow key={toy._id} toy={toy} />
                                  ))
                                : toys.map((toy) => (
                                      <ToysRow key={toy._id} toy={toy} />
                                  ))}
                        </tbody>
                    </table>
                </div>

                {resultsPerPage < totalResults && (
                    <div className="flex justify-center my-4 mb-10">
                        <button
                            onClick={handleLoadMore}
                            className="px-5 py-2 hover:bg-transparent hover:text-info hover:outline-info outline font-medium lg:text-lg text-xs border-none bg-info outline-none rounded-lg text-white"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllToys;
