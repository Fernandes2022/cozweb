import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Service from './components/service/Service'
import Market from './components/market/Market'
import Stories from "./components/stories/Stories"
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <Market />
    <Stories />
    <Footer />
    </>
  )
}

export default App