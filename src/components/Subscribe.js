import { Container, Grid } from '@mui/material'
import React from 'react'
import assetImages from '../constant/enum'

const Subscribe = () => {
  return (
    <>
        <section className='subscribe-section-main'>
            <Container maxWidth='xl'>
                <Grid container spacing={2} className="align-center">
                    <Grid item xs={12} md={6}>
                        <div className='left-side-box'>
                            <img src={assetImages.SubscribeEmail} alt="img" />
                            <div className='text-title'>Subscribe to the art smiley <br/> newsletter</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='email-input'>
                            <div className='email-id'>
                                <input type="text" placeholder='Please enter your mail address' />
                            </div>
                            <button className='subscribe-btn'>Subscribe</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    </>
  )
}

export default Subscribe