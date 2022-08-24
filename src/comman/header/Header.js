import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import assetImages from "../../constant/enum";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem('auth-token')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ----Toggle-drawwer-main
  const ToggleBtn = () => {
    setShow((prevstate) => !prevstate);
    document.body.classList.toggle("menu-active", !show);
  };
  // ----Logout----//
  const LogOut = () => {
    localStorage.clear('authToken')
    window.location.href="/login"
  }
  return (
    <>
      <header>
        <Box className="top-header-bar">
          <Container maxWidth="xl">
            <Box className="inner-box-area">
              <Box className="left-column">
                <a
                  href="mailto:contactus@artsmiley.com"
                  title="contactus@artsmiley.com"
                >
                  <i className="fa-regular fa-envelope"></i>
                  contactus@artsmiley.com
                </a>
                <a href="tel:+971 561756215" title="+971 561756215">
                  <i className="fa fa-phone-volume"></i>
                  +971 561756215
                </a>
              </Box>
              <Box className="right-column">
                <div className="comman-col">
                  <div className="links-custom">
                    {token ? 
                      <span className="logut-btn" onClick={LogOut}>Logout</span>:
                      <Link to="/login">Login</Link>
                    }
                  </div>
                  {/* <Button
                    id="demo-positioned-button1"
                    aria-controls={open ? "demo-positioned-menu1" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <i className="fa-regular fa-user"></i>
                    Sign up
                    <i className="fa-solid fa-caret-down"></i>
                  </Button>
                  <Menu
                    id="demo-positioned-menu1"
                    aria-labelledby="demo-positioned-button1"
                    className="dropdown-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu> */}
                </div>
                <div className="whislist-icons">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="comman-col">
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <img src={assetImages.ukLogo} alt="flag" />
                    English
                    <i className="fa-solid fa-caret-down"></i>
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className="bottom-header-bar">
          <Container maxWidth="xl">
            <div className="first-column mobile-toggle-col">
              <div className="mobile-toggle-main" onClick={ToggleBtn}>
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="links-custom">
                <Link to="/">Paintings</Link>
              </div>
              <div className="links-custom">
                <Link to="/">Prints</Link>
              </div>
              <div className="links-custom">
                <Link to="/">Drawings</Link>
              </div>
              <div className="links-custom">
                <Link to="/">Photography</Link>
              </div>
            </div>
            <div className="center-column">
              <Link to="/" title="Art Smiley">
                <img src={assetImages.logo} alt="Art Smiley" />
              </Link>
            </div>
            <div className="first-column">
              <div className="links-custom">
                <Link to="/">Scuptures</Link>
              </div>
              <div className="links-custom">
                <Link to="/">Artists</Link>
              </div>
              <div className="links-custom">
                <Link to="/">ArtSmiley Biz</Link>
              </div>
              <div className="links-custom">
                <Link to="/contact-us">NFTs</Link>
              </div>
              <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="cart-bags">
                <img src={assetImages.cartBag} alt="cart-bag" />
                <span className="cart-badge">2</span>
              </div>
            </div>
          </Container>
        </Box>

        {/* ----Mobile-Menu----- */}
        <div
          className={show ? "active-overlay overlay" : "overlay"}
          onClick={ToggleBtn}
        ></div>
        <div
          className={show ? "active mobile-drawer-main" : "mobile-drawer-main"}
        >
          <div className="first-row-main">
            <div className="logo-area">
              <Link to="/" onClick={ToggleBtn}>
                <img src={assetImages.logo} alt="logo" />
              </Link>
            </div>
            <div className="close-btn" onClick={ToggleBtn}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="menu-area-main">
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                Paintings
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                Prints
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                Drawings
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                Photography
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                Scuptures
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                Artists
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/" onClick={ToggleBtn}>
                ArtSmiley Biz
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/contact-us" onClick={ToggleBtn}>
                NFTs
              </Link>
            </div>
            <div className="links-custom">
              <Link to="/login" onClick={ToggleBtn}>
                Login
              </Link>
            </div>
          </div>
          <div className="mobile-number-box">
            <a href="mailto:contactus@artsmiley.com" title="contactus@artsmiley.com">
              <i className="fa-regular fa-envelope"></i>
              contactus@artsmiley.com
            </a>
            <a href="tel:+971 561756215" title="+971 561756215">
              <i className="fa fa-phone-volume"></i>
              +971 561756215
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
