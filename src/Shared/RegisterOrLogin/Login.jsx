import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCustomTitle from "../Hooks";

const Login = () => {
    const [error, setError] = useState("");
    const { googleLogin, userLogin } = useContext(AuthContext);

    const location = useLocation();
    const from = location?.state?.pathname || "/";

    const navigate = useNavigate();
    // Login user with Email and password

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const loggedUser = result.user;

                Swal.fire("User Login Successfull", "", "success");
                event.target.reset();
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // Login with Google Account
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const loggedUser = result.user;

                Swal.fire("User Login Successfull", "", "success");
                navigate(from, { replace: true });
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    useCustomTitle("Login");
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    return (
        <div className="min-h-[92vh] w-full flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="border shadow-lg rounded-xl px-4 py-10 w-96"
            >
                <h1 className="text-center text-3xl my-4">Sign In</h1>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="input input-bordered input-info max-w-xl w-full "
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="input input-bordered input-info max-w-sm w-full "
                    />
                    <span>
                        <Link className="text-xs hover:underline hover:text-warning mt-1">
                            Forget Password?
                        </Link>
                    </span>
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
                        value="Login"
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
                        New in Epic Rumble?Please{" "}
                        <Link
                            to={"/register"}
                            className="text-warning hover:underline"
                        >
                            Register
                        </Link>
                    </small>
                </span>
            </form>
        </div>
    );
};

export default Login;
