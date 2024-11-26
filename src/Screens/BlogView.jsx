import React from "react";

const BlogView = () => {
    const blog = {
        title: "The Future of Technology",
        author: "Jane Doe",
        date: "November 25, 2024",
        content: `
            Technology has become an integral part of our daily lives, shaping the way we communicate, work, and entertain ourselves. 
            In the future, we can expect even more transformative advancements, such as AI-driven automation, quantum computing, 
            and breakthroughs in biotechnology. These changes promise to enhance productivity, improve healthcare, and address global challenges.
        `,
        image: "https://via.placeholder.com/800x400",
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-yellow-500 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-lg md:text-xl">
                        {blog.date} · By <span className="font-medium">{blog.author}</span>
                    </p>
                </div>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover mt-6 shadow-lg"
                />
            </section>

            {/* Blog Content */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="prose prose-lg max-w-4xl mx-auto text-gray-800">
                    <p>
                        {blog.content}
                    </p>
                    <p>
                        The key is embracing technology while ensuring ethical considerations and equity in its application.
                        By fostering innovation and addressing potential challenges, humanity can unlock a brighter future with limitless possibilities.
                    </p>
                </div>
            </section>

            {/* Interaction Section */}
            <section className="container">
                Comments
            </section>

            {/* Interaction Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="flex items-center justify-between max-w-4xl mx-auto border-t border-b py-4">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                            <span className="font-medium">Like</span>
                        </button>
                        <button className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 8h14M12 3v18"
                                />
                            </svg>
                            <span className="font-medium">Share</span>
                        </button>
                    </div>
                    <p className="text-gray-600">124 Likes · 54 Shares</p>
                </div>
            </section>

            {/* Comments Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white shadow-lg rounded-lg">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Comments (3)
                    </h2>

                    {/* Comment Form */}
                    <form className="flex items-center space-x-4 mb-8">
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600"
                        >
                            Post
                        </button>
                    </form>

                    {/* Comment List */}
                    <div className="space-y-6">
                        <div className="flex space-x-4">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-800">Alex Johnson</p>
                                <p className="text-gray-600">
                                    This blog is incredibly insightful! Thanks for sharing.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-800">Maria Gonzales</p>
                                <p className="text-gray-600">
                                    I love the way you explain technology trends.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-medium text-gray-800">John Carter</p>
                                <p className="text-gray-600">
                                    Looking forward to more blogs like this!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">
                        © 2024 Blogify. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default BlogView;

