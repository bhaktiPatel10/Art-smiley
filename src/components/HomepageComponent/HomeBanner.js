import { Container } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'

const HomeBanner = () => {
  return (
    <>
        <section className='home-banner-section'>
            <Container maxWidth='xl'>
                <div className='inner-box-main'>
                    <div className='left-side-box'>
                        <span className='first-heading'>Latest Collection</span>
                        <h1 className='home-banner-heading'>Original Artworks <br/>& Paintings</h1>
                        <div className='btn-row'>
                            <button className='comman-btn'>Buy Now</button>
                        </div>
                    </div> 
                    <div className='right-side-box'>
                        <img src={assetImages.HomePaintingBanner} alt="img" />
                    </div>
                </div>  
            </Container>
        </section> 
    </>
  )
}

export default HomeBanner