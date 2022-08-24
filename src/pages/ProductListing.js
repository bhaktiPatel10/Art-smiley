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
import Banner from "../components/Banner";
import ProductCol from "../components/ProductCol";

const ProductListing = () => {
  const BreadCrumb = {
    defaultPage: "Home",
    subPage: "Category",
    currentPage: "ArtWorks",
  };
  const product = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 50000]);
  const [heightFilter, setHeightFilter] = useState([0, 500])
  const [widthFilter, setWidthFilter] = useState([0, 500])
  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const price = (event, priceValue) => {
    setPriceFilter(priceValue);
  };
  
  const heightMenu = (event, heightValues) => {
    setHeightFilter(heightValues)
  }
  const widthMenu = (event, widthValues) => {
    setWidthFilter(widthValues)
  }

  return (
    <>
      <Banner bannerTitle="Artworks" BreadCrumb={BreadCrumb} />
      {/* Section For Listing */}
      <section className="product-listing-page">
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
                      <FormControlLabel control={<Checkbox />} label="portrait" className="portrait" />
                      <FormControlLabel control={<Checkbox />} label="medium" className="medium"  />
                      <FormControlLabel control={<Checkbox />} label="wide" className="wide" />
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
      </section>
    </>
  );
};

export default ProductListing;
