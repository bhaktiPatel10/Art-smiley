import { Container } from "@mui/material";
import React from "react";
import assetImages from "../../constant/enum";
import Slider from "react-slick";

const FeaturedArtist = () => {
  const featureArtist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
      <section className="featured-section-home">
        <Container maxWidth="xl">
          <div className="heading-main">
            <img src={assetImages.HeadingAbovePart} alt="Img" />
            <h2 className="comman-text">Featured Artists</h2>
          </div>
          <Slider {...settings}>
            {featureArtist.map((item, i) => (
                <div item={item} key={i} className="feature-box-main">
                    <div className="feature-box-above">
                        <div className="feature-img">
                            <img src={assetImages.FeatureBanner} alt="img" />
                        </div>
                        <div className="main-painting-imgs">
                            <div className="grid-cols">
                                <img src={assetImages.Artist1} alt="img" />
                            </div>
                            <div className="grid-cols">
                                <img src={assetImages.Artist2} alt="img" />
                            </div>
                            <div className="grid-cols">
                                <img src={assetImages.Artist3} alt="img" />
                            </div>
                        </div>
                        <div className="profile-pic">
                            <img src={assetImages.ArtistPic} alt="img" />
                        </div>
                    </div>
                    <div className="feature-box-bottom">
                        <div className="follower-name">John David</div>
                        <button className="comman-btn">Follow</button>
                    </div>
                </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default FeaturedArtist;
