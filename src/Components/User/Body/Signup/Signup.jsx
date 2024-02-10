import React from "react";
import "./Signup.css";
import image3 from "../../../Images/astronaut-login.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    phoneNumber: "",
    Password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .strict(true)
      .trim("* Name must not contain white space")
      .test(
        "* no-whitespace",
        "* Name must not contain white space",
        (value) => !/\s/.test(value)
      )
      .min(3, "Name must be at least 3 characters long")
      .matches(/^[A-Za-z]+$/, "* Name must only contain characters")
      .required("* This field is required"),
    phoneNumber: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "* Invalid phone number. Please enter a 10-digit number."
      )
      .required("* This field is required"),
    email: Yup.string()
      .email("* Invaild email format")
      .required("* This field is required")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "* Invalid email address"
      ),
    password: Yup.string()
      .required("* This field is required")
      .min(6, "* Password must be at least 6 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\,.<>/?]).*$/,
        "* Password must contain at least one capital letter\nand one special character"
      ),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("* This field is required"),
  });

  const formik = useFormik({
    initialValues,
    // onSubmit,
    validationSchema,
  });

  // const onSubmit = async(values) => {
  //   console.log(values);
  //   const {data}=await signup(values);
  //   console.log(data);
  //   };

  return (
    <div>
      <section className="vh-100 back background">
        <div className="container py-1 ">
          <div className="row0 d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card card-1">
                <div className="row g-0">
                  <div className="">
                    {/* col-md-6 col-lg-5 d-none d-md-block */}
                    <img
                      src={image3}
                      alt="login form"
                      className="img-fluid img-astronaut"
                    />
                    <div>
                      <h5 className="welcome-to-hidden-heaven">
                        Welcome,to Hidden Heaven Login to continue
                      </h5>
                      <hr className="line-1" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className=" card-body p-4 p-lg-5 text-black">
                      <div className="close-icon">
                        <i className="bi bi-x-lg "></i>
                      </div>
                      <div className="card card-2">
                        <form action="">
                          <div>
                            <h3 htmlFor="" className="login-your-account">
                              Creat your account
                            </h3>
                          </div>
                          <div>
                            <label htmlFor="" className="name">
                              Name
                            </label>
                            <input
                              type="username"
                              className="form-control  input"
                              name="username"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.username}
                              required
                            />
                            {formik.touched.username &&
                            formik.errors.username ? (
                              <p
                                className="text-danger"
                                style={{ fontSize: "15px", margin: "0px" }}
                              >
                                {formik.errors.username}
                              </p>
                            ) : null}
                          </div>

                          <div>
                            <label htmlFor="" className="email">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control  input"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="phone">
                              phone
                            </label>
                            <input
                              type="phoneNumber"
                              className="form-control  input"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="password">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control  input"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="password">
                              conform Password
                            </label>
                            <input
                              type="confirmpassword"
                              className="form-control  input"
                            />
                          </div>
                          <div className="nothing1">
                            <a className="login" href="../Login">
                              {" "}
                              Login
                            </a>
                          </div>

                          <div className="">
                            <button
                              className="btn btn-dark btn-lg btn-block login-button"
                              type="button"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div>
        <section className="vh-100 back background">
          <div className="container py-1 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card card-1">
                  <div className="row g-0">
                    <div className="">
                      <img
                        src={image3}
                        alt="login form"
                        className="img-fluid"
                      />
                      <div>
                        <h5 className="welcome-to-hidden-heaven">
                          Welcome,to Hidden Heaven Login to continue
                        </h5>
                        <hr className="line-1" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className=" card-body p-4 p-lg-5 text-black">
                        <div className="close-icon">
                          <i className="bi bi-x-lg "></i>
                        </div>
                        <div className="card card-2">
                          <form action="">
                            <div>
                              <h3 htmlFor="" className="login-your-account">
                                Creat your account
                              </h3>
                            </div>
                            <div>
                              <label htmlFor="" className="name">
                                Name
                              </label>
                              <input
                                type="username"
                                className="form-control  input"
                                name="username"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                required
                              />
                              {formik.touched.username &&
                              formik.errors.username ? (
                                <p
                                  className="text-danger"
                                  style={{ fontSize: "15px", margin: "0px" }}
                                >
                                  {formik.errors.username}
                                </p>
                              ) : null}
                            </div>

                            <div>
                              <label htmlFor="" className="email">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control  input"
                              />
                            </div>
                            <div>
                              <label htmlFor="" className="phone">
                                phone
                                   </label>
                              <input
                                type="phoneNumber"
                                className="form-control  input"
                              />
                            </div>
                            <div>
                              <label htmlFor="" className="password">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control  input"
                              />
                            </div>
                            <div>
                              <label htmlFor="" className="password">
                                conform Password
                              </label>
                              <input
                                type="confirmpassword"
                                className="form-control  input"
                              />
                            </div>
                            <div className="nothing1">
                              <a className="login" href="../Login">
                                {" "}
                                Login
                              </a>
                            </div>

                            <div className="">
                              <button
                                className="btn btn-dark btn-lg btn-block login-button"
                                type="button"
                              >
                                SUBMIT
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Signup;
