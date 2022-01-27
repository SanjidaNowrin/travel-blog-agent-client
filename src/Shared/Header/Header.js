import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo-color.png";
import { NavLink } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  const { allContext } = useAuth();
  const { user, logOut } = allContext;
  const { displayName, photoURL, email } = user;
  return (
    <div className="sticky-top">
      <Navbar
        expand="lg"
        className="p-2"
        style={{
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          backgroundColor: "white",
        }}
      >
        <Container>
          <Navbar.Brand to="/home" as={NavLink}>
            <img width="180px" src={logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={NavLink}
                className="fw-bolder"
                to="/home"
                style={{
                  color: "#565454",
                }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className=" fw-bolder"
                to="/categoryBlogs"
                style={{
                  color: "#565454",
                }}
              >
                ALL BLOGS
              </Nav.Link>

              {!user.displayName ? (
                <>
                  <Nav.Link className=" fw-bolder" as={NavLink} to="/login">
                    LOG IN
                  </Nav.Link>

                  <Nav.Link className=" fw-bolder" as={NavLink} to="/signup">
                    SIGN UP
                  </Nav.Link>
                </>
              ) : (
                <div className="d-md-flex align-items-center">
                  <Nav.Link
                    as={NavLink}
                    className="p-4 text-center  fw-bolder"
                    to="/dashboard"
                    style={{
                      color: "#00BCD9",
                    }}
                  >
                    DASHBOARD
                  </Nav.Link>

                  <h6
                    className="fw-bold me-2 mt-2"
                    style={{
                      color: "#565454",
                    }}
                  >
                    {displayName}
                  </h6>
                  <button
                    onClick={logOut}
                    style={{ backgroundColor: "#00BCD9" }}
                    className="border-0 btn btn-primary fw-bolder"
                  >
                    {" "}
                    <i className="fas fa-sign-out-alt me-1"></i>
                    Log Out
                  </button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
