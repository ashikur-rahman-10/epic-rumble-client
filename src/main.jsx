import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Shared/RegisterOrLogin/Login.jsx";
import Register from "./Shared/RegisterOrLogin/Register.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import AddToys from "./Pages/AddToys.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import MyToys from "./Pages/MyToys/MyToys.jsx";
import AllToys from "./Pages/AllToys/AllToys.jsx";
import ToyDetails from "./Pages/ToyDetails.jsx";
import Blogs from "./Pages/Blogs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/toys",
                element: <AllToys></AllToys>,
            },

            {
                path: "/myToys",
                element: (
                    <PrivateRoutes>
                        <MyToys></MyToys>
                    </PrivateRoutes>
                ),
            },
            {
                path: "/addToys",
                element: (
                    <PrivateRoutes>
                        <AddToys></AddToys>
                    </PrivateRoutes>
                ),
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoutes>
                        <ToyDetails></ToyDetails>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://epic-rumble-server.vercel.app/allproducts/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
