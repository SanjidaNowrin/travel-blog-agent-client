import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import login from "../../assets/images/login.png";
import useAuth from "./../../hooks/useAuth";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
const Login = () => {
  const { allContext } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const {
    getEmail,
    getPassword,
    signInWithEmail,
    error,
    setUser,
    setError,
    signInWithGoogle,
  } = allContext;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="m-0 mt-3 row">
          <div className="col-lg-6 col-sm-12 ">
            <img src={login} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="p-4 my-5 text-center shadow-lg">
              <h2 style={{ color: "#565454" }}>Please Login</h2>
              <p className="mt-2 mb-4 ">Login with Email & Password</p>
              <p className="text-center text-danger">{error}</p>
              <div className="mx-auto w-75">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signInWithEmail()
                      .then((result) => {
                        setUser(result.user);
                        navigate(redirect);
                      })
                      .catch((err) => {
                        setError(err.message);
                      });
                  }}
                >
                  <Row>
                    <Col className="text-start">
                      <Form.Label htmlFor="email" visuallyHidden>
                        Your Email Address
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: "#565454" }}
                          ></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                          onBlur={getEmail}
                          type="email"
                          autoComplete="current-email"
                          id="email"
                          placeholder="Enter your email address"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col className="text-start">
                      <Form.Label htmlFor="password" visuallyHidden>
                        Your Password
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faLock}
                            style={{ color: "#565454" }}
                          ></FontAwesomeIcon>
                        </InputGroup.Text>
                        <FormControl
                          onBlur={getPassword}
                          type="password"
                          autoComplete="current-password"
                          id="password"
                          placeholder="Enter your password"
                        />
                      </InputGroup>
                    </Col>
                  </Row>

                  <button
                    type="submit"
                    className="mt-2 border-0 btn btn-primary w-100"
                    style={{ backgroundColor: "#565454" }}
                  >
                    Login
                  </button>
                </Form>
              </div>
              <p className="mt-2" style={{ color: "#023c76" }}>
                <NavLink className="text-decoration-none" to="/signup">
                  Need an Account? Please Sign up!
                </NavLink>
              </p>
              <p className="mt-3" style={{ color: "#565454" }}>
                Or
              </p>
              <p style={{ color: "#565454" }}> Login with</p>
              <div>
                <button
                  onClick={() => {
                    signInWithGoogle()
                      .then((result) => {
                        setUser(result.user);
                        navigate(redirect);
                      })
                      .catch((err) => {
                        setError(err.message);
                      });
                  }}
                  className="btn"
                >
                  <img src={google} width="46px" alt="google-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
