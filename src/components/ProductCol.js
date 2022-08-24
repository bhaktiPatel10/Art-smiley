import { Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import assetImages from '../constant/enum'

const ProductCol = () => {
  return (
      <>
        <Box className="Product-col">
            <Box className="product-img-box">
                <Box className="img-area">
                    <img src={assetImages.ProductImage} alt="img" />
                </Box>
                <Box className="add-to-cart-and-whislist">
                    <div className='comman-round'>
                      <Tooltip title="Add to Cart" arrow placement="left-start">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Tooltip>
                    </div>
                    <div className='comman-round'>
                      <Tooltip title="Add to Whislist" arrow placement="left-start">
                        <i className="fa-regular fa-heart"></i>
                      </Tooltip>
                    </div>
                </Box>
            </Box>
            <Box className="description-box">
              <div className='first-row'>
                 <div className="left-side-main">
                   <div className='painting-Name'>Galexy On Earth</div>
                   <div className="creator-name">John Deo</div>
                 </div>
                 <div className='right-side-main'>
                    <i className="fa-regular fa-heart"></i>
                    <div className="like-number">522</div>
                 </div>
              </div>
              <div className='second-row'>
                  <div className='price-detail'>
                      <div className="small-text">Buy</div>
                      $ 3,254
                  </div>
                  <div className="price-detail">
                      <div className='small-text'>Rent/Month</div>
                      $ 680
                  </div>
              </div>
            </Box>
        </Box>
      </>
  )
}

export default ProductCol