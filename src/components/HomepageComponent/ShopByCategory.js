import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import assetImages from "../../constant/enum";

const ShopByCategory = () => {
  const category = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      <section className="shop-by-category-main">
        <Container maxWidth="xl">
          <div className="heading-main">
            <img src={assetImages.HeadingAbovePart} alt="Img" />
            <h2 className="comman-text">Shop By Category</h2>
          </div>
          <div className="shoop-cate-gory-slider">
            <Slider {...settings}>
              {category.map((item, i) => (
                <div item={item} key={i} className="category-image">
                  <img src={assetImages.CategoryPainting} alt="img" />
                  <div className="category-name">Artworks</div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShopByCategory;
