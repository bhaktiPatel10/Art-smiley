import React from "react";
import assetImages from "../constant/enum";

const ArtistFollowCard = () => {
  return (
    <>
       <div className='artist-cards-main artist-follower-card'>
            <div className='banner-img-main'>
                <img src={assetImages.ArtistSmallBanner} alt="img" />
                <div className='profile-pic-main'>
                    <img src={assetImages.ArtistThreePic} alt="img" />
                </div>
            </div>
            <div className='second-row-cart'>
                <div className='left-side-main'>
                    <div className='text-title'>Morgan Wave</div>
                    <div className='price-title'>Japan</div>
                </div>
                <div className='right-side-main'>
                    <div className='chat-icon'>
                        <img src={assetImages.Star} alt="img" />
                        3.5
                    </div>
                </div>
            </div>
            <div className="explore-btn">
                <button className="explore-btn-main">explore</button>
            </div>
        </div>
    </>
  );
};

export default ArtistFollowCard;
