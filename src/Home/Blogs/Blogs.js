import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 style={{ color: "#565454" }} className="container text-center">
          Blogs
        </h1>
        {blogs.length === 0 ? (
          <div className="py-5 my-5 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="row">
            {blogs.map((blog) => (
              <Blog blog={blog} key={blog._id}></Blog>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
