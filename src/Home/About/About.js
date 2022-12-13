import React, { useState } from "react";
import "./About.css";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import TopRated from "./../TopRated/TopRated";
import { Link } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-5">
      <div className="row g-5 m-0">
        <div className=" col-md-6">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={banner3}
                  className="d-block w-100"
                  alt="..."
                  height="400px"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={banner2}
                  className="d-block w-100"
                  alt="..."
                  height="400px"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={banner1}
                  className="d-block w-100"
                  alt="..."
                  height="400px"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h1
            className="mt-4 fw-bolder"
            style={{
              color: "#565454",
            }}
          >
            Travelicious Travel Agency
          </h1>
          <p className="text-secondary">
            Enthusiastically mesh long-term high-impact infrastructures
            vis-a-vis efficient customer service. Professionally fashion
            wireless leadership rather than prospective experiences. Quickly
            aggregate B2B users and worldwide potentialities. Progressively
            plagiarize resource-leveling e-commerce through resource-leveling
            core competencies. Dramatically mesh low-risk high-yield alignments
            before transparent e-tailers. Appropriately empower dynamic
            leadership skills after business portals. Globally myocardinate
            interactive supply chains with distinctive quality vectors.
          </p>
          <Link
            style={{ backgroundColor: "#00BCD9" }}
            to="/categoryBlogs"
            className="border-0 p-2 btn btn-primary fw-bolder "
          >
            <i className="fas fa-angle-double-right me-1"></i>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
