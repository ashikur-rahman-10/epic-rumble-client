import React, { useEffect, useState } from "react";
import ReviewsCard from "./ReviewsCard";

const CustomersReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://epic-rumble-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto pb-20 p-4">
            <h1 className="lg:text-4xl text-2xl font-medium text-center my-12">
                Our Happy Customers Reviews
            </h1>
            <div className="grid lg:grid-cols-2 gap-5">
                {reviews.map((review) => (
                    <ReviewsCard key={review._id} review={review}></ReviewsCard>
                ))}
            </div>
        </div>
    );
};

export default CustomersReviews;
