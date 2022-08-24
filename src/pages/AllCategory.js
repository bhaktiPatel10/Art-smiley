import { Container } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import assetImages from "../constant/enum";

const AllCategory = () => {
  const BreadCrumb = {
    defaultPage: "Home",
    currentPage: "Category",
  };
  return (
    <>
      <Banner bannerTitle="All Category" BreadCrumb={BreadCrumb} />
      <div className="all-category-page">
          <Container maxWidth='xl'>
                <div className="grid-col-category-main">
                    <div className="grid-col-inner">
                        <img src={assetImages.Category1} alt="img" />
                        <div className="art-title">Artworks</div>
                    </div>
                    <div className="grid-col-inner">
                        <img src={assetImages.Category2} alt="img" />
                        <div className="art-title">Sculptures</div>
                    </div>
                    <div className="grid-col-inner">
                        <img src={assetImages.Category3} alt="img" />
                        <div className="art-title">Art Prints</div>
                    </div>
                    <div className="grid-col-inner">
                        <img src={assetImages.Category4} alt="img" />
                        <div className="art-title">Sculptures</div>
                    </div>
                    <div className="grid-col-inner">
                        <img src={assetImages.Category5} alt="img" />
                        <div className="art-title">Photography</div>
                    </div>
                    <div className="grid-col-inner">
                        <img src={assetImages.Category6} alt="img" />
                        <div className="art-title">Sculptures</div>
                    </div>
                </div>
          </Container>
      </div>
    </>
  );
};

export default AllCategory;
