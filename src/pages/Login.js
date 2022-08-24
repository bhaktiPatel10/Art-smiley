import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import assetImages from "../constant/enum";
import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { sendRequest } from "../services/apiCall";
import { apipaths } from "../services/apiPath";
import Schema from "../services/ValidationServices";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate()
  const [IsRevealPassword, setIsRevealPassword] = useState(false);
  const role = "Buyer";
  const token = localStorage.getItem('auth-token')

  
  const Login = async (values) => {
    setLoading(true);
    const bodyData = {
      email: values?.EmailId,
      password: values?.password,
      role: values?.role,
    };
    const res = await sendRequest(apipaths.login, bodyData);
    if (res?.success) {
      setLoading(false);
      toast.success(res?.message);
      localStorage.setItem("auth-token", res?.data?.authToken);
      window.location.href = "/"
    } else {
      setLoading(false);
      toast.error(res?.error?.message);
    }
  };

  useEffect(() => {
    if(token){
      Navigate('/')
    }
  })

  return (
    <>
      <div className="main-Login-box">
        <div className="left-side-box">
          <img src={assetImages.LoginPainting} alt="Painting" />
        </div>
        <div className="right-side-box">
          <div className="box-for-login-area">
            <div className="logo-area">
              <img src={assetImages.logo} alt="logo" />
            </div>
            <h1 className="login-heading">Hello, Emily Cooper</h1>
            <Formik
              initialValues={{
                EmailId: "",
                password: "",
                role: "Buyer",
              }}
              validationSchema={Schema.login}
              onSubmit={(values) => {
                Login(values);
              }}
            >
              {({ errors, values, touched, setFieldValue }) => (
                <div className="form-area-main">
                  <Form>
                    <div className="first-row">
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Buyer"
                        name={role}
                        value={values.value}
                        onChange={(e) =>
                          setFieldValue("role", e.currentTarget.value)
                        }
                      >
                        <FormControlLabel
                          value="Buyer"
                          control={<Radio />}
                          label="Buyer"
                        />
                        <FormControlLabel
                          value="Curator"
                          control={<Radio />}
                          label="Curator"
                        />
                        <FormControlLabel
                          value="Affiliate"
                          control={<Radio />}
                          label="Affiliate"
                        />
                      </RadioGroup>
                    </div>
                    <div className="second-row">
                      <Link to={"/login"}>
                        <button className="login-btn">Login</button>
                      </Link>
                      <Link to={"/signup"}>
                        <button type="button" className="signup-btn">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                    <div className="smalltext-row">
                      Already a member?{" "}
                      <Link to={"/signup"}>
                        <span>Sign Up</span>
                      </Link>
                    </div>
                    <div className="formfield-area-main">
                      <label className="form-label">Email</label>
                      <input
                        name="EmailId"
                        type="text"
                        placeholder="Enter your email"
                        values={values.EmailId}
                        className={
                          "form-control" +
                          (errors.EmailId && touched.EmailId
                            ? " is-invalid"
                            : "")
                        }
                        onChange={(e) =>
                          setFieldValue("EmailId", e.target.value)
                        }
                      />
                      <ErrorMessage
                        name="EmailId"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="formfield-area-main">
                      <label className="form-label">Password</label>
                      <div className="password-field">
                        <input
                          name="password"
                          type={IsRevealPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          values={values.password}
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                          onChange={(e) =>
                            setFieldValue("password", e.target.value)
                          }
                        />
                        <i
                          className={
                            IsRevealPassword
                              ? "fa-solid fa-eye"
                              : "fa-solid fa-eye-slash"
                          }
                          onClick={() =>
                            setIsRevealPassword((prevState) => !prevState)
                          }
                        ></i>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="last-row-main">
                      <div className="left-col">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Keep me signed in"
                        />
                      </div>
                      <div className="right-col">
                        <span className="forgot-password-link">
                          Forgot password?
                        </span>
                      </div>
                    </div>
                    <div className="btn-row-main">
                      <button className="login-btn-main" type="submit">
                        {loading ? (
                          <ClipLoader
                            color={"#fff"}
                            loading={loading}
                            size={20}
                          />
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                    <div className="small-text-area">Login as a guest ?</div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
