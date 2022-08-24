import { Container } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'

const BestSeller = () => {
  return (
    <>
        <section className='best-seller-section'>
            <Container maxWidth='xl'>
                <div className='heading-main'>
                    <img src={assetImages.HeadingAbovePart} alt="Img" />
                    <h2 className='comman-text'>Best Sellers</h2>    
                </div>
                <div className='best-seller-images'>
                    <div className='grid-col-main'>
                        <img src={assetImages.FirstPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.SecondPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.ThirdPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.FourthPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.FifthPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.SixthPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.SeventhPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                    <div className='grid-col-main'>
                        <img src={assetImages.EightPaint} alt="img" />
                        <div className='title-text'>Galexy On Earth</div>
                        <div className='text-description'>John Deo</div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default BestSeller