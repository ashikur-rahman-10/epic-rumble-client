import React, { useState, useEffect } from "react";

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts from JSON file
        fetch(
            "https://raw.githubusercontent.com/ashikur-rahman-10/dummy-data-repo/main/Epic-Rumble/blogs.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="bg-gradient-to-b from-base-200 to-[#FFF6F2]">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-center lg:my-10 mb-3">
                    Blogs
                </h1>

                {posts.map((post, index) => (
                    <div key={post.id} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">{`${
                            index + 1
                        }. ${post.question}`}</h2>
                        <p className="text-[#737373] pl-6 whitespace-wrap">
                            {post.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
