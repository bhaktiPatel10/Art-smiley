import React from 'react'
import BestSeller from '../components/HomepageComponent/BestSeller'
import FeaturedArtist from '../components/HomepageComponent/FeaturedArtist'
import HomeBanner from '../components/HomepageComponent/HomeBanner'
import MostPopular from '../components/HomepageComponent/MostPopular'
import NewestPainting from '../components/HomepageComponent/NewestPainting'
import Offer from '../components/HomepageComponent/Offer'
import Partner from '../components/HomepageComponent/Partner'
import RecentlyView from '../components/HomepageComponent/RecentlyView'
import ShopByCategory from '../components/HomepageComponent/ShopByCategory'
import ShopbyPrice from '../components/HomepageComponent/ShopbyPrice'
import Trending from '../components/HomepageComponent/Trending'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <>
      <HomeBanner />
      <NewestPainting />
      <ShopByCategory />
      <BestSeller />
      <MostPopular />
      <ShopbyPrice />
      <Offer />
      <FeaturedArtist />
      <Trending />
      <RecentlyView />
      <Partner /> 
      <Subscribe />
    </>
  )
}

export default Home

