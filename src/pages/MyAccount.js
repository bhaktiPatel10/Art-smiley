import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import assetImages from '../constant/enum'

const MyAccount = () => {
  return (
    <>
        <div className="faq-section-main my-account-section-main">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <div className="gray-box-main">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      my profile
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
                      my address
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
                     my inquiry
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
                     my orders
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
                      followed artist
                    </button>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className="tab-content" id="myTabContent">
                {/* My-profile */}
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  
                    <div className='gray-box-main-profile'>
                        <div className='edit-icon'>
                            <img src={assetImages.EditIcon} alt="img" />
                        </div>
                        <div className='left-side-profile-upload'>
                            <div className='img-area-main'>
                                <img src={assetImages.ProfileImg} alt='img' />
                            </div>
                            <Button variant="contained" component="label"> 
                                Change Image
                                <input type="file" hidden />
                            </Button>
                        </div>
                        <div className='right-side-profile'>
                            <div className='input-row'>
                                <div className='labal-text'>Full Name*</div>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className='input-row'>
                                <div className='labal-text'>UserName</div>
                                <input type="text" placeholder="john6546" />
                            </div>
                            <div className='input-row'>
                                <div className='labal-text'>Email Address*</div>
                                <input type="text" placeholder="johndoe@gmail.com" />
                            </div>
                            <div className='inpit-row'>
                                <div className='labal-text'>Password*</div>
                                <input type="text" placeholder="xxxxxxxx" />
                                <div className='change-password'>Change Password</div>
                            </div>
                            <div className='btn-row-main'>
                                <button className='comman-btn'>Save</button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* My-address */}
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
  )
}

export default MyAccount