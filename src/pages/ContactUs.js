import React from "react";
import { Container, Grid } from "@mui/material";
import Banner from "../components/Banner";
import assetImages from "../constant/enum";
import { Formik, Form, ErrorMessage } from "formik";
import { Box } from "@mui/system";
import Schema from "../services/ValidationServices";

const ContactUs = () => {
  const BreadCrumb = {
    defaultPage: "Home",
    currentPage: "Contact Us",
  };
  const contactForm = {
    fullName: "",
    mobileNumber: "",
    EmailId: "",
    messageArea: "",
  };
  return (
    <>
      <Banner bannerTitle="Contact Us" BreadCrumb={BreadCrumb} />
      <section className="contact-us-form-section">
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item lg={5} md={5} sm={12} className="left-col">
              <div className="paintings">
                <img src={assetImages.contactUsPainting} alt="img" />
              </div>
            </Grid>
            <Grid item lg={7} md={7} sm={12} className="right-col">
              <div className="contactus-form-box">
                <h2 className="comman-heading">Let’s Get in touch</h2>
                {/* ===Contact Form ===== */}
                <Formik
                  initialValues={contactForm}
                  validationSchema={Schema.contactus}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, values, touched, setFieldValue }) => (
                    <div className="contact-inner-form-main">
                      <Form>
                        <div className="form-field-area">
                          <label className="form-label">Full Name</label>
                          <input
                            name="fullName"
                            values={values.fullName}
                            type="text"
                            placeholder="Jenny Willson"
                            className={
                              "form-control" +
                              (errors.fullName && touched.fullName
                                ? " is-invalid"
                                : "")
                            }
                            onChange={(e) =>
                              setFieldValue("fullName", e.target.value)
                            }
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-field-area">
                          <label className="form-label">Phone</label>
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
                        <div className="form-field-area">
                          <label className="form-label">Email</label>
                          <input
                            name="EmailId"
                            type="text"
                            placeholder="art@gmail.com"
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
                        <div className="form-field-area text-area-filed">
                          <label className="form-label">Message</label>
                          <textarea
                            name="messageArea"
                            placeholder="Type here"
                            values={values.messageArea}
                            onChange={(e) =>
                              setFieldValue("messageArea", e.target.value)
                            }
                          ></textarea>
                        </div>
                        <div className="text-right">
                          <button type="submit" className="comman-btn">
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  )}
                </Formik>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="map-section">
        <Container maxWidth="lg">
          <div className="inner-box-area">
            <Box className="address-box">
              <div className="comman-row">
                <div className="left-icon">
                  <img src={assetImages.HomeIcon} alt="HomeIcon" />
                </div>
                <div className="address-line">
                  4930 Dublin Blvd #800, Hill, CA 94568, Dubai
                </div>
              </div>
              <div className="comman-row">
                <div className="left-icon">
                  <img src={assetImages.MailIcon} alt="HomeIcon" />
                </div>
                <a href="mailto:artsmily@gmail.com" title="artsmily@gmail.com">
                  artsmily@gmail.com
                </a>
              </div>
              <div className="comman-row">
                <div className="left-icon">
                  <img src={assetImages.PhoneIcon} alt="HomeIcon" />
                </div>
                <div className="right-side">
                  <a href="tel:+91 9998614785">+91 9998614785</a>
                  <a href="tel:+91 9998745215">+91 9998745215</a>
                </div>
              </div>
            </Box>
            <Box className="map-box"></Box>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
