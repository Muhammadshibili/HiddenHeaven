import React from "react";
import "./Login.css";
import image2 from "../../../Images/astronaut-login.jpg";

const Login = () => {
  return (
    <div>
      <section className="vh-100 back background">
        <div className="container py-1 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card main-card">
                <div className="row g-0">
                  <div className="">
                    {/* col-md-6 col-lg-5 d-none d-md-block */}
                    <img
                    src={image2}
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
                      <div className="card card-inside-field">
                        <form action="">
                          <div>
                            <h3 htmlFor="" className="login-your-account">
                              Login your account
                            </h3>
                          </div>
                          <div>
                            <label htmlFor="" className="Email">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control  input"
                            />
                          </div>
                          <div>
                            <label htmlFor="" className="Password">
                              Password
                            </label>
                            <input
                              type="email"
                              className="form-control  input"
                            />
                          </div>
                          {/* forgot and signup div */}
                          <div className="row">
                            <div className="col-6">
                              <a className="forgot" href="#!">
                                Forgot password?
                              </a>
                            </div>
                            <div className="col-6">
                              <a className="Signup" href="../Signup">
                                SignUp
                              </a>
                            </div>
                          </div>
                          {/* forgot and signup div  End*/}
                          <div className="">
                            <button
                              className="btn btn-dark btn-lg btn-block Login-button"
                              type="button"
                            >
                              LOGIN
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
    </div>
  );
};

export default Login;
