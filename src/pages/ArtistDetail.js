import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import assetImages from "../constant/enum";
import ProductCol from "../components/ProductCol";
import { Box } from "@mui/system";
import ArtistFollowCard from '../components/ArtistFollowCard'

const ArtistDetail = () => {
  const product = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const artist = [1,2,3,4];
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 50000]);
  const [heightFilter, setHeightFilter] = useState([0, 500]);
  const [widthFilter, setWidthFilter] = useState([0, 500]);
  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const price = (event, priceValue) => {
    setPriceFilter(priceValue);
  };

  const heightMenu = (event, heightValues) => {
    setHeightFilter(heightValues);
  };
  const widthMenu = (event, widthValues) => {
    setWidthFilter(widthValues);
  };
  return (
    <>
      <div className="artist-detail-banner">
        <img src={assetImages.ArtistBanner} alt="img" />
      </div>
      {/* artist-second-section */}
      <div className="artist-detail-second-sec">
        <Container maxWidth="xl">
          <div className="artist-inner-box">
            <div className="first-img-box">
              <img src={assetImages.ArtistProfilePic} alt="img" />
            </div>
            <div className="title-text">Moragn Wave</div>
            <div className="number-grid-box">
              <div className="comman-col">
                <div className="numbers">12</div>
                <div className="sub-text">Arts</div>
              </div>
              <div className="comman-col center-col">
                <div className="numbers">2.5M</div>
                <div className="sub-text">Followers</div>
              </div>
              <div className="comman-col">
                <div className="numbers">9.6K</div>
                <div className="sub-text">Sold</div>
              </div>
            </div>
            <div className="btn-box-share">
              <button className="follow-artist">
                <img src={assetImages.FollowerArtist} alt="img" />
                Follow this artist
              </button>
              <button className="share-btn">
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* artist-third-section */}
      <div className="artist-detail-third-sec">
        <Container maxWidth="xl">
          <div className="small-heading">About Artist</div>
          <p>
            Oil Painting Artist. Born in December. Lives in Istanbul, Turkey.
            www.agokhanyasar.com I got basic course of painting art from an
            institution of Istanbul Municipality then continued working at my
            home office. I started my online exhibition on several art
            platforms. I got a few awards from online painting art contests of
            which the certifications are present. And in this year October , i
            am a participant artist of Florence Biennale in Italy, exhibiting 2
            of my artworks named ''Hello'' and ''The Mountain''
          </p>
          <div className="small-heading">Professional Details</div>
          <p>
            As an artist currently i have realistic approach to formation,
            perspectives and impressionist to colors, their harmony and
            combination. In my artworks i try to catch feelings impressively
            from today and past. Especially themes of love, compassion, beauty,
            vintage and different cultures.
          </p>
        </Container>
      </div>
      {/* Artist-Fourth-Section */}
      <div className="artist-detail-fourth-sec">
        <Container maxWidth="xl">
          <div className="comman-heading">Artworks</div>
        </Container>
      </div>
      {/* Section For Listing */}
      <div className="product-listing-page artist-for-listing">
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <div className="filter-menu-main">
                {/* Size */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">Size</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="size-grid-main">
                      <FormControlLabel control={<Checkbox />} label="S" />
                      <FormControlLabel control={<Checkbox />} label="M" />
                      <FormControlLabel control={<Checkbox />} label="L" />
                      <FormControlLabel control={<Checkbox />} label="XL" />
                      <FormControlLabel control={<Checkbox />} label="XXL" />
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Type */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">Type</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="radio-btns-filter">
                      <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                        <FormControlLabel
                          value="Assemblage"
                          control={<Radio />}
                          label="Assemblage"
                        />
                        <FormControlLabel
                          value="Bust"
                          control={<Radio />}
                          label="Bust"
                        />
                        <FormControlLabel
                          value="Freestanding"
                          control={<Radio />}
                          label="Freestanding"
                        />
                        <FormControlLabel
                          value="Installation"
                          control={<Radio />}
                          label="Installation"
                        />
                        <FormControlLabel
                          value="Lights"
                          control={<Radio />}
                          label="Lights"
                        />
                      </RadioGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Category */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">Category</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="radio-btns-filter">
                      <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                        <FormControlLabel
                          value="Art"
                          control={<Radio />}
                          label="Art"
                        />
                        <FormControlLabel
                          value="Photography"
                          control={<Radio />}
                          label="Photography"
                        />
                        <FormControlLabel
                          value="Sculptures"
                          control={<Radio />}
                          label="Sculptures"
                        />
                        <FormControlLabel
                          value="Paintings"
                          control={<Radio />}
                          label="Paintings"
                        />
                        <FormControlLabel
                          value="Art Prints"
                          control={<Radio />}
                          label="Art Prints"
                        />
                      </RadioGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Price */}
                <div className="simple-panal">
                  <div className="heading-panal">Price</div>
                  <div className="range-slider-main">
                    <Slider
                      value={priceFilter}
                      onChange={price}
                      valueLabelDisplay="auto"
                      min={0}
                      max={50000}
                    />
                    <div className="pricing-value-text">
                      <div className="comman-col">$ {priceFilter[0]}</div>
                      <div className="comman-col">$ {priceFilter[1]}</div>
                    </div>
                  </div>
                </div>
                {/* Height */}
                <div className="simple-panal">
                  <div className="heading-panal">Height</div>
                  <div className="range-slider-main">
                    <Slider
                      value={heightFilter}
                      onChange={heightMenu}
                      valueLabelDisplay="auto"
                      min={0}
                      max={500}
                    />
                    <div className="pricing-value-text">
                      <div className="comman-col">{heightFilter[0]}</div>
                      <div className="comman-col">{heightFilter[1]} +cm</div>
                    </div>
                  </div>
                </div>
                {/* Width */}
                <div className="simple-panal">
                  <div className="heading-panal">Width</div>
                  <div className="range-slider-main">
                    <Slider
                      value={widthFilter}
                      onChange={widthMenu}
                      valueLabelDisplay="auto"
                      min={0}
                      max={500}
                    />
                    <div className="pricing-value-text">
                      <div className="comman-col">{widthFilter[0]}</div>
                      <div className="comman-col">{widthFilter[1]} +cm</div>
                    </div>
                  </div>
                </div>
                {/* Style */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">Style</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="radio-btns-filter">
                      <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                        <FormControlLabel
                          value="Abstract"
                          control={<Radio />}
                          label="Abstract"
                        />
                        <FormControlLabel
                          value="Marble"
                          control={<Radio />}
                          label="Marble"
                        />
                        <FormControlLabel
                          value="Art Deco"
                          control={<Radio />}
                          label="Art Deco"
                        />
                        <FormControlLabel
                          value="Cartoon"
                          control={<Radio />}
                          label="Cartoon"
                        />
                        <FormControlLabel
                          value="Conceptual"
                          control={<Radio />}
                          label="Conceptual"
                        />
                      </RadioGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Orientation */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">ORIENTATION</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="orientation-area-main">
                      <FormControlLabel
                        control={<Checkbox />}
                        label="portrait"
                        className="portrait"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="medium"
                        className="medium"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="wide"
                        className="wide"
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Artists */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">Artists</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="radio-btns-filter">
                      <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                        <FormControlLabel
                          value="John David"
                          control={<Radio />}
                          label="John David"
                        />
                        <FormControlLabel
                          value="Warner"
                          control={<Radio />}
                          label="Warner"
                        />
                        <FormControlLabel
                          value="Jonty Rhodes"
                          control={<Radio />}
                          label="Jonty Rhodes"
                        />
                        <FormControlLabel
                          value="David Miller"
                          control={<Radio />}
                          label="David Miller"
                        />
                        <FormControlLabel
                          value="Chris Morris"
                          control={<Radio />}
                          label="Chris Morris"
                        />
                      </RadioGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* Country */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary
                    expandIcon={<i className="fa-solid fa-angle-down"></i>}
                  >
                    <div className="heading-panal">country</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="radio-btns-filter">
                      <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                        <FormControlLabel
                          value="Albania"
                          control={<Radio />}
                          label="Albania"
                        />
                        <FormControlLabel
                          value="Australia"
                          control={<Radio />}
                          label="Australia"
                        />
                        <FormControlLabel
                          value="Belarus"
                          control={<Radio />}
                          label="Belarus"
                        />
                        <FormControlLabel
                          value="Dubai"
                          control={<Radio />}
                          label="Dubai"
                        />
                        <FormControlLabel
                          value="India"
                          control={<Radio />}
                          label="India"
                        />
                      </RadioGroup>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className="search-bar-main">
                <div className="search-input-box">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="search-text-dropdown">
                  <div className="title-text">Sort by</div>
                  <Select value={sort} onChange={handleChange} autoWidth>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Best Selling"}>Best Selling</MenuItem>
                    <MenuItem value={21}>2</MenuItem>
                    <MenuItem value={22}>3</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="product-grid-list-main">
                {product.map((item, i) => (
                  <div className="product-grid-col" item={item} key={i}>
                    <ProductCol />
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Latest Work of Artist */}
      <div className="shop-by-price-section offers-section latest-work-artist">
        <Container maxWidth="xl">
          <Grid container spacing={2} className="price-range-main-row">
            <Grid item xs={12} md={4}>
              <Box className="left-side-price-box">
                <div className="heading-main">
                  <img src={assetImages.HeadingAbovePart} alt="Img" />
                  <h2 className="comman-text">Latest artworks</h2>
                </div>
                <p>
                  Discover the world through original
                  <br /> paintings for sale
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              sdsd
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Other Artist Work */}
      <div className="other-artist-work-details">
          <Container maxWidth='xl'>
                <div className='heading-main'>
                    <img src={assetImages.HeadingAbovePart} alt="Img" />
                    <h2 className='comman-text'>Other Artist</h2>    
                </div>
                <div className="suggested-followers">
                    {artist.map((i) => (
                        <div key={i} className="follower-col">
                            <ArtistFollowCard />
                        </div>
                    ))}
                </div>
          </Container>
      </div>
    </>
  );
};

export default ArtistDetail;
