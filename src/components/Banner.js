import { Container } from '@mui/material'
import React from 'react'

const Banner = (props) => {
  return (
    <>
        <section className='banner-area'>
            <Container maxWidth="lg">
                <div className='inner-box-area'>
                    <h1 className='banner-title'>{props.bannerTitle}</h1>
                    <div className='breadCrumbmain'>
                        <div className='default-page'>{props.BreadCrumb.defaultPage}</div> /
                        <div className='default-page'>{props.BreadCrumb.subPage}</div> 
                        <div className='current-page'>{props.BreadCrumb.currentPage}</div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Banner