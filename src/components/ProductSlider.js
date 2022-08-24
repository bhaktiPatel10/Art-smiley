import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import assetImages from "../constant/enum";


const ProductSlider = () => {
  const [nav1, SetNav1] = useState(null);
  const [nav2, SetNav2] = useState(null);
  const singleimg = [1,2,3,4,5,6,7]
  let slider1;
  let slider2;

  useEffect(() => {
    SetNav1(slider1);
    SetNav2(slider2);
  }, [slider1, slider2]);

  return (
    <>
      
        <div className="single-img-slide">
          <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
              {singleimg.map((i) => (
                <div key={i} className="single-img-main">
                    <img src={assetImages.SingleImg} alt="img" />
                </div>
              ))}
          </Slider>
        </div>
        <div className="nav-slider">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
             {singleimg.map((i) => (
                <div key={i} className="single-img-main">
                    <img src={assetImages.SingleImg} alt="img" />
                </div>
              ))}
          </Slider>
        </div>
     
    </>
  );
}; 

export default ProductSlider;
