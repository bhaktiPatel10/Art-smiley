import React, { useState } from "react";
import assetImages from "../constant/enum";
import OtpInput from "react-otp-input";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../services/apiCall";
import { apipaths } from "../services/apiPath";

const Otp = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (code) => setCode(code);
  const navigate = useNavigate();

  const VeryUser = () =>{
    if (code){
     setLoading(true)
     const userData = localStorage.getItem("registerUser")
     const newUser = JSON.parse(userData)
     const bodyData = {
        userId : newUser?._id,
        otp: code
      }
      const res = sendRequest(apipaths.verifyAccount, bodyData)
      if(res?.success){
            setLoading(false)
            toast.success(res?.data?.message);-
            navigate('/login');
      }else{
         setLoading(false)
         toast.error(res?.error?.message);
      }
    }
    else{
      toast.error("Otp is Required");
      console.warn("something wrong..")
    }
    
  }



  return (
    <>
    <div className="main-otp-box">
      <div className="left-side-box">
        <img src={assetImages.OtpPainting} alt="Painting" />
      </div>
      <div className="right-side-box">
        <div className="box-for-login-area">
          <div className="logo-area">
            <img src={assetImages.logo} alt="logo" />
          </div>
          <h1 className="login-heading">OTP Verification</h1>
              <div className="form-area-main">
                  <div className="small-headings">+91 9996958474</div>
                  <div className="smalltext-row"> Enter the OTP ypu received to</div>
                  <div className="formfield-area-main">
                    <OtpInput
                        value={code}
                        onChange={handleChange}
                        numInputs={5}
                        separator={<span style={{ width: "20px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                            background:'#e9e9e9',
                            borderRadius: "8px",
                            width: "60px",
                            height: "60px",
                            fontSize: "30px",
                            color: "#000",
                            fontWeight: "400",
                            caretColor: "blue",
                            border:'none'
                        }}
                        focusStyle={{
                            border: "1px solid #CFD3DB",
                            outline: "none"
                        }}
                    />
                  </div>
                  <div className="last-row-main">
                    <div className="right-col">
                      <span className="forgot-password-link">Resend OTP</span>
                    </div>
                  </div>
                  <div className="btn-row-main">
                    <button className="login-btn-main" onClick={VeryUser} type="submit">
                      {loading ? <ClipLoader color={"#fff"} loading={loading}  size={20} /> : "Continue" }
                    </button>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Otp