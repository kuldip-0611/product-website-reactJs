import React, { useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


import { useNavigate } from "react-router";

import AddataToLocal, { initialState } from "../../utils/addToLocalStorage";
import { Button, NavLink } from "reactstrap";
import { Registrationvalidation } from "../../constants/validation";

const RegistrationForm = () => {
 
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      navigate("/products");
    } 
  }, [navigate]);

  const handleSubmit = (values) => {
    AddataToLocal(values);

    navigate("/products");
  };

  return (
    <>
     
        <Formik
          initialValues={initialState}
          validationSchema={Registrationvalidation}
          onSubmit={handleSubmit}
        >
          <section className="vh-100" style={{ backgroundColor: " white" }}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ backgroundColor: "#eee" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>

                          <Form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="fname"
                                  className="w-100 form-control"
                                  id="form3Example1cd"
                                />
                                <p className="text-danger">
                                  <ErrorMessage name="fname" />
                                </p>
                                <label className="form-label">
                                  Your First Name
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="text"
                                  name="lname"
                                  className="w-100 form-control"
                                  id="form3Example1c"
                                />

                                <label className="form-label">
                                  Your Last Name
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="email"
                                  name="email"
                                  className="w-100 form-control"
                                />
                                <p className="text-danger">
                                  <ErrorMessage name="email" />
                                </p>
                                <label className="form-label">Your Email</label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="password"
                                  name="password"
                                  className="w-100 form-control"
                                />
                                <p className="text-danger">
                                  <ErrorMessage name="password" />
                                </p>
                                <label className="form-label">Password</label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="password"
                                  name="repeatpassword"
                                  className="w-100 form-control"
                                />
                                <p className="text-danger">
                                  <ErrorMessage name="repeatpassword" />
                                </p>
                                <label className="form-label">
                                  Repeat your password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <Field
                                  type="number"
                                  name="mobile"
                                  className="w-100 form-control"
                                />
                                <p className="text-danger">
                                  <ErrorMessage name="mobile" />
                                </p>
                                <label className="form-label">
                                  Mobile Number
                                </label>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label className="form-check-label">
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </div>
                            <NavLink
                              to={"/login"}
                              className="d-flex justify-content-center"
                            >
                              <Button className="bg-secondary ">
                                Already Account ? Login
                              </Button>
                            </NavLink>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Formik>
     
       
     
    </>
  );
};

export default RegistrationForm;
