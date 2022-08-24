import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllCategory from '../pages/AllCategory'
import ArtistDetail from '../pages/ArtistDetail'
import ArtistList from '../pages/ArtistList'
import CareerList from '../pages/CareerList'
import ContactUs from '../pages/ContactUs'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import JobDetail from '../pages/JobDetail'
import Login from '../pages/Login'
import MyAccount from '../pages/MyAccount'
import MyWishList from '../pages/MyWishList'
import Otp from '../pages/Otp'
import PressRelease from '../pages/PressRelease'
import PressReleaseDetail from '../pages/PressReleaseDetail'
import ProductDetails from '../pages/ProductDetails'
import ProductListing from '../pages/ProductListing'
import RentDetails from '../pages/RentDetails'
import Signup from '../pages/Signup'
import Tranding from '../pages/Tranding'

const Routing = () => {
  
  return (
    <>
        <Routes>
          <Route  path='/login' element={<Login />} />
          <Route  path='/signup' element={<Signup />} />
          <Route exact path='/otp' element={<Otp />} />
          <Route  path='/' element={<Home />} />
          <Route  path='/contact-us' element={<ContactUs />} />
          <Route  path='/category' element={<AllCategory />} />
          <Route  path='/category/:categoryId' element={<ProductListing />} />
          <Route  path='/tranding' element={<Tranding />} />
          <Route  path='/product/:productId' element={<ProductDetails />} />
          <Route  path='/rentDetail' element={<RentDetails />} />
          <Route  path='/artist-list' element={<ArtistList />} />
          <Route  path='/artist/:artistId' element={<ArtistDetail/>} />
          <Route  path='/faq' element={<Faq />} />
          <Route  path='/career' element={<CareerList />} />
          <Route  path='/career/:jobId' element={<JobDetail/>} />
          <Route  path='/press-releases' element={<PressRelease />} />
          <Route  path='/press-releases/1' element={<PressReleaseDetail />} />
          <Route  path='/whislist' element={<MyWishList />} />
          <Route  path='/my-account' element={<MyAccount/>} />
        </Routes>
    </> 
  )
}


export default Routing;