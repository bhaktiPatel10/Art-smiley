import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'

const Offer = () => {
  return (
    <>
    <section className="shop-by-price-section offers-section">
        <Container maxWidth="xl">
          <Grid container spacing={2} className="price-range-main-row">
            <Grid item xs={12} md={4}>
                <Box className="left-side-price-box">
                  <div className='heading-main'>
                      <img src={assetImages.HeadingAbovePart} alt="Img" />
                      <h2 className='comman-text'>Offers</h2>    
                  </div>
                  <p>Discover the world through original<br/> paintings for sale</p>
                  <button className="comman-btn">Explore</button>
                </Box>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid  container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className='offer-card-box'>
                            <div className='left-side-percentage'>
                                Get up to <span>50%</span> off
                            </div>
                            <div className='offer-painting'>
                                <img src={assetImages.OfferPainting1} alt="img" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='offer-card-box'>
                            <div className='left-side-percentage'>
                                Get up to <span>20%</span> off
                            </div>
                            <div className='offer-painting'>
                                <img src={assetImages.OfferPainting2} alt="img" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Offer