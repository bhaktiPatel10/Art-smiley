import { Container } from '@mui/material'
import React from 'react'
import assetImages from '../../constant/enum'

const Trending = () => {
    const trnding = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
        <>
            <section className='trending-section-main'>
                <Container maxWidth='xl'>
                    <div className='heading-main'>
                        <img src={assetImages.HeadingAbovePart} alt="Img" />
                        <h2 className='comman-text'>Trending</h2>    
                    </div> 
                    <div className='trending-grid-main'>
                        {trnding.map((item, i) =>(
                            <div key={i} item={item} className='grid-col-main'>
                                <img src={assetImages.Trending} alt="img" />
                                <div  className='trending-text'>Art Prints</div>
                            </div>
                        ))}
                    </div>
                    <div className='explore-btn'>
                        <button className='comman-btn'>Explore</button>
                    </div>
                </Container>
            </section>

        </>
  )
}

export default Trending