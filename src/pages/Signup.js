import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import assetImages from "../constant/enum";
import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { sendRequest } from "../services/apiCall";
import { apipaths } from "../services/apiPath";
import Schema from "../services/ValidationServices";


const Signup = () => {
    let [loading, setLoading] = useState(false);
    const [IsRevealPassword, setIsRevealPassword] = useState(false);
    const navigate = useNavigate();
    const role = "Buyer";
    const token = localStorage.getItem('auth-token')


    const Signup = async (values) =>{
      setLoading(true);
      const bodyData = {
          email : values?.EmailId,
          password:values?.password,
          mobileNumber:values?.mobileNumber,
          role:values?.role
      }
      const response = await sendRequest(apipaths.signup, bodyData);
      console.log(response)
      if(response?.success){
         localStorage.setItem("registerUser", JSON.stringify(response?.data));
         const userData = localStorage.getItem('registerUser');
         toast.success(response?.message);
         if(userData){
            navigate("/otp");
        }
      }else{
        setLoading(false);
        toast.error(response?.error?.message);
      }
    }
    useEffect(() => {
      if(token){
        navigate('/')
      }
    })

    return (
      <>
        <div className="main-signup-box">
          <div className="left-side-box">
            <img src={assetImages.Signup} alt="Painting" />
          </div>
          <div className="right-side-box">
            <div className="box-for-login-area">
              <div className="logo-area">
                <img src={assetImages.logo} alt="logo" />
              </div>
              <h1 className="login-heading">Welcome to Art Smiley</h1>
              <Formik
                initialValues={{
                  EmailId: "",
                  password: "",
                  mobileNumber: "",
                  role: "Buyer",
                }}
                validationSchema={Schema.signup}
                onSubmit={(values) => {
                  Signup(values)
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
                        <Link to={"/login"}><button type="button" className="signup-btn">Login</button></Link>
                        <Link to={"/signup"}><button type="button" className="login-btn">Sign Up</button></Link>
                      </div>
                      <div className="small-headings">Create new account</div>
                      <div className="smalltext-row">
                        Not a member ? <Link to={"/login"}><span>Log in</span></Link>
                      </div>
                      <div className="formfield-area-main">
                          <label className="form-label">Mobile number</label>
                          <input
                            name="mobileNumber"
                            maxLength="10"
                            type="text"
                            minLength={10}
                            autoComplete="off"
                            values={values.mobileNumber}
                            placeholder="+91 1234567890"
                            className={
                              "form-control" +
                              (errors.mobileNumber && touched.mobileNumber
                                ? " is-invalid"
                                : "")
                            }
                            onChange={(e) =>
                              setFieldValue("mobileNumber", e.target.value)
                            }
                          />
                          <ErrorMessage
                            name="mobileNumber"
                            component="div"
                            className="invalid-feedback"
                          />
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
                            minLength={6}
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
                      </div>
                      <div className="btn-row-main">
                        <button className="login-btn-main" type="submit">
                          {loading ? <ClipLoader color={"#fff"} loading={loading}  size={20} /> : "Sign Up" }

                        </button>
                      </div>
                      <div className="small-text-area">Sign Up as a guest ?</div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </>
    );
}

export default Signup