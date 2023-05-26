import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoWithName.png";
import "./Navbar.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { MagnifyingGlass } from "react-loader-spinner";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="min-h-[100vh] w-full bg-white flex justify-center items-center">
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

    // Logout
    const handleLogout = () => {
        logOut()
            .then((result) => {})
            .catch(() => {});
    };

    return (
        <div className="bg-base-200 border">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <div
                            tabIndex={0}
                            className=" menu-compact dropdown-content mt-3 p-2 flex flex-col shadow bg-base-100 rounded-box w-52"
                        >
                            <NavLink
                                className=" px-3 py-3  hover:bg-slate-200 text-gray-500 rounded-lg "
                                to={"/"}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                className=" px-3 py-3  hover:bg-slate-200 text-gray-500  rounded-lg "
                                to={"/toys"}
                            >
                                All Toys
                            </NavLink>

                            {user && (
                                <NavLink
                                    className=" px-3 py-3  hover:bg-slate-200 text-gray-500  rounded-lg "
                                    to={"/myToys"}
                                >
                                    My Toys
                                </NavLink>
                            )}

                            {user && (
                                <NavLink
                                    className=" px-3 py-3  hover:bg-slate-200 text-gray-500  rounded-lg "
                                    to={"/addToys"}
                                >
                                    Add a Toys
                                </NavLink>
                            )}

                            <NavLink
                                className=" px-3 py-3  hover:bg-slate-200 text-gray-500  rounded-lg "
                                to={"/blogs"}
                            >
                                Blogs
                            </NavLink>

                            {user && (
                                <p
                                    onClick={handleLogout}
                                    className=" px-3 py-3 hover:bg-slate-200 text-gray-500  rounded-lg "
                                >
                                    <button>Logout</button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <span className="hidden navbar-start absolute w-fit  lg:block">
                    <Link to={"/"}>
                        <img className="h-10" src={logo} alt="" />
                    </Link>
                </span>
                <span className="lg:hidden navbar-center block">
                    <Link to={"/"}>
                        <img className="h-10" src={logo} alt="" />
                    </Link>
                </span>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal flex items-center gap-4 px-1">
                        <NavLink
                            className=" px-3 py-1  hover:bg-slate-200 text-gray-500 rounded-lg "
                            to={"/"}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className=" px-3 py-1  hover:bg-slate-200 text-gray-500 rounded-lg "
                            to={"/toys"}
                        >
                            All Toys
                        </NavLink>

                        {user && (
                            <NavLink
                                className=" px-3 py-1  hover:bg-slate-200 text-gray-500 rounded-lg "
                                to={"/myToys"}
                            >
                                My Toys
                            </NavLink>
                        )}

                        {user && (
                            <NavLink
                                className=" px-3 py-1  hover:bg-slate-200 text-gray-500 rounded-lg "
                                to={"/addToys"}
                            >
                                Add a Toys
                            </NavLink>
                        )}

                        <NavLink
                            className=" px-3 py-1  hover:bg-slate-200 text-gray-500 rounded-lg "
                            to={"/blogs"}
                        >
                            Blogs
                        </NavLink>

                        {user && (
                            <p
                                onClick={handleLogout}
                                className=" px-3 py-1  hover:bg-slate-200 text-gray-500 hover:text-gray-600 rounded-lg "
                            >
                                <button>Logout</button>
                            </p>
                        )}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" pr-4 lg:pr-0">
                        {user ? (
                            <span className="w-10">
                                {user?.photoURL && (
                                    <div
                                        className="tooltip tooltip-left"
                                        data-tip={user?.displayName}
                                    >
                                        <img
                                            className="w-10 h-10 outline outline-success cursor-pointer rounded-full"
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    </div>
                                )}
                                {!user?.photoURL && (
                                    <div
                                        className="tooltip tooltip-left"
                                        data-tip={user?.displayName}
                                    >
                                        <FaUserAlt className="bg-slate-200 p-2 text-[40px] rounded-full"></FaUserAlt>
                                    </div>
                                )}
                            </span>
                        ) : (
                            <span>
                                <NavLink
                                    className=" px-3 py-2  hover:bg-slate-200 text-gray-500  rounded-lg "
                                    to={"/login"}
                                >
                                    Login
                                </NavLink>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
