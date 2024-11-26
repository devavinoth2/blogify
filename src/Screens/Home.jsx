import React, { useState } from "react";

const blogs = [
    {
        id: 1,
        title: "The Future of Technology",
        description:
            "Explore the latest trends shaping the future of technology in 2024 and beyond.",
        image: "https://via.placeholder.com/400x250",
        date: "Nov 25, 2024",
        author: "Jane Doe",
    },
    {
        id: 2,
        title: "Top 10 Travel Destinations",
        description:
            "Discover the most breathtaking travel destinations for your next vacation.",
        image: "https://via.placeholder.com/400x250",
        date: "Nov 20, 2024",
        author: "John Smith",
    },
    {
        id: 3,
        title: "The Art of Minimalism",
        description:
            "Learn how minimalism can transform your lifestyle and bring peace of mind.",
        image: "https://via.placeholder.com/400x250",
        date: "Nov 18, 2024",
        author: "Emily Brown",
    },
    // Add more blogs as needed
];

const Home = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(2); // Show 2 blogs initially

    const loadMoreBlogs = () => {
        setVisibleBlogs((prev) => prev + 2);
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}
            <section className="bg-yellow-500 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to Blogify
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Discover insightful blogs, stay informed, and be inspired.
                    </p>
                    <button className="bg-white text-yellow-500 font-medium px-6 py-3 rounded-md shadow-md hover:bg-yellow-100 transition duration-200">
                        Explore Blogs
                    </button>
                </div>
            </section>

            {/* Blog Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Latest Blogs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(0, visibleBlogs).map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {blog.date} · {blog.author}
                                </p>
                                <p className="text-gray-700 mt-2">
                                    {blog.description}
                                </p>
                                <a
                                    href={`/blogs/${blog.id}`}
                                    className="text-yellow-500 hover:text-yellow-600 font-medium mt-4 inline-block"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleBlogs < blogs.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={loadMoreBlogs}
                            className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition duration-200"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </section>

            {/* Newsletter Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Stay updated with the latest blogs and insights.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-md px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
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

export default Home;
