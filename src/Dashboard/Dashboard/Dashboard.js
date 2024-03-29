import React, { useState } from "react";
import "./Dashboard.css";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import logo from "../../assets/images/logo-color.png";
import { NavLink, Link, Outlet } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  const { allContext } = useAuth();
  const { isAdmi, logOut, user } = allContext;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashboard-area">
      <Container fluid className="ps-0">
        <Row className="p-0">
          <Col lg={2} className="p-0">
            <div className="side-navbar desktop">
              <Link to="/" className="logo">
                <img style={{ width: "120px" }} src={logo} alt="" />
              </Link>

              <div className="dashboard-menu">
                <ul>
                  {!isAdmi && (
                    <NavLink
                      to={`/dashboard/myBlogs`}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <li className="mt-3 ps-3 dashboard-menu">
                        <i className="fab fa-blogger me-2"></i>My Blogs
                      </li>
                    </NavLink>
                  )}
                  {!isAdmi && (
                    <NavLink
                      to={`/dashboard/writeBlog`}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <li className="mt-4 ps-3 dashboard-menu">
                        <i className="fas fa-feather me-2"></i>Write Blog
                      </li>
                    </NavLink>
                  )}

                  {isAdmi && (
                    <NavLink
                      to={`/dashboard/makeAdmin`}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <li
                        className="mt-3 ps-3 dashboard-menu"
                        style={{ te: "none", color: "black" }}
                      >
                        Make Admin
                      </li>
                    </NavLink>
                  )}
                  {isAdmi && (
                    <NavLink
                      to={`/dashboard/addBlog`}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <li className="mt-3 ps-3 dashboard-menu">Add Blogs</li>
                    </NavLink>
                  )}
                  {isAdmi && (
                    <NavLink
                      to={`/dashboard/manageBlogs`}
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <li className="mt-3 ps-3 dashboard-menu">
                        Manage All Blogs
                      </li>
                    </NavLink>
                  )}
                  <NavLink
                    className="ms-3"
                    style={{
                      textDecoration: "none",
                      fontSize: "20px",
                      color: "black",
                    }}
                    to="/home"
                  >
                    <i className="fas fa-home me-2"></i>
                    Back To Home
                  </NavLink>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={logOut}
                  style={{ backgroundColor: "#00BCD9", marginTop: "15px" }}
                  className="border-0 btn btn-primary fw-bolder"
                >
                  Log Out
                </button>
              </div>
            </div>
          </Col>
          <Col lg={10} className="p-0">
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <div className="side-navbar">
                <Link to="/" className="logo">
                  <img style={{ width: "120px" }} src={logo} alt="" />
                </Link>

                <div className="dashboard-menu">
                  <ul>
                    {!isAdmi && (
                      <NavLink
                        to={`/dashboard/myBlogs`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        <li className="mt-3 ps-3 dashboard-menu">
                          <i className="fab fa-blogger me-2"></i>My Blogs
                        </li>
                      </NavLink>
                    )}
                    {!isAdmi && (
                      <NavLink
                        to={`/dashboard/writeBlog`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        <li className="mt-4 ps-3 dashboard-menu">
                          <i className="fas fa-feather me-2"></i>Write Blog
                        </li>
                      </NavLink>
                    )}

                    {isAdmi && (
                      <NavLink
                        to={`/dashboard/makeAdmin`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        <li
                          className="mt-3 ps-3 dashboard-menu"
                          style={{ te: "none", color: "black" }}
                        >
                          Make Admin
                        </li>
                      </NavLink>
                    )}
                    {isAdmi && (
                      <NavLink
                        to={`/dashboard/addBlog`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        <li className="mt-3 ps-3 dashboard-menu">Add Blogs</li>
                      </NavLink>
                    )}
                    {isAdmi && (
                      <NavLink
                        to={`/dashboard/manageBlogs`}
                        style={{
                          textDecoration: "none",
                          fontSize: "20px",
                          color: "black",
                        }}
                      >
                        <li className="mt-3 ps-3 dashboard-menu">
                          Manage All Blogs
                        </li>
                      </NavLink>
                    )}
                    <NavLink
                      className="ms-3"
                      style={{
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "black",
                      }}
                      to="/home"
                    >
                      <i className="fas fa-home me-2"></i>
                      Back To Home
                    </NavLink>
                  </ul>
                </div>

                <button
                  style={{
                    backgroundColor: "#00BCD9",
                    marginTop: "15px",
                    border: "none",
                    color: "white",
                  }}
                  className="signin ms-4"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            </Offcanvas>

            <div className="dashbord-header d-flex justify-content-between align-items-center">
              <Button className="dashboard-sm" onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <p>Dashboard</p>
              <span>{user.displayName}</span>
            </div>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
