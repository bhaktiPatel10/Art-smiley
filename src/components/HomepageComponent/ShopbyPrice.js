import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import assetImages from "../../constant/enum";
import Slider from "react-slick";

const ShopbyPrice = () => {
  const pricebyRange = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:1100,
        settings:{
          slidesToShow:2,
          slidesToScroll:1
        }
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
      <section className="shop-by-price-section">
        <Container maxWidth="xl">
          <Grid container spacing={2} className="price-range-main-row">
            <Grid item xs={12} md={4}>
              <Box className="left-side-price-box">
                <div className="heading-main">
                  <img src={assetImages.HeadingAbovePart} alt="Img" />
                  <h2 className="comman-text">Shop by price</h2>
                </div>
                <p>
                  Discover the world through original
                  <br /> paintings for sale
                </p>
                <button className="comman-btn">Explore</button>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Slider {...settings}>
                {pricebyRange.map((item, i) => (
                  <div item={item} key={i} className="price-rang-main-box">
                    <div className="img-box">
                      <img src={assetImages.RangeBox} alt="range-box" />
                    </div>
                    <div className="price-range-text">
                      <div className="price-text">Up to $ 50,000</div>
                      <div className="play-btn">
                        <img src={assetImages.PlayBtn} alt="img" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ShopbyPrice;
