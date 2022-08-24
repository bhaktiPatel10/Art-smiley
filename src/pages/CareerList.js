import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Banner from "../components/Banner";

const CareerList = () => {
  const careerCards = [1,2,3,4,5,6,7,8,9]
  const BreadCrumb = {
    defaultPage: "Home",
    currentPage: "Career",
  };
  const [usertitle, setUserTitle] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const titleChange = (e) => {
    setUserTitle(e.target.value);
  };
  const locationChange = (e) => {
    setLocation(e.target.value);
  };
  const departmentChange = (e) => {
    setDepartment(e.target.value);
  };
  const experienceChange = (e) => {
    setExperience(e.target.value);
  };

  return (
    <>
      <Banner bannerTitle="Find Your Dream Job" BreadCrumb={BreadCrumb} />
      {/* Fillter-row-first */}
      <div className="carrer-list-filter">
        <Container maxWidth={"xl"}>
          <Box className="fitler-box-main">
            {/* title */}
            <Box className="inner-grid-box">
              <FormControl>
                <InputLabel id="title">Title</InputLabel>
                <Select
                  labelId="title"
                  id="title"
                  value={usertitle}
                  label="Title"
                  onChange={titleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Location */}
            <Box className="inner-grid-box">
              <FormControl>
                <InputLabel id="Location">Location</InputLabel>
                <Select
                  labelId="Location"
                  id="Location"
                  value={location}
                  label="Location"
                  onChange={locationChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"Dubai"}>Dubai</MenuItem>
                  <MenuItem value={"Europe"}>Europe</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Department */}
            <Box className="inner-grid-box">
              <FormControl>
                <InputLabel id="Department">Department</InputLabel>
                <Select
                  labelId="Department"
                  id="Department"
                  value={department}
                  label="Department"
                  onChange={departmentChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"Dubai"}>Dubai</MenuItem>
                  <MenuItem value={"Europe"}>Europe</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Experience */}
            <Box className="inner-grid-box">
              <FormControl>
                <InputLabel id="Experience">Experience</InputLabel>
                <Select
                  labelId="Experience"
                  id="Experience"
                  value={experience}
                  label="Experience"
                  onChange={experienceChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>India</MenuItem>
                  <MenuItem value={2}>Dubai</MenuItem>
                  <MenuItem value={3}>Europe</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </div>
      {/* CareerCard main */}
      <div className="second-row-career">
        <Container maxWidth={"xl"}>
          <div className="career-card-list">
            {careerCards.map((item, i) => (
              <div item={item} key={i} className="grid-col">
              <div className="carrer-box">
                <div className="job-name">Angular Developer</div>
                <div className="comman-text">Surat , Gujarat</div>
                <div className="comman-text">3years+ experience</div>
                <div className="description-title">Description</div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="btn-row">
                  <button className="comman-btn">Apply Now</button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CareerList;
