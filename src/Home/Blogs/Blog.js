import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import Rating from "react-rating";
const Blog = ({ blog }) => {
  const { name, img, date, desc, expense, location, category, _id, traveler } =
    blog || {};
  return (
    <div className="mt-5 col-lg-4 col-sm-6 gx-5">
      <div
        className="p-3 mb-5 border-0 rounded shadow cardHover card w-100"
        style={{ background: "#EFEFEF" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-center  fw-bolder">
            <p
              className="text-center card-text text-secondary"
              style={{ color: "#565454" }}
            >
              <i className="fas fa-calendar-day me-2"></i>
              {date}
            </p>
            <div>
              <i className="fas fa-feather ms-3 me-1 text-secondary"></i>
              <q
                className="text-center card-text text-secondary"
                style={{ color: "#565454" }}
              >
                {traveler}
              </q>
            </div>
          </div>
          {/* div end */}
          <h3
            className="mb-2 text-center card-title font-weight-bold fw-bolder"
            style={{ color: "#565454" }}
          >
            {name}
          </h3>
          <div className="d-flex justify-content-center  fw-bolder mb-3">
            <button className="categoryButton">{category}</button>
          </div>
          {/* button div end */}
          <p className="text-secondary">{desc}</p>
          <div className="d-flex justify-content-center  fw-bolder">
            <p
              className="text-center card-text text-secondary"
              style={{ color: "#565454" }}
            >
              <i class="fas fa-tag ms-3 me-2"></i>
              {expense}
            </p>
            <p
              className="text-center card-text text-secondary"
              style={{ color: "#565454" }}
            >
              <i class="fas fa-location-arrow ms-3 me-2"></i>
              {location}
            </p>
          </div>
          {/* <Rating
            style={{ color: "#FF9529", textAlign: "center" }}
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          ></Rating> */}

          <Link to={`/details/${_id}`}>
            <button className="container details-btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
