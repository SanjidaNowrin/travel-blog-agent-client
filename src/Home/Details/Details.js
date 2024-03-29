import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import Header from "./../../Shared/Header/Header";
import Rating from "react-rating";
import useAuth from "./../../hooks/useAuth";
import { useForm } from "react-hook-form";
const Details = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const { id } = useParams();
  const [allComment, setAllComment] = useState([]);
  const [details, setDetails] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors, reset },
  } = useForm();

  // fetch
  useEffect(() => {
    fetch(`https://travel-blog-d3v3.onrender.com/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  //comment
  useEffect(() => {
    fetch(`https://travel-blog-d3v3.onrender.com/comment/${id}`)
      .then((res) => res.json())
      .then((data) => setAllComment(data));
  }, [allComment]);

  const onSubmit = (data, e) => {
    data["commentAuthor"] = user.displayName;
    data["blogId"] = id;

    fetch("https://travel-blog-d3v3.onrender.com/comment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    e.target.reset();
  };
  // delete comment
  const handleDeleteComment = (id) => {
    fetch(`https://travel-blog-d3v3.onrender.com/comment/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <Header></Header>
      <div className="container mt-5 ">
        <div className="row g-5 ">
          <div className="col-md-6">
            <img src={details?.img} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 shadow-sm bg-body rounded">
            <h1 style={{ color: "#565454" }}>{details.name}</h1>
            <h5 style={{ color: "#565454" }}>
              <i className="fas fa-quote-left me-2 mb-2"></i>
              {details.traveler}
            </h5>
            <Rating
              style={{ color: "#FF9529", textAlign: "center" }}
              initialRating={details?.rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating>
            <div
              className="d-flex justify-content-start fw-bolder mt-2"
              style={{ color: "#565454" }}
            >
              <h6>{details?.time}</h6> <h6 className="ms-2">{details?.date}</h6>
            </div>
            <button className="categoryButton">{details?.category}</button>
            <p className="text-secondary mt-3">{details?.desc}</p>
            <div className="d-flex justify-content-start  fw-bolder">
              <p
                className="text-center card-text text-secondary"
                style={{ color: "#565454" }}
              >
                <i className="fas fa-tag ms-3 me-2"></i>
                {details?.expense}
              </p>
              <p
                className="text-center card-text text-secondary"
                style={{ color: "#565454" }}
              >
                <i className="fas fa-location-arrow ms-3 me-2"></i>
                {details?.location}
              </p>
            </div>
            <br />
            {!allComment.length ? (
              <p className="my-3 text-center fw-bold">No Comments</p>
            ) : (
              <div>
                {allComment?.map((comment) => (
                  <div className="my-4">
                    <h6
                      style={{
                        color: "#2C3E50",
                        fontWeight: "700",
                        margin: "0",
                      }}
                    >
                      {comment?.commentAuthor}
                    </h6>
                    <p className="m-0">{comment?.comment}</p>
                    {details?.email == user?.email ||
                    comment?.commentAuthor == user?.displayName ? (
                      <p
                        onClick={() => handleDeleteComment(comment._id)}
                        className="m-0 text-danger fw-bold"
                        style={{ cursor: "pointer" }}
                      >
                        Delete Comment
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("comment")}
                placeholder="Write a Comment"
                className="p-3 m-2 w-100"
              />
              <input
                type="submit"
                value="Comment"
                className="mt-3 mb-3 btn w-25"
                style={{ backgroundColor: "#00BCD9", color: "white" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
