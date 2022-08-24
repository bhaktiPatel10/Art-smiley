import { Container, Grid } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'

const Footer = () => {
  return (
      <>
        <footer className='footer-area-main'>
            <Container maxWidth='xl'>
              <Grid container spacing={4}>
                <Grid item lg={4} md={6}sm={12} className="comman-col">
                   <Grid container spacing={4}>
                      <Grid item lg={6} md={6} sm={6}>
                          <div className='footer-heading'>For Buyers</div>
                          <div className='link-footer'>Art Advisory Services</div>
                          <div className='link-footer'>Buyer FAQ</div>
                          <div className='link-footer'>Return Policy</div>
                          <div className='link-footer'>Testimonials</div>
                          <div className='link-footer'>Art Prints</div>
                          <div className='link-footer'>Curator’s Circle</div>
                          <div className='link-footer'>Catalog</div>
                          <div className='link-footer'>Gift Card</div>
                          <div className='link-footer'>Refer A Friend</div>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6}>
                          <div className='footer-heading'>For Artists</div>
                          <div className='link-footer'>Why Sell</div>
                          <div className='link-footer'>Artist Handbook</div>
                      </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={6}sm={12} className="comman-col">
                    <Grid container spacing={4}>
                      <Grid item lg={6} md={6} sm={6}>
                          <div className='footer-heading'>About Us</div>
                          <div className='link-footer'>About</div>
                          <div className='link-footer'>Press</div>
                          <div className='link-footer'>Careers</div>
                          <div className='link-footer'>Contact Us</div>
                          <div className='link-footer'>Blog</div>
                          <div className='link-footer'>Art Smiley</div>
                          <div className='link-footer'>Customer Care</div>
                          <div className='link-footer'>NFT</div>
                          <div className='link-footer'>Biz</div>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6}>
                          <div className='footer-heading'>Art Smiley</div>
                          <div className='link-footer'>Terms of Service</div>
                          <div className='link-footer'>Privacy Policy</div>
                          <div className='link-footer'>Copyright Policy</div>
                          <div className='link-footer'>Affiliate Program</div>
                          <div className='link-footer'>Accessibility</div>
                          <div className='link-footer'>Gift Card Terms</div>
                          <div className='link-footer'>Do Not Sell My Personal Information</div>
                          <div className='link-footer'>Sitemap</div>
                      </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={6}sm={12} className="comman-col">
                    <Grid container spacing={4}>
                      <Grid item lg={6} md={6} sm={6}>
                          <div className='footer-heading'>Top Categories</div>
                          <div className='link-footer'>Paintings</div>
                          <div className='link-footer'>Photography</div>
                          <div className='link-footer'>Sculpture</div>
                          <div className='link-footer'>Drawings</div>
                          <div className='link-footer'>Collage</div>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6}>
                          <div className='footer-heading'>
                              <img src={assetImages.CopyRightIcon} alt="copyright" />
                          </div>
                          <div className='paragraph-text'>Lorem Ipsum is simply dummy text of the printing</div>
                          <div className='paragraph-text'>All Rights Reserved</div>
                          <div className='card-strips-main'>
                            <img src={assetImages.CardStripe} alt="cardstrip" />
                          </div>
                          <div className='social-links'>
                            <a href='/' title='Instagram'>
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href='/' title='Linkedin'>
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href='/' title='Facebook'>
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href='/' title='twitter'>
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                          
                      </Grid> 
                    </Grid>
                </Grid>
              </Grid>
            </Container>
        </footer>
      </>
  )
}

export default Footer