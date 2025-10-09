import React from 'react'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Product from '../components/Product'
import Payment from '../components/Payment'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Offer from '../components/Offer'
import Country from '../components/Country'

const Home = () => {
  return (
    <>
      <About/>
      <Offer/>
      <Product/>
      <Testimonial/>
      <Payment/>
      <Country/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  )
}

export default Home
