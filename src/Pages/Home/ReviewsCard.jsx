import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewsCard = ({ review }) => {
    const { photo, email, customerName, ratings, reviewDate, comments } =
        review;
    return (
        <div className="border shadow-xl rounded-2xl p-7 hover:animate-bounce bg-white">
            <div>
                <span className="flex items-center gap-3 text-[#737373]">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={photo}
                        alt=""
                    />
                    <p>{customerName}</p>
                </span>
                <div className="ml-12">
                    <div className="flex gap-3 items-center">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={ratings}
                            readOnly
                        />
                        <p>{ratings}</p>
                    </div>
                    <p>Date: {reviewDate}</p>
                    <p className="text-[#737373]">{comments}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
