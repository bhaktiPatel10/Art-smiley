import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Schema = {
//  Contact Form
  contactus: Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    mobileNumber: Yup.string()
      .ensure()
      .required("Phone number is required.")
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "Phone number max legth is 10.")
      .min(10, "Phone number min legth is 10."),
    EmailId: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
  }),
//   Login form
  login: Yup.object().shape({
    EmailId: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string().required("Password is required."),
  }),
//   Signup Form
  signup: Yup.object().shape({
    EmailId: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    mobileNumber: Yup.string()
      .ensure()
      .required("Phone number is required.")
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "Phone number max legth is 10.")
      .min(10, "Phone number min legth is 10."),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Password must be 6 Character"),
  }),
  // Ask a Question 
  askQuestion : Yup.object().shape({
    
  })
};

export default Schema;
