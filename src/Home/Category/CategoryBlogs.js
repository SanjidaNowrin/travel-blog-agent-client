import React, { useEffect, useState } from "react";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import CategoryBlog from "./CategoryBlog";
import { Spinner } from "react-bootstrap";
const CategoryBlogs = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [filteredSource, setFilteredSource] = useState([]);
  useEffect(() => {
    fetch("https://travel-blog-d3v3.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setAllBlog(data.blogs);
        setFilteredSource(data.blogs);
      });
  }, []);
  const [catagoryValue, setCatagoryValue] = useState("Select");
  const handleSelect = (event) => {
    setCatagoryValue(event.target.value);
    let s = filteredSource.filter(
      (type) => type.category === event.target.value
    );
    setAllBlog(s);
  };
  return (
    <div style={{ backgroundColor: "#f7f8fc" }}>
      <Header></Header>
      <div>
        <div className="container">
          <h1
            className="text-center"
            style={{
              color: "#4e4841",
              fontFamily: "Playfair Display, serif",
              paddingTop: "18px",
            }}
          >
            All Blogs
          </h1>
          {/* select section */}
          <div className="container">
            <div className="p-4 m-2">
              <select
                value={catagoryValue}
                className="form-select "
                aria-label="Default select example"
                onChange={handleSelect}
              >
                <option>Select according to category</option>
                <option value="Adventure">Adventure</option>
                <option value="Family Travel">Family Travel</option>
                <option value="Photography">Photography</option>
                <option value="Solo Travelers">Solo Travelers</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* blogs cart section */}
          {allBlog.length === 0 ? (
            <div className="py-5 my-5 text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className="row m-0">
              {allBlog?.map((blog) => (
                <CategoryBlog blog={blog} key={blog._id}></CategoryBlog>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategoryBlogs;
