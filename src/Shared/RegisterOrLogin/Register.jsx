import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCustomTitle from "../Hooks";

const Register = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Create new user with email and password
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                updateUser(name, photo)
                    .then((result) => {})
                    .catch((error) => {
                        console.log(error);
                    });
                Swal.fire("User Create Successfull", "", "success");
                navigate("/");
                event.target.reset();
                setError("");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };
    // Login with Google Account
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire("User Login Successfull", "", "success");
                setError("");
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    useCustomTitle("Register");
    return (
        <div className="min-h-[91vh] w-full flex justify-center lg:py-5 items-center">
            <form
                onSubmit={handleSubmit}
                className="border shadow-lg rounded-xl px-4 py-10 w-96"
            >
                <h1 className="text-center text-3xl my-4">Sign Up</h1>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                        className="input input-bordered input-info max-w-xl w-full "
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photo"
                        required
                        className="input input-bordered input-info max-w-xl w-full "
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        required
                        placeholder="Email"
                        className="input input-bordered input-info max-w-xl w-full "
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        className="input input-bordered input-info max-w-sm w-full "
                    />
                </div>
                <span className="flex justify-center">
                    <small className="text-red-500 text-center font-medium">
                        {error}
                    </small>
                </span>
                <div>
                    <input
                        className=" hover:bg-transparent bg-info text-white hover:outline outline-info rounded-2xl border-none py-2 hover:text-info text-lg w-full mt-4"
                        type="submit"
                        value="Register"
                    />
                </div>
                <div className="divider">OR Use</div>
                <div
                    onClick={handleGoogleLogin}
                    className=" mx-auto hover:bg-slate-200 bg-slate-100 p-3 w-fit rounded-full"
                >
                    <img
                        className="w-5"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt=""
                    />
                </div>
                <span className="flex justify-center mt-4">
                    <small>
                        Aleady Have An Account?Please{" "}
                        <Link
                            to={"/login"}
                            className="text-warning hover:underline"
                        >
                            Login
                        </Link>
                    </small>
                </span>
            </form>
        </div>
    );
};

export default Register;
