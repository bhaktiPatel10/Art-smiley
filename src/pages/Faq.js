import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import Banner from "../components/Banner";

const Faq = () => {
  const BreadCrumb = {
    defaultPage: "Home",
    currentPage: "Your questions answered",
  };
  return (
    <>
      <Banner bannerTitle="FAQ" BreadCrumb={BreadCrumb} />
      <div className="faq-section-main">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <div className="gray-box-main">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      For Artist
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      for Curator
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      for Affiliate
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="for-buyer"
                      data-bs-toggle="tab"
                      data-bs-target="#for-buyer-pane"
                      type="button"
                      role="tab"
                      aria-controls="for-buyer-pane"
                      aria-selected="false"
                    >
                      for BUYER
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="for-galleries"
                      data-bs-toggle="tab"
                      data-bs-target="#for-galleries-pane"
                      type="button"
                      role="tab"
                      aria-controls="for-galleries-pane"
                      aria-selected="false"
                    >
                      for galleries
                    </button>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  {/* First-Tab */}
                  <div className="main-box-area-faq">
                    <div className="number-of-questions">1</div>
                    <div className="right-side-box-main">
                      {/* first-question */}
                      <Accordion className="accordian-panal-main">
                        <AccordionSummary
                          expandIcon={
                            <i className="fa-solid fa-plus"></i>
                          }
                        >
                          <div className="heading-panal">What is Webflow and why is it the best website builder?</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        </AccordionDetails>
                      </Accordion>
                      {/* second-question */}
                      <Accordion className="accordian-panal-main">
                        <AccordionSummary
                          expandIcon={
                            <i className="fa-solid fa-plus"></i>
                          }
                        >
                          <div className="heading-panal">What is your favorite template from BRIX Templates?</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        </AccordionDetails>
                      </Accordion>
                      {/* third-question */}
                      <Accordion className="accordian-panal-main">
                        <AccordionSummary
                          expandIcon={
                            <i className="fa-solid fa-plus"></i>
                          }
                        >
                          <div className="heading-panal">How do you clone a template from the Showcase?</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        </AccordionDetails>
                      </Accordion>
                      {/* Fourth-question */}
                      <Accordion className="accordian-panal-main">
                        <AccordionSummary
                          expandIcon={
                            <i className="fa-solid fa-plus"></i>
                          }
                        >
                          <div className="heading-panal">Why is BRIX Templates the best Webflow agency?</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        </AccordionDetails>
                      </Accordion>
                      
                      <Accordion className="accordian-panal-main">
                        <AccordionSummary
                          expandIcon={
                            <i className="fa-solid fa-plus"></i>
                          }
                        >
                          <div className="heading-panal">How do you integrate Jetboost with Webflow?</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion className="accordian-panal-main">
                        <AccordionSummary
                          expandIcon={
                            <i className="fa-solid fa-plus"></i>
                          }
                        >
                          <div className="heading-panal">Are the artworks available as prints?</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <p>Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.</p>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  2
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex="0"
                >
                  3
                </div>
                <div
                  className="tab-pane fade"
                  id="for-buyer-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex="0"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="for-galleries-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabIndex="0"
                >
                  5
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Faq;
