import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Loginvalidation } from "../../constants/validation";


import { Login_Auth } from "../../utils/Auth/Login_Auth";
import { toast } from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

function LoginForm() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      navigate("/products");
    } else {
      navigate("/login");
    }
  }, [navigate]);
  const handleSubmit = (values) => {
    if (localStorage.getItem('loginData') == null) {
      toast.error("there is no login data");
    }
    else {
    Login_Auth(values);
    navigate("/products");
  }
  };
  return (
    <>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0 text-secondary">Login</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <Formik
                  initialValues={initialState}
                  validationSchema={Loginvalidation}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <label className="form-label">Your Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="w-100 form-control"
                      id="login_email"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="email" />
                    </p>

                    <label className="form-label">Your Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="w-100 form-control"
                      id="login_password"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="password" />
                    </p>

                    <MDBBtn
                      type="submit"
                      className="mb-4 px-5"
                      color="dark"
                      id='loginBtn'
                    >
                      Login
                    </MDBBtn>
                  </Form>
                </Formik>

                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <NavLink to="/registration" style={{ color: "#393f81" }} id='registre_user'>
                    Register here
                  </NavLink>
                </p>

                <div className="d-flex flex-row justify-content-start"></div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default LoginForm;
