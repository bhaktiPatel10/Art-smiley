import { Container } from '@mui/material'
import React from 'react';
import Slider from "react-slick";
import assetImages from '../../constant/enum'
import ProductCol from '../ProductCol';

const RecentlyView = () => {
    const popular = [1,2,3,4,5,6,7,8,9]
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
          <section className='mostpopular-section'>
              <Container maxWidth='xl'>
                  <div className='heading-main'>
                      <img src={assetImages.HeadingAbovePart} alt="Img" />
                      <h2 className='comman-text'>Recenty viewed</h2>    
                  </div>
                  <div className='shoop-cate-gory-slider'>
                  <Slider {...settings}>
                      {popular.map((item, i) => (
                          <ProductCol key={i} item={item} />
                      ))}
                  </Slider>
                </div>
              </Container>
          </section>
      </>
    )
}

export default RecentlyView