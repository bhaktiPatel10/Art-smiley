import {
  Container,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import ArtistFollowCard from "../components/ArtistFollowCard";
import Banner from "../components/Banner";

const ArtistList = () => {
  const BreadCrumb = {
    defaultPage: "Home",
    currentPage: "Artist List",
  };
  const artistFollow = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
      <Banner bannerTitle="Artist List" BreadCrumb={BreadCrumb} />
      <Container maxWidth="xl">
        <div className="artist-search-bar">
          <div className="comman-heading">Our Artist</div>
          <div className="search-input-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </Container>
      <div className="artist-list-second-sec">
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <div className="filter-menu-main">
                 {/* Category */}
                 <Accordion className="accordian-panal-main">
                  <AccordionSummary expandIcon={<i className="fa-solid fa-angle-down"></i>}>
                    <div className="heading-panal">Category</div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <div className="radio-btns-filter">
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                          <FormControlLabel
                            value="Painters"
                            control={<Radio />}
                            label="Painters"
                          />
                          <FormControlLabel
                            value="Sculptors"
                            control={<Radio />}
                            label="Sculptors"
                          />
                          <FormControlLabel
                            value="Photographers"
                            control={<Radio />}
                            label="Photographers"
                          />
                          <FormControlLabel
                            value="Illustrators"
                            control={<Radio />}
                            label="Illustrators"
                          />
                          <FormControlLabel
                            value="Printmakers"
                            control={<Radio />}
                            label="Printmakers"
                          />
                          <FormControlLabel
                            value="Digital Artists"
                            control={<Radio />}
                            label="Digital Artists"
                          />
                          <FormControlLabel
                            value="Collage Artists"
                            control={<Radio />}
                            label="Collage Artists"
                          />
                          <FormControlLabel
                            value="Textile Artists"
                            control={<Radio />}
                            label="Textile Artists"
                          />
                          
                          <FormControlLabel
                            value="Designers"
                            control={<Radio />}
                            label="Designers"
                          />
                        </RadioGroup>
                      </div>
                  </AccordionDetails>
                </Accordion>
                 {/* filters */}
                 <Accordion className="accordian-panal-main">
                  <AccordionSummary expandIcon={<i className="fa-solid fa-angle-down"></i>}>
                    <div className="heading-panal">filters</div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <div className="radio-btns-filter">
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                          <FormControlLabel
                            value="proffesional Artist"
                            control={<Radio />}
                            label="proffesional Artist"
                          />
                          <FormControlLabel
                            value="Certified Artist"
                            control={<Radio />}
                            label="Certified Artist"
                          />
                          <FormControlLabel
                            value="Artist Presented by a Gallery"
                            control={<Radio />}
                            label="Artist Presented by a Gallery"
                          />
                          <FormControlLabel
                            value="Illustrators"
                            control={<Radio />}
                            label="Illustrators"
                          />
                        </RadioGroup>
                      </div>
                  </AccordionDetails>
                </Accordion>
                {/* Nationalities */}
                <Accordion className="accordian-panal-main">
                  <AccordionSummary expandIcon={<i className="fa-solid fa-angle-down"></i>}>
                    <div className="heading-panal">nationalities</div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <div className="radio-btns-filter">
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                          <FormControlLabel
                            value="wolrdwide"
                            control={<Radio />}
                            label="wolrdwide"
                          />
                          <FormControlLabel
                            value="india"
                            control={<Radio />}
                            label="india"
                          />
                          <FormControlLabel
                            value="choose"
                            control={<Radio />}
                            label="choose"
                          />
                        </RadioGroup>
                      </div>
                  </AccordionDetails>
                </Accordion>               
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
                <div className="artist-grid-list">
                {artistFollow.map((item, i) =>(
                    <div key={i} item={item}>
                        <ArtistFollowCard />
                    </div>
                ))}
                </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ArtistList;
