import React from "react";
import "./TopRated.css";
import Rating from "react-rating";
import Blog from "./../Category/CategoryBlog";
const TopRated = ({ blog }) => {
  const { img, rating, name } = blog;

  return (
    <div>
      <div
        className="col-md-12 mt-4 p-2 mb-4"
        style={{
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img src={img} className="img-fluid rounded" alt="" />
        <h4 className="mt-2">{name}</h4>
        <Rating
          style={{ color: "#FF9529", textAlign: "center" }}
          initialRating={rating}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        ></Rating>
      </div>
    </div>
  );
};

export default TopRated;
