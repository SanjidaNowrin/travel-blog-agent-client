import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Blog from "./Blog";
import "./Blogs.css";
import TopRated from "./../TopRated/TopRated";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(
      `https://desolate-depths-37774.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  // top ratings
  const topBlogs = blogs.filter((blog) => 5 == blog.rating);

  return (
    <div>
      <div className="container mt-5 mb-5">
        <h1
          style={{ color: "#565454" }}
          className="container text-center topBlog"
        >
          Blogs
        </h1>
        {blogs.length === 0 ? (
          <div className="py-5 my-5 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="row m-0 gx-5">
            <div className="col-md-4 ">
              <h3 style={{ color: "#565454" }} className="text-center ">
                Top Rated Spots
              </h3>
              {topBlogs?.map((blog) => (
                <TopRated key={blog._id} blog={blog} />
              ))}
            </div>

            <div className="col-md-8">
              <div className="row m-0">
                {blogs.map((blog) => (
                  <Blog blog={blog} key={blog._id}></Blog>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* pagination start */}

        <div className="pagination">
          {/*  */}
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
