import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./../../Shared/Header/Header";
import Rating from "react-rating";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  var today = new Date(),
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

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
              <h6>{time}</h6> <h6 className="ms-2">{details?.date}</h6>
            </div>
            <button className="categoryButton">{details?.category}</button>
            <p className="text-secondary mt-3">{details?.desc}</p>
            <div className="d-flex justify-content-start  fw-bolder">
              <p
                className="text-center card-text text-secondary"
                style={{ color: "#565454" }}
              >
                <i class="fas fa-tag ms-3 me-2"></i>
                {details?.expense}
              </p>
              <p
                className="text-center card-text text-secondary"
                style={{ color: "#565454" }}
              >
                <i class="fas fa-location-arrow ms-3 me-2"></i>
                {details?.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
