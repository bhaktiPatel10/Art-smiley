import React from "react";
import { Container, Grid } from "@mui/material";
import assetImages from "../constant/enum";
import ProductSlider from "../components/ProductSlider";

const RentDetails = () => {
  return (
    <>
      {/* First Section */}
      <div className="first-product-details-sec rent-details-first-sec">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <div className="grid-in-slider-for-main">
                <ProductSlider />
                <div className="grid-col-boxed-area">
                    <div className="first-grid-col-main">
                        <div className="img-row">
                            <img src={assetImages.RentIcon} alt="img" />
                        </div>
                        <div className="text-title">Rental</div>
                        <div className="down-arrow"><i className="fa-solid fa-sort-down"></i></div>
                    </div>
                    <div className="first-grid-col-main">
                        <div className="img-row">
                            <img src={assetImages.fourteenDayReturn} alt="img" />
                        </div>
                        <div className="text-title">14 DAYS FREE RETURNS</div>
                        <div className="down-arrow"><i className="fa-solid fa-sort-down"></i></div>
                    </div>
                    <div className="first-grid-col-main">
                        <div className="img-row">
                            <img src={assetImages.DeliveryTruck} alt="img" />
                        </div>
                        <div className="text-title">SHIPPING INFO</div>
                        <div className="down-arrow"><i className="fa-solid fa-sort-down"></i></div>
                    </div>
                    <div className="first-grid-col-main">
                        <div className="img-row">
                            <img src={assetImages.NeedSomeHelp} alt="img" />
                        </div> 
                        <div className="text-title">NEED SOME HELP?</div>
                        <div className="down-arrow"><i className="fa-solid fa-sort-down"></i></div>
                    </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="padding-left">
              <div className="product-title-main">See The Light of sea</div>
              <div className="author-name-with-location">
                by Acrymx, France -2022
              </div>
              <div className="pricing-row">
                <div className="left-side-price">
                  <div className="price-block">
                    <span className="price">$ 20,2500</span>
                    <span className="in-stock">In Stock</span>
                  </div>
                  <div className="review-star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <div className="right-side-price">
                  <div className="comman-circle">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
                <div className="product-description-box">
                    <div className="comman-row">
                        <span className="left-side-heading">Original Artwork</span>
                        <span className="right-side-text">
                            Painting, Acrylic on Canvas
                        </span>
                    </div>
                    <div className="comman-row">
                        <span className="left-side-heading">Dimension</span>
                        <span className="right-side-text">97x130 cm</span>
                    </div>
                    <div className="comman-row">
                        <span className="left-side-heading">Rent </span>
                        <span className="right-side-text">Per month</span>
                    </div>
                    <div className="comman-row">
                        <span className="left-side-heading">Damage Waiver</span>
                        <span className="right-side-text">
                            <span className="remove-btn">-Remove</span>
                            $250
                        </span>
                    </div>
                </div>
                <div className="quantity-row-main">
                    <span className="left-side-heading">QTY</span>
                    <span className="right-side-text">1</span>
                </div>
                <div className="ships-for-uk">
                    <div className="shiping-text">Ships from United Kindgdom on or before Friday, 20 May 2022</div>
                </div>
                <div className="total-text">Total</div>
                <div className="total-box-main">
                    <div className="comman-row-total">
                        <div className="left-side-text">Subtotal</div>
                        <div className="right-side-price">$32.00</div>
                    </div>
                    <div className="inner-sub-box">
                        <div className="shipping-row">
                            <div className="left-side-box">
                                Shipping
                                <span className="small-text">Free Shipping</span>
                            </div>
                            <div className="right-side-price">$00.00</div>
                        </div>
                        <div className="shipping-row">
                            <div className="left-side-box">
                                Packaging
                                <span className="small-text">Free Basic Packaging</span>
                            </div>
                            <div className="right-side-price">$00.00</div>
                        </div>
                    </div>
                    <div className="total-price-box-main">
                        <div className="left-side-box">
                            Total
                            <span className="small-text">Free Basic Packaging</span>
                        </div>
                        <div className="right-side-price">$32.00</div>
                    </div>
                </div>
              <div className="button-box">
                <button className="add-to-basket-btn comman-btn-full">
                    Continue To Checkout
                </button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Second Section */}
      <div className="second-section-for-rent-details">
        <Container maxWidth='xl'>
            <div className="gray-box-main">
                <div className="text-descriptions">
                    <span className="title-text-main">When Provided By Other Users:</span>
                    In some cases, your email address and other information may be provided to us by 
                    other users of the Services
                </div>  
                <div className="text-descriptions">
                    <div className="title-text-main">HOW DOES ARTSMILEY USE YOUR INFORMATION?</div>
                    We may use the information we collect for various purposes, inter-alia, those described below:
                </div>    
                <div className="listing-bullet">
                    <ul>
                        <li>Personalize and improve the Services</li>
                        <li>customize the Services and provide advertisement, content or features that match.</li>
                        <li>allow our users to set up a user account and profile</li>
                        <li>communicate with you about or fulfill your requests for certain products, services</li>
                        <li>send you notices, updates and other administrative message</li>
                        <li>process transactions and send you related information</li>
                        <li>operate sweepstakes, contests or giveaways</li>
                        <li>link or combine with information we get from others to help provide you with</li>
                        <li>detect, investigate and/or prevent fraudulent, unauthorized or illegal activity</li>
                        <li>analyze and monitor how users utilize the websites and Services and</li>
                        <li>carry out other purpose described in this Privacy Policy</li>
                    </ul>
                </div>
            </div>     
        </Container> 
      </div>
     
    </>
  );
};

export default RentDetails;
