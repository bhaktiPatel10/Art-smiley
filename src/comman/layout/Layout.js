import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from '../../routing/Routing'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = () => {
  return (
    <Router>
        <Header />
        <Routing />
        <Footer/>
    </Router>
  )
}

export default Layout