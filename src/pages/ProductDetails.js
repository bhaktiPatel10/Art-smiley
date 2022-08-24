import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import ProductSlider from "../components/ProductSlider";
import assetImages from "../constant/enum";
import ArtistCard from "../components/ArtistCard";
import AskQuestion from "../components/Modals/AskQuestion";


const ProductDetails = () => {
  const [open, setOpen] = useState(false)
  const modalOpen = () => setOpen(true)
  const modalClose = () => setOpen(false)
  const artist = [1,2,3,4]
  return (
    <>
      {/* First Section */}
      <div className="first-product-details-sec">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <div className="grid-in-slider-for-main">
                <ProductSlider />
                <div className="view-in-row">
                  <div className="gray-box">
                    <img src={assetImages.ViewInRoom} alt="img" />
                  </div>
                  <div className="text-room">View in a room</div>
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
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
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
                  <span className="left-side-heading">Framing </span>
                  <span className="right-side-text">
                    This artwork is not framed
                  </span>
                </div>
                <div className="comman-row">
                  <span className="left-side-heading">Delivery Charges</span>
                  <span className="right-side-text">$250</span>
                </div>
              </div>
              <div className="customise-and-print">
                <span className="comman-labal">Customization</span>
                <span className="comman-labal">Prints</span>
              </div>
              <div className="offer-badge">
                <img src={assetImages.OfferIcon} alt="img" />
                <div className="comman-labal">Save Extra</div>
                <div className="with-offer">with 3 Offers</div>
              </div>
              <div className="button-box">
                <button className="add-to-basket-btn comman-btn-full" onClick={modalOpen}>
                  Add To Basket
                </button>
                <button className="comman-btn-full">
                  Rent From $12,0220/Month
                </button>
                <button className="comman-btn-full">Make An Offer</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Second Section */}
      <div className="second-product-details-sec">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <div className="comman-labal">Description</div>
              <p>
                As an artist currently i have realistic approach to formation,
                perspectives and impressionist to colors, their harmony and
                combination. In my artworks i try to catch feelings impressively
                from today and past. Especially themes of love, compassion,
                beauty, vintage and different cultures.
              </p>
              <p>
                Free of all thoughts and protocol, his macro photographic
                approach covers both the making of images and the taking of
                photos focusing on matter and light. This technique allows him
                to create palettes of patterns and colors which then serve as
                primary elements for the realization of my photographic or
                scanographic compositions.{" "}
              </p>
              <p>
                He is mainly interested in abstraction, whether geometric or
                lyrical. To the sensitivity that the play of shapes and colors
                can produce on the individual. These different abstractions
                (movements or artistic schools of the 20th century) are well
                established in painting or sculpture but are still only emerging
                in contemporary photography. Photography has already turned the
                world of painting upside down, upon its arrival, taking over the
                representation of reality.
              </p>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="frame-grid">
                Choose Frame
                <button className="comman-btn">Choose a frame</button>
              </div>
              <div className="features-box-main">
                <div className="comman-row">
                  <div className="labal-text">Color:</div>
                  <div className="labal-value">Blue</div>
                </div>
                <div className="comman-row">
                  <div className="labal-text">Weight :</div>
                  <div className="labal-value">2.5 kg</div>
                </div>
                <div className="comman-row">
                  <div className="labal-text">Orientation :</div>
                  <div className="labal-value">
                    <img src={assetImages.Orientation} alt="img" />
                  </div>
                </div>
                <div className="comman-row">
                  <div className="labal-text">SKU number :</div>
                  <div className="labal-value">200451</div>
                </div>
                <div className="comman-row">
                  <div className="labal-text">Wall Mounted :</div>
                  <div className="labal-value">Yes</div>
                </div>
                <div className="comman-row">
                  <div className="labal-text">Categories :</div>
                  <div className="labal-value">Figurative, Animal</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Third Section */}
      <div className="third-product-details-sec">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className="box-area-main">
                <div className="white-circle-main">
                  <img src={assetImages.ShipingCars} alt="img" />
                </div>
                <div className="text-box">
                  <div className="title-area">Safe Shipping Globally</div>
                  <p>Our healthcare partner with your needs about health</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="box-area-main">
                <div className="white-circle-main">
                  <img src={assetImages.ReturnIcon} alt="img" />
                </div>
                <div className="text-box">
                  <div className="title-area">Free Return</div>
                  <p>Don’t care too much about adminly take 2,5% of it</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="box-area-main">
                <div className="white-circle-main">
                  <img src={assetImages.SecureIcon} alt="img" />
                </div>
                <div className="text-box">
                  <div className="title-area">Secure</div>
                  <p>
                    Medical teenager of Xehatoo’s partner are professional and.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Fourth Section-tab-section */}
      <div className="fourth-product-details-sec">
        <Container maxWidth="xl">
          Refund Policy
        </Container>
      </div>
      {/* Fifth Section follower */}
      <div className="artist-in-detail-page">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className="left-side-Box">
                <div className="artist-pic">
                  <img src={assetImages.ArtistPicOne} alt="img" />
                </div>
                <div className="inner-right-box">
                  <div className="artist-name">Aflie Cooper</div>
                  <div className="review-star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <div className="artist-link">
                    <div className="link">Ask Question</div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={8} className="right-side-border">
                <div className="right-side-box">
                    <div className="first-row-main">
                        <div className="left-side-location">
                            <i className="fa-solid fa-location-dot"></i>
                            Berlin | Germany
                        </div>
                        <div className="right-side-btn">
                            <button className="comman-btn">Follow</button>
                        </div>
                    </div>
                    <p>As an artist currently i have realistic approach to formation, perspectives and impressionist to colors, their harmony and combination. In my artworks i try to catch feelings impressively from today and past. Especially themes of love, compassion, beauty, vintage and different cultures.Especially themes of love, compassion, beauty, vintage and different cultures.</p>
                </div>
            </Grid>
          </Grid>
          <div className="other-artist-box">
              <div className="heading-text">Other Artist</div>
              <div className="artist-card-row">
                  {artist.map((item, i) => (
                    <ArtistCard item={item} key={i} />
                  ))}
              </div>
          </div>
          <div className="tag-row-box">
            <div className="heading-text">Tags</div>
            <div className="tags-row-main">
                <span className="tag-text">#summer</span>
                <span className="tag-text">#sunset</span>
                <span className="tag-text">#cowparsley</span>
                <span className="tag-text">#evening</span>
                <span className="tag-text">#flowers</span>
                <span className="tag-text">#woods</span>
                <span className="tag-text">#meadow</span>
                <span className="tag-text">#flowers</span>
                <span className="tag-text">#woods</span>
                <span className="tag-text">#meadow</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ---------<Button onClick={modalOpen}>Open modal</Button>--------- */}

      {/* Ask Question Modal */}
      <AskQuestion 
        modalopen={open}
        modalClose={modalClose}
      />
      
      
    </>
  );
};

export default ProductDetails;
