import React from 'react'
import assetImages from '../constant/enum'

const ArtistCard = () => {
  return (
    <>
        <div className='artist-cards-main'>
            <div className='banner-img-main'>
                <img src={assetImages.ArtistSmallBanner} alt="img" />
                <div className='profile-pic-main'>
                    <img src={assetImages.ArtistThreePic} alt="img" />
                </div>
            </div>
            <div className='second-row-cart'>
                <div className='left-side-main'>
                    <div className='text-title'>Morgan Wave</div>
                    <div className='price-title'>$200</div>
                </div>
                <div className='right-side-main'>
                    <div className='chat-icon'>
                        <img src={assetImages.ChatIcon} alt="img" />
                        Chat
                    </div>
                    <div className='delivery-charg'>Delivery Chargs: $50</div>
                </div>
            </div>
        </div>
    </> 
  )
}

export default ArtistCard