import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Banner from "../components/Banner";
import assetImages from "../constant/enum";

const MyWishList = () => {
  const BreadCrumb = {
    defaultPage: "Home",
    currentPage: "My Wishlist",
  };
  const [quantity, setQuantity] = useState(0);
  const inCrement = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const whishList = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Banner bannerTitle="My Wishlist" BreadCrumb={BreadCrumb} />
      <div className="second-section-for-wishlist">
        <Container maxWidth={"xl"}>
          <div className="wishilist-item">Your Wishlist ( 4 items )</div>
          <div className="whish-item-table">
            <table>
              <thead>
                <tr>
                  <th className="product-col">Product</th>
                  <th className="quantity-col">Quntity</th>
                  <th className="stock-col">Stock Status</th>
                  <th className="price-col">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {whishList.map((item, i) => (
                  <tr item={item} key={i}>
                    <td>
                      <div className="inner-first-box">
                        <img src={assetImages.WhishListItem} alt="img" />
                        <div className="right-side-text">
                          <div className="above-title">
                            Wonderful Dreamland XL 4
                          </div>
                          <div className="artist-name">Peter nottrott</div>
                          <div className="painting-size">105X155cm</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="qua-box">
                        <div className="comman-btn" onClick={decrement}>
                          -
                        </div>
                        <div className="quantity-text">{quantity}</div>
                        <div className="comman-btn" onClick={inCrement}>
                          +
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="in-stock">In Stock</div>
                    </td>
                    <td>
                      <div className="price-item">$32.00</div>
                    </td>
                    <td>
                      <div className="cart-box">
                        <div className="add-cart">
                          <img src={assetImages.CartIcon} alt="img" />
                        </div>
                        <div className="cross-icon">
                          <img src={assetImages.Cross} alt="img" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
    </>
  );
};

export default MyWishList;