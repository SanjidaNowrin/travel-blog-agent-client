import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo-color.png";
const Footer = () => {
  return (
    <div
      className="footer mt-5"
      style={{
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#565454",
      }}
    >
      <div className="container">
        <div className="rowside">
          <div className="footer-col">
            <h4> About Travel</h4>
            <ul className="fw-bolder">
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4> Get help</h4>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>

              <li>
                <NavLink to="/home">Policy</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Online Service</h4>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>

              <li>
                <NavLink to="/home">Policy</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
